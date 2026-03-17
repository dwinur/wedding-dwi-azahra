import { NextResponse } from 'next/server'
import database from '@/configs/database'
import { v4 as uuidv4 } from 'uuid'

export async function POST(req: Request) {
  try {
    const { guests } = await req.json()

    if (!Array.isArray(guests) || guests.length === 0) {
      return NextResponse.json(
        { message: 'Guests array is required and cannot be empty' },
        { status: 400 }
      )
    }

    const db = await database()
    const guestsCollection = db.collection('guests')

    let insertedCount = 0
    let skippedCount = 0

    // Fetch existing guests to avoid duplicates based on exact name match (case-insensitive)
    const existingGuests = await guestsCollection.find({}).toArray()
    const existingNames = new Set(existingGuests.map(g => g.name.toLowerCase().trim()))

    const newGuests = []
    const now = new Date()

    for (const guest of guests) {
      if (!guest || !guest.name || typeof guest.name !== 'string') continue
      
      const cleanName = guest.name.trim()
      const phone = guest.phone ? guest.phone.trim() : ''
      
      if (existingNames.has(cleanName.toLowerCase())) {
        skippedCount++
        continue
      }

      newGuests.push({
        id: uuidv4(),
        name: cleanName,
        phone: phone, // Saved from CSV
        email: '', // Optional
        address: '', // Optional
        type: guest.type || 'Personal',
        status: 1, // Active
        group_id: 'csv-import-group', // Default group for imported
        pax: 1,
        createdAt: now,
        updatedAt: now,
        viewCount: 0 
      })

      // Add to set to prevent duplicates within the same CSV payload
      existingNames.add(cleanName.toLowerCase())
    }

    if (newGuests.length > 0) {
      const result = await guestsCollection.insertMany(newGuests)
      insertedCount = result.insertedCount
    }

    return NextResponse.json({
      message: 'Processing complete',
      insertedCount,
      skippedCount,
      totalProcessed: guests.length
    }, { status: 200 })

  } catch (error: any) {
    console.error('Error inserting bulk guests:', error)
    return NextResponse.json(
      { message: 'An error occurred while processing the request', error: error.message },
      { status: 500 }
    )
  }
}
