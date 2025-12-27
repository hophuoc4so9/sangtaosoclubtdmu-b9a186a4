# 🎯 SANG TẠO WEBSITE - DYNAMIC VERSION WITH GOOGLE SHEETS

> Website tĩnh đã được chuyển đổi thành website **động** sử dụng Google Sheets làm data source!

## 📖 Tài Liệu Hướng Dẫn

Dự án này bao gồm 4 file hướng dẫn chi tiết:

| File | Mô tả | Thời gian |
|------|-------|----------|
| **[QUICK_START.md](QUICK_START.md)** | Hướng dẫn bắt đầu nhanh (3 bước) | 15 phút |
| **[GUIDE_GOOGLE_SHEETS.md](GUIDE_GOOGLE_SHEETS.md)** | Hướng dẫn chi tiết đầy đủ | 30 phút |
| **[GOOGLE_SHEETS_TEMPLATE.md](GOOGLE_SHEETS_TEMPLATE.md)** | Template dữ liệu sẵn sàng | 5 phút |
| **[HOW_TO_GET_IMAGES.md](HOW_TO_GET_IMAGES.md)** | Cách lấy link ảnh từ Google Drive | 10 phút |

**👉 KHUYÊN DÙNG: Bắt đầu với [QUICK_START.md](QUICK_START.md)**

---

## ✨ Features

✅ **Dynamic Content** - Quản lý nội dung qua Google Sheets  
✅ **Real-time Updates** - Thay đổi dữ liệu, website tự cập nhật  
✅ **Easy Management** - Không cần code để update nội dung  
✅ **Responsive Design** - Mobile-friendly  
✅ **Fast & Secure** - Dùng official Google Sheets API  

---

## 🚀 Quick Start (15 phút)

### 1️⃣ Tạo Google Sheet
- Vào https://sheets.google.com
- Tạo 4 sheet: **Heroes**, **Achievements**, **Events**, **Board**
- Thêm dữ liệu (copy từ [GOOGLE_SHEETS_TEMPLATE.md](GOOGLE_SHEETS_TEMPLATE.md))

### 2️⃣ Lấy Credentials
- **Sheet ID**: Copy từ URL của sheet
- **API Key**: Tạo từ https://console.cloud.google.com

### 3️⃣ Cấu Hình Project
```bash
# Tạo file .env.local
cp .env.local.example .env.local

# Chỉnh sửa .env.local:
VITE_GOOGLE_SHEET_ID=YOUR_SHEET_ID
VITE_GOOGLE_API_KEY=YOUR_API_KEY
```

### 4️⃣ Chạy Project
```bash
bun install
bun run dev
```

**✅ Done! Website của bạn sẽ load dữ liệu từ Google Sheets**

---

## 📊 Cấu Trúc Dữ Liệu

### Heroes (Banner chính)
```javascript
{
  id: "1",
  title: "Sang Tạo",
  subtitle: "Câu Lạc Bộ Sáng Tạo TDMU",
  backgroundimage: "https://example.com/hero.jpg",
  buttontext: "Khám Phá"
}
```

### Achievements (Thành tích)
```javascript
{
  id: "1",
  title: "Giải Nhất ICPC",
  description: "Đạt giải Nhất khu vực...",
  icon: "🏆",
  category: "trophy"
}
```

### Events (Sự kiện)
```javascript
{
  id: "1",
  title: "Workshop AI/ML",
  date: "15/01/2025",
  location: "Room 101",
  image: "https://example.com/event.jpg",
  description: "Tìm hiểu Machine Learning..."
}
```

### Board (Ban lãnh đạo)
```javascript
{
  id: "1",
  name: "Nguyễn Văn A",
  position: "Chủ Tịch",
  image: "https://example.com/avatar.jpg",
  bio: "Sinh viên K20..."
}
```

---

## 🔧 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **UI Framework**: ShadcN UI + Tailwind CSS
- **Data Source**: Google Sheets API v4
- **HTTP Client**: Fetch API
- **State Management**: React Hooks

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx        ✅ Dynamic
│   │   ├── AchievementsSection.tsx ✅ Dynamic
│   │   ├── EventsSection.tsx       ✅ Dynamic
│   │   └── BoardSection.tsx        ✅ Dynamic
│   └── ui/
│       └── (shadcn components)
├── lib/
│   ├── googleSheets.ts            ⭐ Main API logic
│   └── utils.ts
├── pages/
│   ├── Index.tsx
│   └── NotFound.tsx
└── App.tsx
```

---

## 🔑 Environment Variables

File: `.env.local`

```env
VITE_GOOGLE_SHEET_ID=your_sheet_id_here
VITE_GOOGLE_API_KEY=your_api_key_here
```

**⚠️ Security:**
- Thêm `.env.local` vào `.gitignore` (đã done)
- Không commit credentials lên Git
- Hạn chế API Key để chỉ dùng Google Sheets API

---

## 📝 Components

### HeroSection
- Load dữ liệu từ **Heroes** sheet
- Hiển thị banner chính với background image
- Loading state animation

### AchievementsSection
- Load dữ liệu từ **Achievements** sheet
- Hiển thị timeline với icons
- Dynamic icon mapping (trophy, award, medal, star)

### EventsSection
- Load dữ liệu từ **Events** sheet
- Grid layout 2 columns
- Event cards với ảnh, ngày, địa điểm
- Loading skeleton

### BoardSection
- Load dữ liệu từ **Board** sheet
- Grid layout 3 columns (responsive)
- Avatar images
- Member info cards

---

## 🔄 Data Flow

```
Google Sheets
     ↓
Google Sheets API
     ↓
googleSheets.ts (fetch functions)
     ↓
Components (React hooks)
     ↓
UI Rendering
```

---

## ⚡ Performance

- **Caching**: Implement 5-min cache để giảm API calls
- **Lazy Loading**: Images lazy load
- **Skeleton Loading**: Loading placeholders
- **Error Handling**: Graceful fallbacks

---

## 🚀 Deployment

### Vercel / Netlify

1. Push code lên GitHub
2. Connect repo
3. Add environment variables:
   - `VITE_GOOGLE_SHEET_ID`
   - `VITE_GOOGLE_API_KEY`
4. Deploy!

### Self-hosted

```bash
bun run build
bun run preview
```

---

## 🐛 Troubleshooting

| Vấn đề | Giải Pháp |
|--------|----------|
| Dữ liệu không load | Kiểm tra `.env.local` & Sheet ID |
| 401 Unauthorized | Kiểm tra API Key & permissions |
| CORS Error | API Key cần cho phép từ domain |
| Ảnh không hiển thị | Kiểm tra URL ảnh public |

**Chi tiết**: Xem [QUICK_START.md](QUICK_START.md#-troubleshooting)

---

## 📚 API Reference

### Các hàm sẵn sàng

```typescript
// Lấy dữ liệu
getHeroes(): Promise<HeroData[]>
getAchievements(): Promise<Achievement[]>
getEvents(): Promise<Event[]>
getBoardMembers(): Promise<BoardMember[]>
```

**File**: `src/lib/googleSheets.ts`

---

## 🔐 Security Best Practices

✅ API Key trong environment variables  
✅ `.env.local` trong `.gitignore`  
✅ API Key hạn chế cho Google Sheets API  
✅ Read-only access (không ghi dữ liệu)  
✅ Error handling & validation  

---

## 📊 Monitoring

### Cách check dữ liệu load đúng

1. Mở DevTools (F12)
2. Vào tab **Network**
3. Filter: `sheets.googleapis.com`
4. Check response có data không

### Server-side Logging

```typescript
console.log("Loading from Sheet:", GOOGLE_SHEETS_CONFIG.SHEET_ID);
console.log("Data fetched:", achievements.length, "items");
```

---

## 🎨 Customization

### Thêm sheet mới

1. Tạo tab mới trong Google Sheet
2. Thêm hàm trong `src/lib/googleSheets.ts`:
```typescript
export async function getNewData(): Promise<NewType[]> {
  const data = await getSheetData("NewSheetName");
  return data as NewType[];
}
```
3. Dùng trong component:
```typescript
const [data, setData] = useState<NewType[]>([]);

useEffect(() => {
  getNewData().then(setData);
}, []);
```

---

## 💡 Tips & Tricks

- **Emoji**: Copy emoji trực tiếp vào Google Sheets (🏆⭐🥈)
- **Formatting**: Google Sheets không hỗ trợ rich text, dùng emoji/plain text
- **Images**: Dùng Google Drive hoặc Imgbb (xem [HOW_TO_GET_IMAGES.md](HOW_TO_GET_IMAGES.md))
- **Cache Busting**: Thêm `?t=` + timestamp để force refresh

---

## 📞 Support

- **Bug Report**: Create issue
- **Questions**: Check documentation files
- **Enhancement**: Submit PR

---

## 📄 License

MIT License - Sử dụng tự do

---

## ✨ Credits

- **Framework**: React + Vite
- **UI**: ShadcN UI + Radix UI
- **API**: Google Sheets API v4
- **Icons**: Lucide React

---

## 🎯 Next Steps

1. ✅ Xem [QUICK_START.md](QUICK_START.md)
2. ✅ Tạo Google Sheet
3. ✅ Lấy API Key
4. ✅ Configure `.env.local`
5. ✅ Chạy `bun run dev`
6. ✅ Test website
7. ✅ Deploy!

---

**Happy Building! 🚀**

*Last updated: December 2024*
