import { ObjectId } from 'mongodb'
import { NextResponse } from 'next/server'

import WishesModel from '@/server/models/wishes'

export async function GET() {
  const wishes = await WishesModel()
  const data = await wishes.find({}, { limit: 20, sort: [['created_at', -1]] }).toArray()

  return new NextResponse(JSON.stringify({ data }), { status: 200 })
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const wishes = await WishesModel()

    await wishes.insertOne({
      ...body,
      guest_id: body.guest_id ? new ObjectId(body.guest_id) : null,
      group_id: body.group_id ? new ObjectId(body.group_id) : null,
      created_at: new Date(),
    })

    return NextResponse.json({ status: 204 })
  } catch (error) {
    console.error('Error creating wish:', error)
    return NextResponse.json(
      { error: 'Failed to create wish' },
      { status: 500 },
    )
  }
}
