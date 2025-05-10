Perfect! Here’s an updated version of the README that includes your deployment on Render — still keeping that tone where you're honest about learning from a tutorial but highlighting your hands-on effort and customizations:

---

# 🔐 MERN Advanced Auth – Multifactor Authentication System

Hey! 👋
This is an advanced authentication system I worked on while exploring secure user management and multi-factor authentication in MERN stack applications. The base structure came from a high-quality tutorial, but I took the time to understand and tweak each part — from API flow to protected routes and deployment — to fit real-world use cases.

📍 **Live Demo:** [View Deployed App on Render](https://mern-adv-auth-v2y0.onrender.com)

---

## 🚀 Features

* ✅ Signup with email verification
* 🔐 Secure JWT login/logout
* 🔁 Forgot & Reset password flow
* 📧 Transactional email templates (Mailtrap)
* 🔒 Route protection with auth checks
* 📤 Deployed full stack on Render (backend + frontend)

---

## ⚙️ Tech Stack

* **MongoDB** with Mongoose
* **Express.js** & **Node.js**
* **React (Vite)**
* **JWT + Bcrypt** for security
* **Mailtrap** for email testing
* **dotenv** for secrets
* **Render** for deployment

---

## 🧩 Folder Structure

```
root/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── utils/
├── frontend/
│   ├── pages/
│   ├── components/
│   └── services/
├── .env
└── package.json
```

---

## 🔧 .env Configuration

Make sure your root `.env` file contains:

```env
MONGO_URI=your_mongo_uri
PORT=5000
JWT_SECRET=your_jwt_secret
NODE_ENV=production

MAILTRAP_TOKEN=your_mailtrap_token
MAILTRAP_ENDPOINT=https://send.api.mailtrap.io/

CLIENT_URL=https://your-frontend-url.onrender.com
```

---

## 🧪 Run Locally

### 1. Install dependencies

```bash
npm install
npm install --prefix frontend
```

### 2. Build frontend

```bash
npm run build
```

### 3. Start server

```bash
npm run start
```

Visit: **[http://localhost:5000](http://localhost:5000)**

---

## 💡 Windows Users – Use cross-env

```bash
npm install cross-env
```

Update `scripts` in `package.json`:

```json
"scripts": {
  "dev": "cross-env NODE_ENV=development nodemon backend/index.js",
  "start": "cross-env NODE_ENV=production node backend/index.js",
  "build": "npm install && npm install --prefix frontend && npm run build --prefix frontend"
}
```

---

## 📤 Deployment on Render

* Backend and frontend both hosted on **Render**
* Built the frontend and served it using Express for a single deployable full-stack solution
* CORS and client URLs configured in `.env` for production mode

---

## 🎯 What I Learned

While this project was based on a tutorial, I took time to dive deep into:

* The logic behind authentication flows
* Middleware for protecting routes
* Integrating and templating emails with Mailtrap
* Managing environment variables across local and deployed environments
* Handling token expiration and session management
* Full-stack deployment with Render

---

## 📌 Why This Project?

I wanted to move beyond simple login systems and get a solid grasp of building secure, scalable authentication flows. It’s a strong foundation to later build in OAuth, 2FA, and role-based access control.

---
