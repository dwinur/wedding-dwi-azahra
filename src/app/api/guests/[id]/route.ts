/* eslint-disable no-underscore-dangle */
import { ObjectId } from 'mongodb'
import { NextRequest, NextResponse } from 'next/server'

import GuestsModel from '@/server/models/guests'
import ViewHistoriesModel from '@/server/models/view_histories'

type Params = { params: Promise<{ id: string }> }

export async function GET(_: NextRequest, { params }: Params) {
  const { id } = await params
  const guestId = new ObjectId(id)
  const guests = await GuestsModel()
  const viewHistories = await ViewHistoriesModel()
  const data = await guests.findOneAndUpdate({ _id: guestId }, { $inc: { seen: 1 } })

  if (data) {
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
      { upsert: true },
    )
  }

  return new NextResponse(JSON.stringify({ data }), { status: 200 })
}

export async function PUT(req: Request, { params }: Params) {
  const { id } = await params
  const guestId = new ObjectId(id)
  const body = await req.json()
  const guests = await GuestsModel()

  await guests.updateOne({ _id: guestId }, { $set: body })

  return NextResponse.json({ status: 204 })
}

export async function DELETE(_: Request, { params }: Params) {
  const { id } = await params
  const guestId = new ObjectId(id)
  const guests = await GuestsModel()

  await guests.deleteOne({ _id: guestId })

  return NextResponse.json({ status: 204 })
}
