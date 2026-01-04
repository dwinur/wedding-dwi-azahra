/* eslint-disable no-underscore-dangle */
import { NextResponse } from 'next/server'

import GuestGroupsModel from '@/server/models/guest_groups'
import GuestsModel from '@/server/models/guests'

export async function GET() {
  const guestGroups = await GuestGroupsModel()
  const guests = await GuestsModel()
  const list = await guestGroups.find({}, { sort: ['name', 1] }).toArray()
  const totals = await Promise.all(list.map((l) => guests.countDocuments({ group_id: l._id })))

  return new NextResponse(
    JSON.stringify({ data: list.map((l, i) => ({ ...l, total: totals[i] })) }),
    {
      status: 200,
    },
  )
}

export async function POST(req: Request) {
  const body = await req.json()
  const guestGroups = await GuestGroupsModel()

  await guestGroups.insertOne({ name: body.name })

  return NextResponse.json({ status: 204 })
}
