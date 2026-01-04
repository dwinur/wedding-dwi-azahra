import { ObjectId } from 'mongodb'
import { NextRequest, NextResponse } from 'next/server'

import GuestsModel from '@/server/models/guests'

export async function GET(req: NextRequest) {
  const guests = await GuestsModel()
  const groupId = new ObjectId(req.nextUrl.searchParams.get('group_id') || '')
  const data = await guests.find({ group_id: groupId }, { sort: ['name', 1] }).toArray()

  return new NextResponse(JSON.stringify({ data }), { status: 200 })
}

export async function POST(req: Request) {
  const body = await req.json()
  const guests = await GuestsModel()

  await guests.insertOne({ group_id: new ObjectId(body.group_id), name: body.name, seen: 0 })

  return NextResponse.json({ status: 204 })
}
