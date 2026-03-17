import { MongoClient } from 'mongodb'

const url = 'mongodb+srv://dwinurhadiansyah_db_user:Imk25Y6q4umLAObR@wedding-invitation-dwn.a76sazd.mongodb.net/?appName=wedding-invitation-dwn'

async function clearGuests() {
  const client = new MongoClient(url)
  try {
    await client.connect()
    const db = client.db('invitation3')
    const guests = db.collection('guests')
    const result = await guests.deleteMany({})
    console.log(`Deleted ${result.deletedCount} guests`)
  } catch (error) {
    console.error('Error clearing guests:', error)
  } finally {
    await client.close()
  }
}

clearGuests()
