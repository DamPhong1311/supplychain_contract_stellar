🏭 Supply Chain Smart Contract (Soroban)

Members:

Đàm Quang Phong – Phenikaa University – 22010466

Lý Thành Đạt – Phenikaa University – 23010879

📘 Introduction

SupplyChainContract is a smart contract developed using Rust and Stellar Soroban.
Its goal is to enable transparent supply chain management, allowing traceability of products from manufacturing to delivery to the end consumer.

🚀 Main Features
Function	Description
🧱 initialize	Initializes the contract and logs confirmation.
🏗️ create_product	Creates a new product with an ID, name, and manufacturer.
🔄 transfer_ownership	Transfers product ownership between participants.
🧾 update_status	Updates the product’s status (e.g., created, moved, delivered).
🔍 get_product_info	Retrieves product information by its ID.
📦 get_product_owner	Gets the current owner’s address of the product.
⚙️ get_product_status	Checks the current status of the product.
🚚 add_shipment	Records shipment and logistics information.
📊 product_exists	Checks whether a product exists in the system.
🏷️ version	Returns the version of the contract.
🧠 Data Storage Structure

The contract uses Soroban Instance Storage to store key–value pairs as shown below:

Key Prefix	Data	Description
prod_	product_id → product_name	Product name
owner_	product_id → Address	Current owner
status_	product_id → Symbol	Product status
ship_	product_id → Shipment info	Shipment details
🧰 Environment Setup
# 1️⃣ Update and configure Rust
rustup update
rustup target add wasm32-unknown-unknown

# 2️⃣ Install Stellar CLI
cargo install --locked stellar-cli

⚙️ Build and Deploy the Contract

From the directory:

supplychain-contract\contract

🔨 Build
stellar contract build

🚀 Deploy
stellar contract deploy \
  --wasm target/wasm32-unknown-unknown/release/supply_chain_contract.wasm \
  --source supplychain-key


After deployment, you’ll receive a CONTRACT_ID, for example:

CDIUC5W5773TEXZMU2QIGIUHMIYY6QB4UKGKIWPSOFVEEMIRFZID2NDT

🧪 Example Execution (Successfully Tested)
1️⃣ Create a new product
stellar contract invoke --id CDIUC5W5773TEXZMU2QIGIUHMIYY6QB4UKGKIWPSOFVEEMIRFZID2NDT \
  --source supplychain-key \
  -- create_product \
  --manufacturer GCEN2T267FH7GLL5VF4ELDY4LE7GWWQJDCN6RUPX2RLEASBJFQPN34C6 \
  --product_id 1 \
  --product_name "iPhone 15"


Result:

"Product created"

2️⃣ Retrieve product information
stellar contract invoke --id CDIUC5W5773TEXZMU2QIGIUHMIYY6QB4UKGKIWPSOFVEEMIRFZID2NDT \
  --source supplychain-key \
  -- get_product_info \
  --product_id 1


Result:

"iPhone 15"

3️⃣ Update product status
stellar contract invoke --id CDIUC5W5773TEXZMU2QIGIUHMIYY6QB4UKGKIWPSOFVEEMIRFZID2NDT \
  --source supplychain-key \
  -- update_status \
  --updater GCEN2T267FH7GLL5VF4ELDY4LE7GWWQJDCN6RUPX2RLEASBJFQPN34C6 \
  --product_id 1 \
  --new_status delivered


Result:

"Status updated"
