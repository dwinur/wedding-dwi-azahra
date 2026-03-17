import { Db, MongoClient } from 'mongodb'

let client: MongoClient | null = null
let db: Db | null = null

function getClient() {
  if (!client) {
    // Vercel deployment hack: dynamically access process.env to prevent Next.js
    // from statically optimizing/replacing the string at build time if it's considered empty.
    const env = process.env as Record<string, string | undefined>
    const url = env.MONGODB_URI || env.NEXT_PUBLIC_MONGODB_URL
    
    if (!url) {
      throw new Error('Database connection URL (MONGODB_URI or NEXT_PUBLIC_MONGODB_URL) is not defined in Environment Variables')
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
