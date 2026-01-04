/* eslint-disable no-underscore-dangle */
import { NextResponse } from 'next/server'

import GuestGroupsModel from '@/server/models/guest_groups'
import ViewHistoriesModel from '@/server/models/view_histories'

export async function GET() {
  const viewHistories = await ViewHistoriesModel()
  const groups = await GuestGroupsModel()
  const data = await viewHistories.find({}, { sort: [['created_at', -1]] }).toArray()
  const groupList = await groups.find({ _id: { $in: data.map((d) => d.group_id) } }).toArray()
  data.forEach((row) => {
    row.group_name = groupList.find((g) => g._id.equals(row.group_id))?.name
  })

  return new NextResponse(JSON.stringify({ data }), { status: 200 })
}
