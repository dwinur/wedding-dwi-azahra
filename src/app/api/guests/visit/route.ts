import { ObjectId } from 'mongodb'
import { NextRequest, NextResponse } from 'next/server'

import GuestsModel from '@/server/models/guests'
import ViewHistoriesModel from '@/server/models/view_histories'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name } = body

  if (!name) {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 })
  }

  const guests = await GuestsModel()
  const viewHistories = await ViewHistoriesModel()

  let data = await guests.findOne({ name: name })
  
  if (!data) {
    const newGroupId = new ObjectId()
    const res = await guests.insertOne({
      name,
      group_id: newGroupId,
      seen: 1
    })
    data = { _id: res.insertedId, name, group_id: newGroupId, seen: 1 }
  } else {
    await guests.updateOne({ _id: data._id }, { $inc: { seen: 1 } })
    data.seen = (data.seen || 0) + 1
  }

  await viewHistories.findOneAndUpdate(
    {
      guest_id: data._id,
      group_id: data.group_id,
    },
    {
      $set: {
        name: data.name,
        created_at: new Date(),
      },
    },
    { upsert: true }
  )

  return new NextResponse(JSON.stringify({ data }), { status: 200 })
}
