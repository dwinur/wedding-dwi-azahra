/**
 * MongoDB Setup Script for Wedding Invitation App
 * Database: invitation3
 * 
 * ============================================
 * CARA MENJALANKAN:
 * ============================================
 * 
 * Option 1: MongoDB Atlas (via mongosh)
 * --------------------------------------
 * mongosh "mongodb+srv://cluster.xxxxx.mongodb.net/" --username admin
 * # Setelah connect, copy-paste isi file ini
 * 
 * Option 2: MongoDB Compass (GUI)
 * --------------------------------------
 * 1. Connect ke cluster
 * 2. Buka tab "MONGOSH" di bawah
 * 3. Copy-paste isi file ini
 * 
 * ============================================
 */

// Gunakan database invitation3
use('invitation3');

// ============================================
// 1. Buat Collection: guest_groups
// ============================================
db.createCollection('guest_groups');

// Insert sample data untuk guest_groups
db.guest_groups.insertMany([
  { name: 'Keluarga Besar Mempelai Wanita' },
  { name: 'Keluarga Besar Mempelai Pria' },
  { name: 'Teman Kuliah' },
  { name: 'Teman Kerja' },
  { name: 'Tetangga' },
  { name: 'Umum' }
]);

print('✅ Collection guest_groups created with sample data');

// ============================================
// 2. Buat Collection: guests
// ============================================
db.createCollection('guests');

// Ambil ID dari guest_groups untuk referensi
const groups = db.guest_groups.find().toArray();
const keluargaWanita = groups.find(g => g.name === 'Keluarga Besar Mempelai Wanita');
const keluargaPria = groups.find(g => g.name === 'Keluarga Besar Mempelai Pria');
const temanKuliah = groups.find(g => g.name === 'Teman Kuliah');
const umum = groups.find(g => g.name === 'Umum');

// Insert sample guests
db.guests.insertMany([
  { group_id: keluargaWanita._id, name: 'Budi Santoso', seen: 0 },
  { group_id: keluargaWanita._id, name: 'Siti Aminah', seen: 0 },
  { group_id: keluargaPria._id, name: 'Ahmad Rizki', seen: 0 },
  { group_id: keluargaPria._id, name: 'Dewi Lestari', seen: 0 },
  { group_id: temanKuliah._id, name: 'Rina Wulandari', seen: 0 },
  { group_id: temanKuliah._id, name: 'Hendra Pratama', seen: 0 },
  { group_id: umum._id, name: 'Tamu Undangan', seen: 0 }
]);

// Buat index untuk optimasi query
db.guests.createIndex({ group_id: 1 });
db.guests.createIndex({ name: 1 });

print('✅ Collection guests created with sample data and indexes');

// ============================================
// 3. Buat Collection: wishes
// ============================================
db.createCollection('wishes');

// Ambil sample guest untuk wishes
const sampleGuest = db.guests.findOne();

// Insert sample wishes
db.wishes.insertMany([
  {
    guest_id: sampleGuest._id,
    group_id: sampleGuest.group_id,
    name: sampleGuest.name,
    description: 'Selamat menempuh hidup baru! Semoga menjadi keluarga sakinah mawaddah warahmah 💕',
    status: 1, // 1 = Hadir
    created_at: new Date()
  },
  {
    guest_id: sampleGuest._id,
    group_id: sampleGuest.group_id,
    name: 'Tamu Lainnya',
    description: 'Barakallahu lakuma wa baraka alaikuma wa jamaah bainakuma fi khair 🤲',
    status: 1,
    created_at: new Date()
  }
]);

// Buat index untuk optimasi query
db.wishes.createIndex({ created_at: -1 });
db.wishes.createIndex({ guest_id: 1 });
db.wishes.createIndex({ group_id: 1 });

print('✅ Collection wishes created with sample data and indexes');

// ============================================
// 4. Buat Collection: view_histories
// ============================================
db.createCollection('view_histories');

// Buat unique compound index (untuk upsert)
db.view_histories.createIndex({ guest_id: 1, group_id: 1 }, { unique: true });
db.view_histories.createIndex({ created_at: -1 });

print('✅ Collection view_histories created with indexes');

// ============================================
// 5. Buat Collection: users (Data Mempelai)
// ============================================
db.createCollection('users');

// Insert data mempelai
db.users.insertMany([
  {
    role: 'cpw', // Calon Pengantin Wanita
    shortName: 'Upi',
    fullName: 'Azahra Emiria Putri Lima',
    gender: 'female',
    childOrder: 5,
    father: {
      name: 'Irwan Sadewa',
      isAlm: false
    },
    mother: {
      name: 'Esther Maria Tuffah',
      isAlm: false
    }
  },
  {
    role: 'cpp', // Calon Pengantin Pria
    shortName: 'Dwi',
    fullName: 'Dwi Nurhadiansyah',
    gender: 'male',
    childOrder: 2,
    father: {
      name: 'Muhadi',
      isAlm: false
    },
    mother: {
      name: 'Neneng Arsa',
      isAlm: false
    }
  }
]);

db.users.createIndex({ role: 1 }, { unique: true });

print('✅ Collection users created with bride & groom data');

// ============================================
// Tampilkan ringkasan
// ============================================
print('\n========================================');
print('🎉 DATABASE SETUP COMPLETED!');
print('========================================');
print('Database: invitation3');
print('Collections created:');
print('  - guest_groups: ' + db.guest_groups.countDocuments() + ' documents');
print('  - guests: ' + db.guests.countDocuments() + ' documents');
print('  - wishes: ' + db.wishes.countDocuments() + ' documents');
print('  - view_histories: ' + db.view_histories.countDocuments() + ' documents');
print('  - users: ' + db.users.countDocuments() + ' documents');
print('\n📝 Jangan lupa set environment variable:');
print('   NEXT_PUBLIC_MONGODB_URL=mongodb+srv://...');
print('========================================\n');

// Tampilkan sample guest ID untuk testing
const testGuest = db.guests.findOne();
print('🔗 Test URL: http://localhost:3000/' + testGuest._id);
