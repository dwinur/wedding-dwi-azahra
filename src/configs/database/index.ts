import { Db, MongoClient } from 'mongodb'

let client: MongoClient | null = null
let db: Db | null = null

function getClient() {
  if (!client) {
    const url = process.env.NEXT_PUBLIC_MONGODB_URL
    if (!url) {
      throw new Error('NEXT_PUBLIC_MONGODB_URL is not defined')
    }
    client = new MongoClient(url)
  }
  return client
}

export default async function database() {
  if (!db) {
    const mongoClient = getClient()
    await mongoClient.connect()
    db = mongoClient.db('invitation3')
  }

  return db
}
