Supply Chain - Frontend
📋 Giới thiệu
Supply Chain là một ứng dụng web quản lý chuỗi cung ứng được xây dựng trên nền tảng Stellar. Ứng dụng cho phép người dùng tạo và quản lý sản phẩm trong chuỗi cung ứng thông qua giao diện trực quan.

✨ Tính năng chính
🔗 Quản lý Hợp đồng Thông minh: Kết nối và tương tác với hợp đồng thông minh trên Stellar

📦 Tạo Sản phẩm: Đăng ký sản phẩm mới vào hệ thống chuỗi cung ứng

🔍 Tra cứu Thông tin: Xem thông tin chi tiết của sản phẩm

🔄 Cập nhật Trạng thái: Theo dõi và cập nhật trạng thái sản phẩm trong suốt vòng đời

💻 Giao diện Terminal: Hiển thị kết quả thực thi dưới dạng terminal trực quan

🛠 Công nghệ sử dụng
Frontend: HTML5, CSS3, JavaScript (ES6+)

Icons: Font Awesome 6.4.0

Styling: CSS Variables, Flexbox, Grid Layout

Blockchain: Stellar Smart Contracts

📁 Cấu trúc Project
text
supply-chain-dapp/
│
├── index.html          # File HTML chính
├── style.css           # Stylesheet chính
├── app.js              # JavaScript logic
└── README.md           # Tài liệu hướng dẫn
🚀 Cài đặt và Chạy ứng dụng
Cách 1: Mở trực tiếp
bash
# Mở file index.html trực tiếp trong trình duyệt
open index.html
Cách 2: Sử dụng Live Server (Khuyến nghị)
bash
# Cài đặt live-server globally
npm install -g live-server

# Chạy ứng dụng
live-server
Cách 3: Sử dụng Python HTTP Server
bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
Truy cập: http://localhost:8000

🎮 Hướng dẫn sử dụng
1. Thiết lập ban đầu
Ứng dụng đã được cấu hình sẵn với Contract ID mẫu

Không cần kết nối ví, có thể sử dụng ngay ở chế độ local

2. Tạo sản phẩm mới
Nhập Mã sản phẩm (Product ID)

Nhập Tên sản phẩm (Product Name)

Nhấn nút "Tạo Sản phẩm"

Kết quả sẽ hiển thị trong terminal

3. Xem thông tin sản phẩm
Nhập Mã sản phẩm cần tra cứu

Nhấn nút "Lấy Thông tin"

Thông tin chi tiết sẽ hiển thị trong terminal

4. Cập nhật trạng thái sản phẩm
Nhập Mã sản phẩm

Chọn Trạng thái mới từ dropdown

Nhấn nút "Cập nhật Trạng thái"

Kết quả cập nhật sẽ hiển thị trong terminal

🎨 Giao diện
Màu sắc chủ đạo
Primary: #2c3e50 (Xanh đậm)

Secondary: #3498db (Xanh dương)

Accent: #1abc9c (Xanh ngọc)

Success: #2ecc71 (Xanh lá)

Warning: #f39c12 (Cam)

Danger: #e74c3c (Đỏ)

Terminal Theme
Nền: #1e1e1e (Đen)

Text: #00ff00 (Xanh lá sáng)

Kết quả: #00ffff (Xanh cyan)

🔧 Tùy chỉnh
Thay đổi Contract ID
Mở file app.js và tìm dòng:

javascript
const contractId = 'CDIUC5W5773TEXZMU2QIGIUHMIYY6QB4UKGKIWPSOFVEEMIRFZID2NDT';
Thay bằng Contract ID của bạn.

Thay đổi địa chỉ ví mặc định
Tìm và sửa dòng trong app.js:

javascript
const manufacturerAddress = 'GCEN2T267FH7GLL5VF4ELDY4LE7GWWQJDCN6RUPX2RLEASBJFQPN34C6'