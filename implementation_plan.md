# Kế hoạch thực hiện: Chuyển đổi giao diện HDBank sang HTML + CSS

Kế hoạch chi tiết để chuyển đổi hình ảnh giao diện quản trị đặc quyền của HDBank sang mã nguồn HTML5 và CSS3 hiện đại, đảm bảo tính thẩm mỹ cao, responsive và sử dụng HTML semantic.

## Thông tin Dự án
- **Công nghệ cốt lõi**: HTML5 (Semantic), CSS3 (Vanilla với CSS Variables), Google Fonts (Be Vietnam Pro), và inline SVG Icons.
- **Thư mục dự án**: `C:\Users\TuanKiet\.gemini\antigravity\scratch\hdbank-privilege-ui`
- **Tập tin chính**:
  - `index.html`: Cấu trúc trang web tĩnh sử dụng các thẻ semantic.
  - `style.css`: Hệ thống thiết kế (Design System), bố cục Grid/Flexbox và các hiệu ứng tương tác (Hover, Focus, Active).

## Thiết kế & Giao diện (Design System)
Để đạt được thiết kế "Premium" và "Wow" như yêu cầu của hệ thống, chúng ta sẽ áp dụng các thông số sau:
- **Font chữ**: `Be Vietnam Pro` (Google Fonts) hỗ trợ tiếng Việt hoàn hảo.
- **Bảng màu**:
  - `Primary Yellow` (Màu chủ đạo HDBank): `#F7B52C` (gradient đến `#F59E0B`).
  - `Primary Red` (Màu phụ HDBank): `#E11D48`.
  - `Neutral Dark`: `#1E293B` (cho text chính), `#64748B` (cho text phụ).
  - `Neutral Light`: `#F8FAFC` (nền trang), `#FFFFFF` (nền card & sidebar).
  - `Border color`: `#E2E8F0`.
  - `Success (Đăng ký thành công/Trong hạn)`: Nền `#DEF7EC`, chữ `#03543F`.
  - `Danger (Hủy thành công/Hết hạn)`: Nền `#FDE8E8`, chữ `#9B1C1C`.
- **Hiệu ứng**:
  - Sử dụng shadow mềm mại (`box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)`).
  - Các trạng thái hover mượt mà (`transition: all 0.2s ease-in-out`).

## Cấu trúc Trang (HTML Semantic)
Trang sẽ được chia làm các khu vực chính:
1. `<div class="app-container">`: Chứa toàn bộ ứng dụng sử dụng CSS Grid (sidebar + main area).
2. `<aside class="sidebar">`: Thanh điều hướng bên trái chứa logo phụ, danh sách menu (`<nav>`) với các icon placeholder dạng SVG chất lượng cao.
3. `<div class="main-content">`: Khu vực bên phải chứa Header và các Card nội dung chính.
   - `<header class="header">`: Chứa logo HDBank chính, thanh tìm kiếm nhanh, thông tin người dùng ("Khoa", avatar, icon thông báo).
   - `<main class="content-body">`:
     - **Card 1 (Tabs & Action)**: Tab đặc quyền (GOLF, Phòng chờ), tiêu đề tải file đính kèm, các nút "ĐĂNG KÝ" và "TẢI LÊN DANH SÁCH".
     - **Card 2 (Danh sách yêu cầu)**: Form bộ lọc tìm kiếm và bảng dữ liệu (`<table>`) có phân trang (`pagination`).
     - **Card 3 (Lịch sử sử dụng)**: Bảng lịch sử đặc quyền (`<table>`).
     - **Sticky Action Bar**: Nút "CHUYỂN DUYỆT" nằm ở chân trang bên phải (hoặc sticky ở góc phải dưới).

## Kế hoạch kiểm thử (Verification Plan)
- Đảm bảo hiển thị chuẩn xác trên trình duyệt Chrome/Edge/Firefox.
- Đảm bảo tính responsive cơ bản (thu nhỏ sidebar trên màn hình nhỏ hoặc scroll ngang các bảng dữ liệu để tránh vỡ giao diện).
- Kiểm tra độ tương phản màu sắc và các hiệu ứng hover của button/input.
