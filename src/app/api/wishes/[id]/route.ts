import { ObjectId } from 'mongodb'
import { NextRequest, NextResponse } from 'next/server'

import WishesModel from '@/server/models/wishes'

type Params = { params: Promise<{ id: string }> }

export async function DELETE(_: NextRequest, { params }: Params) {
  const { id } = await params
  const wishId = new ObjectId(id)
  const wishes = await WishesModel()

  await wishes.deleteOne({ _id: wishId })

  return NextResponse.json({ status: 204 })
}
