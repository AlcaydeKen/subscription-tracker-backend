# 📅 Subscription Tracker Backend

Subscription Tracker Backend is a **Node.js/Express API** for managing subscriptions and sending automated email reminders. It integrates **MongoDB, Upstash, Nodemailer, and Arcjet** to provide a secure, scalable backend system with workflow management, rate limiting, bot detection and proper authentication/authorization.

## 🎯 Purpose

This project was developed to provide a backend API for tracking user subscriptions, managing subscription data, sending automated reminders, and handling workflows efficiently. It demonstrates backend best practices, secure API design, database management, and automated workflows with rate limiting and bot detection.

## 🧠 What I Learned
- Designing RESTful APIs with Express
- Connecting and managing MongoDB databases
- Implementing automated email reminders using Nodemailer
- Managing workflows and queues with Upstash
- Securing APIs with rate limiting and bot detection using Arcjet
- Implementing authentication and role-based authorization
- Structuring a backend project for scalability and maintainability
- Error handling and validation in Node.js

## ✨ Features
- 🗄️ CRUD operations for subscriptions
- 📆 Track subscription start and expiry dates
- ✉️ Automated email reminders for upcoming expirations
- ⚡ Workflow management using Upstash
- 🛡️ Rate limiting and bot detection using Arcjet to prevent API abuse
- 🔐 Authentication (login/signup) and role-based authorization
- ✅ Proper access control for admin vs regular users

## 🛠️ Tech Stack
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Email Service:** Nodemailer
- **Workflow / Jobs:** Upstash
- **Rate Limiting / Security:** Arcjet
- **Authentication / Authorization:** JWT, middleware
- **Environment Management:** dotenv
  
## 📂 Project Structure

```bash
subscription-tracker-backend/
├── config/             # Config files (database, env)
├── controllers/        # API request handlers
├── database/           # MongoDB connection
├── middlewares/        # Auth, validation, Arcjet rate limiting
├── models/             # Mongoose models
├── routes/             # API routes
├── utils/              # Utility functions (email, workflow)
├── app.js              # Main application entry
├── package.json
├── package-lock.json
└── .gitignore
```

## 🚀 Installation Guide
### 1️⃣ Clone the repository
```bash
git clone https://github.com/AlcaydeKen/subscription-tracker-backend.git
cd subscription-tracker-backend
```
### 2️⃣ Install dependencies
```bash
npm install
```
### 3️⃣ Configure environment variables

Create a ```.env.production.local``` or ```.env.development.local``` file:

```bash
PORT=<your port>
SERVER_URL=<your server url>

#Environment
NODE_ENV=<development or production>

#Database
DB_URI=<your_mongodb_connection_string>

#JWT
JWT_SECRET=<your secret key>
JWT_EXPIRES_IN=<your token duration>

#Arcjet
ARCJET_KEY=<your >
ARCJET_ENV=<development or production>

#Upstash
QSTASH_URL=<your upstash url>
QSTASH_TOKEN=<your upstash token>

#NodeMailer
ACCOUNT_EMAIL=<your email account address>
EMAIL_PASSWORD=<your app password>
```

### 4️⃣ Run the backend
```bash
npm run dev
```

## 🖥️ API Endpoints

### 🔐 Authentication
- 📝 ```POST /api/auth/register``` – Register a new user
- 🔑 ```POST /api/auth/login``` – Login and receive JWT
- 🚪 ```POST /api/auth/logout``` – Logout and invalidate token

### 👤 Users
- 📋 ```GET /api/users``` – Get all users (admin only)
- 🧾 ```GET /api/users/:id``` – Get a specific user (admin or self)
- ✏️ ```PUT /api/users/:id``` – Update a user (admin or self)
- 🗑️ ```DELETE /api/users/:id``` – Delete a user (admin only)

### 📅 Subscriptions
- ➕ ```POST /api/subscriptions``` – Create a subscription (authenticated & authorized)
- 📄 ```GET /api/subscriptions``` – Get all subscriptions (authenticated)
- 🔍 ```GET /api/subscriptions/:id``` – Get subscription by ID (authenticated)
- ✏️ ```PUT /api/subscriptions/:id``` – Update subscription (authenticated & authorized)
- 🗑️ ```DELETE /api/subscriptions/:id``` – Delete subscription (authenticated & authorized)

## 🔮 Future Improvements
- 🖼️ ReactJS UI/UX
- 📧 More customizable email templates
- 📊 Subscription analytics dashboard
- 🔔 SMS notifications
- 🛠️ Enhanced role-based access control with multiple admin levels

## 👨‍💻 Author

Ken Jared Alcayde

GitHub: [@AlcaydeKen](https://github.com/AlcaydeKen)
