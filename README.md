# Help Desk Support Ticket System 🎫

A full-stack web application for managing support tickets, built with the MERN Stack (MongoDB, Express, React, Node.js).

## 🚀 Tech Stack

- **Frontend:** React (Vite), TailwindCSS, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** JWT (JSON Web Tokens)

## ✨ Features (Planned)

- **User:** Register, Login, Create Ticket, View My Tickets
- **Admin:** View All Tickets, Update Ticket Status, User Management
- **System:** Role-based access control, Real-time updates

## 🛠️ Installation & Setup

### 1. Clone the repository
\`\`\`bash
git clone git@github.com:TWFILM/Help-Desk-App.git
cd help-desk-app
\`\`\`

### 2. Install Dependencies
Install dependencies for both client and server:

\`\`\`bash
# Server
cd server
npm install

# Client
cd ../client
npm install
\`\`\`

### 3. Environment Variables
Create a `.env` file in the `server` folder and add:
\`\`\`
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_secret_key>
\`\`\`

### 4. Run the App
Open two terminals:

\`\`\`bash
# Terminal 1 (Server)
cd server
npm run dev

# Terminal 2 (Client)
cd client
npm run dev
\`\`\`

## 📝 License
This project is open source and available under the [MIT License](LICENSE).
