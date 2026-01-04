// MongoDB Database Initialization Script
// Jalankan di MongoDB Shell atau Compass

// ===========================================
// 1. USE DATABASE
// ===========================================
use('invitation3');

// ===========================================
// 2. CREATE COLLECTIONS
// ===========================================

// Guest Groups - Kategori/grup tamu
db.createCollection("guest_groups");

// Guests - Data tamu undangan
db.createCollection("guests");

// Wishes - Ucapan & doa dari tamu
db.createCollection("wishes");

// View Histories - Log siapa yang buka undangan
db.createCollection("view_histories");

// Users - Admin panel users
db.createCollection("users");

// ===========================================
// 3. CREATE INDEXES
// ===========================================

// guest_groups indexes
db.guest_groups.createIndex({ "name": 1 });
db.guest_groups.createIndex({ "created_at": -1 });

// guests indexes
db.guests.createIndex({ "group_id": 1 });
db.guests.createIndex({ "name": 1 });
db.guests.createIndex({ "created_at": -1 });

// wishes indexes
db.wishes.createIndex({ "created_at": -1 });
db.wishes.createIndex({ "guest_id": 1 });
db.wishes.createIndex({ "group_id": 1 });
db.wishes.createIndex({ "status": 1 });

// view_histories indexes
db.view_histories.createIndex({ "guest_id": 1 });
db.view_histories.createIndex({ "created_at": -1 });

// users indexes
db.users.createIndex({ "email": 1 }, { unique: true });

// ===========================================
// 4. INSERT SAMPLE GUEST GROUPS
// ===========================================

db.guest_groups.insertMany([
  { 
    name: "Keluarga Besar Pengantin Wanita", 
    created_at: new Date() 
  },
  { 
    name: "Keluarga Besar Pengantin Pria", 
    created_at: new Date() 
  },
  { 
    name: "Teman Kuliah", 
    created_at: new Date() 
  },
  { 
    name: "Rekan Kerja", 
    created_at: new Date() 
  },
  { 
    name: "Tetangga & Sahabat", 
    created_at: new Date() 
  }
]);

print("✅ Guest groups created!");

// ===========================================
// 5. INSERT SAMPLE GUESTS
// ===========================================

// Get group IDs
const groups = db.guest_groups.find().toArray();
const keluargaWanita = groups.find(g => g.name.includes("Wanita"))._id;
const keluargaPria = groups.find(g => g.name.includes("Pria"))._id;
const temanKuliah = groups.find(g => g.name.includes("Kuliah"))._id;
const rekanKerja = groups.find(g => g.name.includes("Kerja"))._id;

db.guests.insertMany([
  // Keluarga Wanita
  { 
    group_id: keluargaWanita, 
    name: "Bapak Irwan & Ibu Esther", 
    phone: "",
    created_at: new Date() 
  },
  { 
    group_id: keluargaWanita, 
    name: "Om Budi & Tante Sari", 
    phone: "",
    created_at: new Date() 
  },
  
  // Keluarga Pria
  { 
    group_id: keluargaPria, 
    name: "Bapak Muhadi & Ibu Neneng", 
    phone: "",
    created_at: new Date() 
  },
  
  // Teman Kuliah
  { 
    group_id: temanKuliah, 
    name: "Sarah & John", 
    phone: "",
    created_at: new Date() 
  },
  { 
    group_id: temanKuliah, 
    name: "Rina Wijaya", 
    phone: "",
    created_at: new Date() 
  },
  { 
    group_id: temanKuliah, 
    name: "Ahmad Fauzi", 
    phone: "",
    created_at: new Date() 
  },
  
  // Rekan Kerja
  { 
    group_id: rekanKerja, 
    name: "Tim Engineering", 
    phone: "",
    created_at: new Date() 
  }
]);

print("✅ Guests created!");

// ===========================================
// 6. VERIFY DATA
// ===========================================

print("\n📊 Database Summary:");
print("-------------------");
print("Guest Groups: " + db.guest_groups.countDocuments());
print("Guests: " + db.guests.countDocuments());
print("Wishes: " + db.wishes.countDocuments());
print("View Histories: " + db.view_histories.countDocuments());
print("Users: " + db.users.countDocuments());

print("\n✅ Database initialization complete!");
print("📌 Wishes collection is empty - ready to receive guest messages!");
