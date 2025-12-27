# 🎬 BẮT ĐẦU NGAY - STEP BY STEP

## 📌 Bạn ở đây

Dự án đã sẵn sàng! Chỉ cần làm 5 bước nhỏ để hoàn thành setup.

---

## 🔴 STEP 1: Mở Google Sheets (3 phút)

### 1.1 Truy cập Google Sheets
```
Vào: https://sheets.google.com
Click: Tạo spreadsheet mới
Đặt tên: "sangtao-website-content" (hoặc tên khác tùy bạn)
```

### 1.2 Tạo 4 sheet tabs
Right-click → **Insert sheet**

Tạo sheet với tên chính xác:
1. `Heroes` (banner)
2. `Achievements` (thành tích)
3. `Events` (sự kiện)
4. `Board` (ban lãnh đạo)

### 1.3 Thêm dữ liệu (Copy-paste dễ dàng!)

**Vào file**: [GOOGLE_SHEETS_TEMPLATE.md](GOOGLE_SHEETS_TEMPLATE.md)

Copy dữ liệu mẫu → Paste vào các sheet

---

## 🟠 STEP 2: Copy Sheet ID (1 phút)

Nhìn vào URL của sheet:
```
https://docs.google.com/spreadsheets/d/1A2B3C4D5E6F7G/edit
                                        ^^^^^^^^^^^^^^^
                                        SHEET ID (copy cái này)
```

**Lưu lại Sheet ID này! ⭐**

---

## 🟡 STEP 3: Tạo API Key (3 phút)

### 3.1 Mở Google Cloud Console
Vào: https://console.cloud.google.com

### 3.2 Tạo project
- Click **Select a Project** (góc trên cùng)
- Click **NEW PROJECT**
- Đặt tên: "sangtao-website"
- Click **CREATE**

### 3.3 Bật Google Sheets API
```
1. Tìm kiếm: "Google Sheets API"
2. Click vào kết quả đầu tiên
3. Click nút "ENABLE"
4. Chờ loading...
```

### 3.4 Tạo API Key
```
1. Click "Credentials" (menu trái)
2. Click "Create Credentials"
3. Chọn "API Key"
4. Copy API Key (có dạng: AIzaSy...)
```

### 3.5 Hạn chế API Key (Bảo mật)
```
1. Click vào API Key bạn vừa tạo
2. Kéo xuống "Key restrictions"
3. Chọn "Google Sheets API"
4. Click "SAVE"
```

**Lưu lại API Key này! ⭐**

---

## 🟢 STEP 4: Tạo file .env.local (2 phút)

### 4.1 Mở project folder
```
E:\git\sangtaosoclubtdmu-b9a186a4\
```

### 4.2 Tạo file `.env.local`

**Cách 1: Dùng VSCode**
- Right-click folder → New File
- Tên: `.env.local`
- Thêm nội dung dưới đây

**Cách 2: Dùng terminal**
```powershell
cd E:\git\sangtaosoclubtdmu-b9a186a4
echo "VITE_GOOGLE_SHEET_ID=YOUR_SHEET_ID" > .env.local
echo "VITE_GOOGLE_API_KEY=YOUR_API_KEY" >> .env.local
```

### 4.3 Thêm giá trị
Mở `.env.local` và thay thế:

```
VITE_GOOGLE_SHEET_ID=1A2B3C4D5E6F7G
VITE_GOOGLE_API_KEY=AIzaSyA1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q
```

---

## 🔵 STEP 5: Chạy Website! (1 phút)

### 5.1 Mở terminal/PowerShell
```powershell
cd E:\git\sangtaosoclubtdmu-b9a186a4
```

### 5.2 Cài dependencies (lần đầu)
```powershell
bun install
```

### 5.3 Chạy dev server
```powershell
bun run dev
```

### 5.4 Mở website
- Terminal sẽ show URL (thường là `http://localhost:5173`)
- Click link hoặc copy vào browser
- **Bam! Website load dữ liệu từ Google Sheets!** 🎉

---

## ✅ Verify Nó Hoạt Động

1. Mở website
2. Cuộn xuống → Xem dữ liệu từ Google Sheets:
   - Banner (Heroes) ✓
   - Thành tích (Achievements) ✓
   - Sự kiện (Events) ✓
   - Ban lãnh đạo (Board) ✓

3. Mở DevTools (F12) → Tab **Network**
   - Filter: `sheets.googleapis.com`
   - Xem request & response
   - Nếu có data → Success! ✓

---

## 🎨 Update Nội Dung

**Bây giờ website hoàn toàn động!**

Để update:
1. Mở Google Sheet
2. Chỉnh sửa dữ liệu
3. **Refresh website** (F5 hoặc Ctrl+R)
4. Dữ liệu tự cập nhật ✨

---

## 🚀 Deploy (Khi ready)

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy thư mục "dist" lên Netlify
```

**Nhớ add environment variables trên platform!**

---

## ❓ Gặp Vấn Đề?

### Dữ liệu không load?
- Kiểm tra `.env.local` đúng không
- Kiểm tra Sheet ID chính xác
- Kiểm tra API Key có hạn chế đúng

### Lỗi CORS?
- API Key cần cho phép từ domain của bạn
- Hoặc để trống để cho phép all domains (development)

### Ảnh không hiển thị?
- Kiểm tra URL ảnh public (có thể truy cập)
- Xem [HOW_TO_GET_IMAGES.md](HOW_TO_GET_IMAGES.md)

### Lỗi khác?
- Xem [QUICK_START.md](QUICK_START.md#-troubleshooting)
- Xem [GUIDE_GOOGLE_SHEETS.md](GUIDE_GOOGLE_SHEETS.md)

---

## 📝 Checklist

- [ ] Tạo Google Sheet (4 sheets)
- [ ] Copy Sheet ID
- [ ] Tạo API Key
- [ ] Tạo file `.env.local`
- [ ] `bun install`
- [ ] `bun run dev`
- [ ] Website load successfully
- [ ] Thấy dữ liệu từ Google Sheets
- [ ] Test DevTools Network tab

---

## 🎉 DONE!

Website của bạn sẵn sàng hoạt động!

### Next:
1. Customize dữ liệu theo ý bạn
2. Thêm/sửa ảnh
3. Deploy khi ready


---

**Thời gian estimate: 15 phút total**

**Happy building! 🚀**
