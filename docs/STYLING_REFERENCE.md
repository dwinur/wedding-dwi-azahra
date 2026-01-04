# Wedding Invitation - Styling Reference Document (ARD)

Dokumentasi ini dibuat sebagai referensi styling untuk project Wedding Invitation.
Semua styling harus **KONSISTEN** dan **SAMA PERSIS** dengan referensi High-Fidelity.

---

## 📌 TAILWIND CSS v3 SETUP (Next.js)

### Installation
```bash
npm install -D tailwindcss@3.4.1 postcss autoprefixer
npx tailwindcss init -p
```

### tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a",
        foreground: "#f8fafc",
      },
    },
  },
  plugins: [],
}
```

### postcss.config.js
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### globals.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background-color: #0f172a;
  color: #f8fafc;
}
```

### PENTING:
- Gunakan **Tailwind v3** (bukan v4) untuk kompatibilitas Next.js
- Hapus `.next` folder setelah perubahan config
- Pastikan `content` paths mencakup semua file yang pakai Tailwind classes

---

## 📌 BUTTON STYLING

### Primary Button (Full Width)
```tsx
className="w-full px-8 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
```

### Primary Button (Large - untuk CTA utama)
```tsx
className="px-10 py-4 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center gap-3"
```
**Contoh penggunaan:** Tombol "Buka Undangan", "Kirim Hadiah"

### Primary Button (Regular)
```tsx
className="px-8 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-all duration-300 hover:scale-105 shadow-lg"
```
**Contoh penggunaan:** Tombol "Kembali ke Atas"

### Secondary Button (Ghost/Outline)
```tsx
className="flex-1 px-6 py-3 bg-white/10 text-slate-200 text-center rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
```
**Contoh penggunaan:** Tombol "Salin Alamat"

### Icon Button (Circle)
```tsx
className="w-12 h-12 rounded-full border-2 border-rose-400 flex items-center justify-center mx-auto hover:bg-rose-500 hover:border-rose-500 transition-all duration-300 group animate-bounce"
```
**Contoh penggunaan:** Tombol scroll down dengan chevron

### Modal Close Button
```tsx
className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
```

### Toggle Button (Hadir/Tidak Hadir)
```tsx
// Active state
className="flex-1 px-4 py-3 rounded-2xl border transition-all flex items-center justify-center gap-2 bg-green-500/20 border-green-400 text-green-400"

// Inactive state
className="flex-1 px-4 py-3 rounded-2xl border transition-all flex items-center justify-center gap-2 bg-white/10 border-white/20 text-slate-300 hover:bg-white/20"
```

---

## 📌 ICON USAGE

**WAJIB** menggunakan `lucide-react` untuk semua icon.

```tsx
import { Mail, Gift, Send, Heart, ChevronDown, Navigation, Copy, Check, X } from 'lucide-react'

// Ukuran icon
<Icon size={24} />  // Large button
<Icon size={20} />  // Regular button
<Icon size={16} />  // Small/badge
```

**JANGAN** pakai custom SVG inline!

---

## 📌 SECTION CONTAINER

### Standard Section
```tsx
<div className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24 pb-32">
  <div className="max-w-4xl mx-auto w-full">
    {/* Content */}
  </div>
</div>
```

### Wide Section (Gallery)
```tsx
<div className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24 pb-32">
  <div className="max-w-6xl mx-auto w-full">
    {/* Content */}
  </div>
</div>
```

### Full Width Section (Family)
```tsx
<div className="min-h-screen flex items-center justify-center px-6 py-24 pb-32">
  <div className="max-w-7xl mx-auto w-full space-y-16 md:space-y-24">
    {/* Content */}
  </div>
</div>
```

---

## 📌 CARD STYLING

### Glass Card
```tsx
className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 md:p-10"
```

### Glass Card dengan overflow hidden (untuk map/image)
```tsx
className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20"
```

---

## 📌 SECTION TITLE

```tsx
<div className="text-center mb-16">
  <p className="tracking-widest text-slate-400 text-sm mb-4 uppercase">
    Subtitle Text
  </p>
  <h2 
    className="text-4xl md:text-5xl text-white mb-4"
    style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
  >
    Section Title
  </h2>
  <p className="text-slate-300 max-w-lg mx-auto">
    Description text here
  </p>
</div>
```

---

## 📌 INPUT STYLING

### Text Input
```tsx
className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent text-white placeholder:text-slate-400"
```

### Textarea
```tsx
className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent resize-none text-white placeholder:text-slate-400"
```

---

## 📌 COLOR PALETTE

### Background
- Main: `#0f172a` (slate-900)
- Card: `bg-white/10`
- Overlay: `bg-black/60`

### Text
- Primary: `text-white`
- Secondary: `text-slate-300`
- Muted: `text-slate-400`
- Accent: `text-rose-400`

### Button
- Primary: `bg-rose-500` → `hover:bg-rose-600`
- Secondary: `bg-white/10` → `hover:bg-white/20`

### Border
- Card: `border-white/20`
- Input focus: `ring-rose-400`

---

## 📌 TYPOGRAPHY

### Heading (Serif)
```tsx
style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
```

### Sizes
- Hero: `text-5xl md:text-6xl lg:text-7xl`
- Section Title: `text-4xl md:text-5xl`
- Card Title: `text-3xl` atau `text-2xl`
- Body: `text-lg`
- Small: `text-sm`
- Extra Small: `text-xs`

### Letter Spacing
- Wide: `tracking-widest` (untuk subtitle)
- Extra Wide: `tracking-[0.3em]` (untuk "THE WEDDING OF")

---

## 📌 SPACING REFERENCE

### Padding
- Section: `px-6 md:px-12 py-24 pb-32`
- Card: `p-8 md:p-10` atau `p-8 md:p-16`
- Button Large: `px-10 py-4`
- Button Regular: `px-8 py-3`
- Button Small: `px-6 py-3`
- Input: `px-4 py-3`

### Margin
- Section title bottom: `mb-16`
- Paragraph bottom: `mb-8`
- Card element gap: `mb-6`
- Small gap: `mb-4`

### Gap (flex/grid)
- Large: `gap-8`
- Medium: `gap-6`
- Regular: `gap-4`
- Small: `gap-3`
- Extra Small: `gap-2`

---

## 📌 BORDER RADIUS

- Full Round: `rounded-full` (buttons)
- Large: `rounded-3xl` (cards)
- Medium: `rounded-2xl` (inputs, small cards)
- Arch Frame: `rounded-t-full rounded-b-3xl`

---

## 📌 ANIMATION & TRANSITION

### Standard Transition
```tsx
className="transition-all duration-300"
```

### Hover Scale
```tsx
className="hover:scale-105"
```

### Bounce Animation
```tsx
className="animate-bounce"
```

---

## 📌 CHECKLIST SEBELUM COMMIT

- [ ] Semua button menggunakan lucide-react icons
- [ ] Button Large: `px-10 py-4` + `inline-flex items-center gap-3`
- [ ] Button Regular: `px-8 py-3`
- [ ] Card: `bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20`
- [ ] Section container: `min-h-screen flex items-center justify-center px-6 md:px-12 py-24 pb-32`
- [ ] Semua text heading pakai Playfair Display
- [ ] Warna background konsisten `#0f172a`
- [ ] Input/Textarea: `rounded-2xl` dengan `focus:ring-rose-400`

---

## 📌 COMMON MISTAKES TO AVOID

❌ **JANGAN:**
- Pakai custom SVG inline untuk icons
- Tambahkan `text-lg` pada button (ukuran sudah dari padding)
- Tambahkan `justify-center` pada button dengan icon (kecuali full-width)
- Pakai `bg-slate-900` (pakai inline style `backgroundColor: '#0f172a'`)
- Mix antara rounded-2xl dan rounded-3xl dalam satu card

✅ **HARUS:**
- Import semua icons dari lucide-react
- Konsisten dengan spacing (px-10 py-4 untuk large, px-8 py-3 untuk regular)
- Gunakan `inline-flex items-center gap-3` untuk button dengan icon
- Test responsive di mobile dan desktop
