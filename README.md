# 💒 Wedding Invitation - Upi & Dwi

Undangan pernikahan digital modern dengan Next.js, TailwindCSS, dan MongoDB.

## ✨ Features

- 🎨 Modern UI dengan TailwindCSS
- 📱 Responsive design (Mobile & Desktop)
- 🎬 Background video cinematic
- 🎵 Music player
- 💬 Wishes/Ucapan dengan database MongoDB
- 📍 Integrasi Google Maps
- 🎁 Informasi wedding gift
- 📊 Guest tracking & analytics

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup MongoDB Atlas

1. Buat akun di [MongoDB Atlas](https://cloud.mongodb.com) (gratis)
2. Buat cluster M0 (free tier)
3. Buat database user
4. Whitelist IP: `0.0.0.0/0`
5. Copy connection string

### 3. Setup Environment

```bash
# Copy .env.example ke .env.local
cp .env.example .env.local

# Edit .env.local dan tambahkan MongoDB connection string
NEXT_PUBLIC_MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority
```

### 4. Setup Database

Jalankan script setup di MongoDB Compass atau mongosh:
- Buka file `scripts/mongodb-setup.js`
- Copy-paste ke mongosh atau MongoDB Compass

### 5. Run Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
wedding-invitation/
├── src/
│   ├── app/
│   │   ├── api/           # Backend API routes
│   │   │   ├── guests/
│   │   │   ├── wishes/
│   │   │   └── ...
│   │   ├── [guestId]/     # Dynamic guest page
│   │   └── page.tsx       # Homepage
│   ├── components/
│   │   ├── sections/      # Page sections
│   │   │   ├── CoverSection.tsx
│   │   │   ├── FamilySection.tsx
│   │   │   ├── WishesSection.tsx
│   │   │   └── ...
│   │   ├── FooterMenu.tsx
│   │   ├── MusicPlayer.tsx
│   │   └── Providers.tsx
│   ├── configs/
│   │   ├── axios/
│   │   └── database/      # MongoDB connection
│   ├── lib/
│   │   ├── helpers/
│   │   └── services/      # API services
│   └── server/
│       └── models/        # MongoDB models
├── public/
│   ├── images/            # Gallery & cover images
│   ├── videos/            # Background video
│   └── audios/            # Background music
└── scripts/
    └── mongodb-setup.js   # Database setup script
```

## 🔗 URLs

- **Homepage**: `http://localhost:3000`
- **Guest Page**: `http://localhost:3000/[guestId]`
- **With Custom Name**: `http://localhost:3000/[guestId]?to=Nama%20Tamu`

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: TailwindCSS
- **Database**: MongoDB
- **State Management**: TanStack Query (React Query)
- **Icons**: Lucide React
- **Animation**: Framer Motion

## 📦 Deployment

### Deploy ke Vercel

1. Push ke GitHub
2. Import project di [Vercel](https://vercel.com)
3. Set Environment Variables:
   - `NEXT_PUBLIC_MONGODB_URL`
4. Deploy!

## 📄 License

MIT License

---

Made with ❤️ for Upi & Dwi's Wedding
