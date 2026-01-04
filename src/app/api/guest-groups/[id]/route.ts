import { ObjectId } from 'mongodb'
import { NextRequest, NextResponse } from 'next/server'

import GuestGroupsModel from '@/server/models/guest_groups'
import GuestsModel from '@/server/models/guests'

type Params = { params: Promise<{ id: string }> }

export async function DELETE(_: NextRequest, { params }: Params) {
  const { id } = await params
  const groupId = new ObjectId(id)
  const guestGroups = await GuestGroupsModel()
  const guests = await GuestsModel()

  await guestGroups.deleteOne({ _id: groupId })
  await guests.deleteMany({ group_id: groupId })

  return NextResponse.json({ status: 204 })
}
