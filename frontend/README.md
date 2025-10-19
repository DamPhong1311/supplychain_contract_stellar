🌐 Supply Chain – Frontend

Members:

Đàm Quang Phong – Phenikaa University – 22010466

Lý Thành Đạt – Phenikaa University – 23010879

📋 Introduction

Supply Chain is a web-based supply chain management application built on the Stellar blockchain platform.
It allows users to create, manage, and track products through a clean and interactive web interface that connects directly with the deployed smart contract on Stellar.

✨ Key Features
Feature	Description
🔗 Smart Contract Integration	Connects and interacts directly with the deployed Stellar smart contract.
📦 Product Creation	Register and store new products on the blockchain-based supply chain system.
🔍 Product Lookup	Retrieve and display detailed product information.
🔄 Status Update	Track and update product statuses throughout their lifecycle.
💻 Terminal UI	Displays transaction and query results in a simulated terminal interface.
🛠️ Technologies Used

Frontend: HTML5, CSS3, JavaScript (ES6+)

Icons: Font Awesome 6.4.0

Styling: CSS Variables, Flexbox, Grid Layout

Blockchain Integration: Stellar Smart Contracts

📁 Project Structure
supply-chain-dapp/
│
├── index.html          # Main HTML file
├── style.css           # Main stylesheet
├── app.js              # Core JavaScript logic
└── README.md           # Project documentation

🚀 Setup & Run Instructions
Option 1: Open directly

Simply open the file in your browser:

open index.html

Option 2: Using Live Server (Recommended)
# Install Live Server globally
npm install -g live-server

# Run the application
live-server

Option 3: Using Python HTTP Server
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000


Then visit: http://localhost:8000

🎮 How to Use
1️⃣ Initial Setup

The app is preconfigured with a sample Contract ID.

No wallet connection is required; it runs locally by default.

2️⃣ Create a New Product

Enter Product ID

Enter Product Name

Click "Create Product"

The execution result will appear in the terminal panel.

3️⃣ Retrieve Product Information

Enter the Product ID

Click "Get Product Info"

Product details will be displayed in the terminal.

4️⃣ Update Product Status

Enter the Product ID

Select a new status from the dropdown list

Click "Update Status"

The update confirmation appears in the terminal.

🎨 UI Design
🎨 Color Palette
Purpose	Color	Description
Primary	#2c3e50	Deep blue
Secondary	#3498db	Bright blue
Accent	#1abc9c	Aqua green
Success	#2ecc71	Green
Warning	#f39c12	Orange
Danger	#e74c3c	Red
🖥️ Terminal Theme
Element	Color
Background	#1e1e1e (Black)
Text	#00ff00 (Bright green)
Output Result	#00ffff (Cyan)
🔧 Configuration
Change Contract ID

Open app.js and locate:

const contractId = 'CDIUC5W5773TEXZMU2QIGIUHMIYY6QB4UKGKIWPSOFVEEMIRFZID2NDT';


Replace it with your deployed Contract ID.

Change Default Wallet Address

In app.js, update the following line:

const manufacturerAddress = 'GCEN2T267FH7GLL5VF4ELDY4LE7GWWQJDCN6RUPX2RLEASBJFQPN34C6';


Replace it with your own Stellar wallet address.