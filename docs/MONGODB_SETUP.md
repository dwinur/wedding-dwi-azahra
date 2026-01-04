# MongoDB Setup Guide untuk Wedding Invitation

Panduan lengkap untuk setup MongoDB database untuk project wedding invitation.

---

## 📌 OPSI 1: MongoDB Atlas (Cloud - RECOMMENDED)

### Step 1: Buat Akun MongoDB Atlas
1. Buka https://www.mongodb.com/atlas
2. Klik "Try Free" dan buat akun (bisa pakai Google)
3. Pilih plan **FREE (M0 Sandbox)** - gratis selamanya

### Step 2: Buat Cluster
1. Pilih cloud provider: **AWS** (recommended)
2. Pilih region terdekat: **Singapore (ap-southeast-1)**
3. Cluster name: `wedding-cluster` (atau bebas)
4. Klik **Create Cluster**

### Step 3: Setup Database Access
1. Di sidebar, klik **Database Access**
2. Klik **Add New Database User**
3. Isi:
   - Username: `wedding_admin`
   - Password: (buat password kuat, SIMPAN!)
   - Database User Privileges: **Read and write to any database**
4. Klik **Add User**

### Step 4: Setup Network Access
1. Di sidebar, klik **Network Access**
2. Klik **Add IP Address**
3. Pilih **Allow Access from Anywhere** (0.0.0.0/0)
   - Untuk production, batasi ke IP server saja
4. Klik **Confirm**

### Step 5: Dapatkan Connection String
1. Di sidebar, klik **Database**
2. Klik **Connect** pada cluster
3. Pilih **Connect your application**
4. Copy connection string, contoh:
   ```
   mongodb+srv://wedding_admin:<password>@wedding-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. Ganti `<password>` dengan password yang tadi dibuat

### Step 6: Update .env.local
```env
MONGODB_URI=mongodb+srv://wedding_admin:PASSWORD_KAMU@wedding-cluster.xxxxx.mongodb.net/invitation3?retryWrites=true&w=majority
```

---

## 📌 OPSI 2: MongoDB Local (Development)

### Install MongoDB Community Server
1. Download dari https://www.mongodb.com/try/download/community
2. Install dengan default settings
3. MongoDB akan berjalan di `localhost:27017`

### Connection String untuk Local
```env
MONGODB_URI=mongodb://localhost:27017/invitation3
```

---

## 📌 SETUP DATABASE SCHEMA

### Buat Collections dan Indexes

Jalankan script ini di MongoDB Shell atau Compass:

```javascript
// Gunakan database invitation3
use invitation3

// 1. Collection: guest_groups
db.createCollection("guest_groups")
db.guest_groups.createIndex({ "name": 1 })

// 2. Collection: guests
db.createCollection("guests")
db.guests.createIndex({ "group_id": 1 })
db.guests.createIndex({ "name": 1 })

// 3. Collection: wishes
db.createCollection("wishes")
db.wishes.createIndex({ "created_at": -1 })
db.wishes.createIndex({ "guest_id": 1 })

// 4. Collection: view_histories
db.createCollection("view_histories")
db.view_histories.createIndex({ "guest_id": 1 })
db.view_histories.createIndex({ "created_at": -1 })

// 5. Collection: users (untuk admin panel)
db.createCollection("users")
db.users.createIndex({ "email": 1 }, { unique: true })
```

---

## 📌 DATA SCHEMA

### guest_groups
```javascript
{
  _id: ObjectId,
  name: String,           // "Keluarga Besar Bapak Ahmad"
  created_at: Date
}
```

### guests
```javascript
{
  _id: ObjectId,
  group_id: ObjectId,     // Reference ke guest_groups
  name: String,           // "Budi Santoso"
  phone: String,          // "08123456789" (optional)
  address: String,        // (optional)
  created_at: Date
}
```

### wishes
```javascript
{
  _id: ObjectId,
  guest_id: ObjectId,     // Reference ke guests
  group_id: ObjectId,     // Reference ke guest_groups
  name: String,           // Nama yang ditampilkan
  description: String,    // Isi ucapan
  status: Number,         // 1 = Hadir, 0 = Tidak Hadir
  created_at: Date
}
```

### view_histories
```javascript
{
  _id: ObjectId,
  guest_id: ObjectId,
  user_agent: String,
  ip_address: String,
  created_at: Date
}
```

### users
```javascript
{
  _id: ObjectId,
  email: String,
  password: String,       // Hashed
  name: String,
  role: String,           // "admin", "user"
  created_at: Date
}
```

---

## 📌 INSERT SAMPLE DATA

### Insert Guest Groups
```javascript
db.guest_groups.insertMany([
  { name: "Keluarga Besar Pengantin Wanita", created_at: new Date() },
  { name: "Keluarga Besar Pengantin Pria", created_at: new Date() },
  { name: "Teman Kuliah", created_at: new Date() },
  { name: "Rekan Kerja", created_at: new Date() },
  { name: "Tetangga", created_at: new Date() }
])
```

### Insert Guests
```javascript
// Dapatkan group_id dulu
const groups = db.guest_groups.find().toArray()
const keluargaWanita = groups.find(g => g.name.includes("Wanita"))._id
const temanKuliah = groups.find(g => g.name.includes("Kuliah"))._id

db.guests.insertMany([
  { 
    group_id: keluargaWanita, 
    name: "Bapak & Ibu Ahmad", 
    created_at: new Date() 
  },
  { 
    group_id: temanKuliah, 
    name: "Sarah & John", 
    created_at: new Date() 
  },
  { 
    group_id: temanKuliah, 
    name: "Rina Wijaya", 
    created_at: new Date() 
  }
])
```

---

## 📌 VERIFY CONNECTION

### Test di Terminal
```bash
cd d:\project\wedding-invitation
npm run dev
```

Buka http://localhost:3000 dan coba kirim ucapan.

### Check di MongoDB Compass
1. Download MongoDB Compass: https://www.mongodb.com/try/download/compass
2. Connect dengan connection string yang sama
3. Lihat database `invitation3` dan collection `wishes`

---

## 📌 TROUBLESHOOTING

### Error: "MongoServerError: bad auth"
- Cek password di connection string
- Pastikan user sudah dibuat di Database Access

### Error: "MongoNetworkError: connection refused"
- Cek Network Access, pastikan IP sudah di-whitelist
- Untuk development, allow 0.0.0.0/0

### Error: "MongooseError: buffering timed out"
- Connection string salah
- Cluster belum aktif (tunggu beberapa menit setelah create)

### Collection tidak muncul
- MongoDB membuat collection otomatis saat insert pertama
- Atau buat manual dengan script di atas

---

## 📌 PRODUCTION CHECKLIST

- [ ] Ganti Network Access dari 0.0.0.0/0 ke IP server production
- [ ] Gunakan password yang kuat (min 16 karakter)
- [ ] Enable MongoDB Atlas backup
- [ ] Set up monitoring alerts
- [ ] Gunakan environment variable untuk connection string (jangan hardcode)
