import database from '@/configs/database'

export default async function WishesModel() {
  const db = await database()
  return db.collection('wishes')
}
