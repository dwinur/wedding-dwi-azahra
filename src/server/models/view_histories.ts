import database from '@/configs/database'

export default async function ViewHistoriesModel() {
  const db = await database()
  return db.collection('view_histories')
}
