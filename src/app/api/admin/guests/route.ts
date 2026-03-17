import { NextRequest, NextResponse } from 'next/server'
import GuestsModel from '@/server/models/guests'

export async function GET(req: NextRequest) {
  try {
    const guests = await GuestsModel()
    
    // Fetch all guests, sorted by newest first
    const data = await guests.find({}, { sort: ['createdAt', -1] }).toArray()

    return NextResponse.json({ data }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ message: 'Failed to fetch guests', error: error.message }, { status: 500 })
  }
}
