import database from '@/configs/database'

export default async function GuestsModel() {
  const db = await database()
  return db.collection('guests')
}
