# 🏭 Supply Chain Smart Contract (Soroban)
Thành viên: 
    Đàm Quang Phong - Đh Phenikaa - 22010466
    Lý Thành Đạt - Đh Phenikaa - 23010879


## 📘 Giới thiệu
**SupplyChainContract** là một **smart contract** được phát triển bằng **Rust + Stellar**.  
Mục tiêu của hợp đồng là **quản lý chuỗi cung ứng (Supply Chain)** một cách minh bạch, cho phép truy xuất nguồn gốc sản phẩm từ khâu sản xuất đến khi đến tay người tiêu dùng.

---

## 🚀 Tính năng chính
| Chức năng | Mô tả |
|------------|-------|
| 🧱 `initialize` | Khởi tạo hợp đồng và ghi log xác nhận. |
| 🏗️ `create_product` | Tạo sản phẩm mới với ID, tên và nhà sản xuất. |
| 🔄 `transfer_ownership` | Chuyển quyền sở hữu sản phẩm giữa các bên. |
| 🧾 `update_status` | Cập nhật trạng thái sản phẩm (vd: `created`, `moved`, `delivered`). |
| 🔍 `get_product_info` | Truy xuất tên sản phẩm từ ID. |
| 📦 `get_product_owner` | Lấy địa chỉ chủ sở hữu hiện tại của sản phẩm. |
| ⚙️ `get_product_status` | Kiểm tra trạng thái hiện tại của sản phẩm. |
| 🚚 `add_shipment` | Ghi lại thông tin vận chuyển hàng hóa. |
| 📊 `product_exists` | Kiểm tra sản phẩm có tồn tại trong hệ thống không. |
| 🏷️ `version` | Trả về phiên bản của hợp đồng. |

---

## 🧠 Cấu trúc lưu trữ dữ liệu

Hợp đồng sử dụng **Soroban Instance Storage** để lưu trữ cặp khóa–giá trị.

| Key prefix | Dữ liệu | Mô tả |
|-------------|----------|------|
| `prod_` | `product_id → product_name` | Tên sản phẩm |
| `owner_` | `product_id → Address` | Chủ sở hữu hiện tại |
| `status_` | `product_id → Symbol` | Trạng thái sản phẩm |
| `ship_` | `product_id → Shipment info` | Thông tin vận chuyển |

---

## 🧰 Cài đặt môi trường
rustup update
rustup target add wasm32-unknown-unknown
cargo install --locked stellar-cli

# Trong supplychain-contract\contract thực thi 
stellar contract build

# Triển khai hợp đồng (Deploy)
stellar contract deploy `
  --wasm target/wasm32-unknown-unknown/release/supply_chain_contract.wasm `
  --source supplychain-key

Kết quả trả về CONTRACT_ID, ví dụ:  CDIUC5W5773TEXZMU2QIGIUHMIYY6QB4UKGKIWPSOFVEEMIRFZID2NDT

# Ví dụ thực thi (Thực tế chạy thành công)
1. Tạo sản phẩm mới
stellar contract invoke --id CDIUC5W5773TEXZMU2QIGIUHMIYY6QB4UKGKIWPSOFVEEMIRFZID2NDT `
  --source supplychain-key `
  -- create_product `
  --manufacturer GCEN2T267FH7GLL5VF4ELDY4LE7GWWQJDCN6RUPX2RLEASBJFQPN34C6 `
  --product_id 1 `
  --product_name "iPhone 15"

Kết quả:

"Product created"

2. Truy xuất thông tin sản phẩm
stellar contract invoke --id CDIUC5W5773TEXZMU2QIGIUHMIYY6QB4UKGKIWPSOFVEEMIRFZID2NDT `
  --source supplychain-key `
  -- get_product_info `
  --product_id 1

Kết quả:

"iPhone 15"

3. Cập nhật trạng thái sản phẩm
stellar contract invoke --id CDIUC5W5773TEXZMU2QIGIUHMIYY6QB4UKGKIWPSOFVEEMIRFZID2NDT `
  --source supplychain-key `
  -- update_status `
  --updater GCEN2T267FH7GLL5VF4ELDY4LE7GWWQJDCN6RUPX2RLEASBJFQPN34C6 `
  --product_id 1 `
  --new_status delivered
  
Kết quả:

"Status updated"
