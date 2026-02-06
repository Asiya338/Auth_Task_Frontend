# Auth Task Frontend (React)

This is a simple React frontend application built to interact with the **Auth & Task Management Backend**.  
It demonstrates user authentication using JWT and basic CRUD operations on tasks.

The UI is intentionally kept minimal and professional to focus on **functionality and backend integration**.

---

## 🧰 Tech Stack

- React (Create React App)
- Axios (API communication)
- Plain CSS (custom styling)
- JWT-based authentication

---

## 📌 Features

- User Registration
- User Login with JWT authentication
- Protected Dashboard
- Task Management (Create, View, Update, Delete)
- Role-based behavior (USER / ADMIN handled by backend)
- Automatic logout on unauthorized access
- Displays backend validation and error messages

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm
- Backend service running on `http://localhost:8080`

---

### 🔧 Setup & Run

1. Clone the repository (frontend folder):

```bash
git clone <frontend-repo-url>
cd auth-task-frontend
```

Install dependencies:
```
npm install
```

Start the application:
```
npm start
```

Open browser and access:
```
http://localhost:3000
```

---
🖥️ Application Flow (How to Use)


1️⃣ Login Page

Default landing page

Existing users can log in using email and password

Invalid credentials show error messages from backend

---
2️⃣ Register Page

New users can register with:

Name

Email

Phone Number

Password

On successful registration, user is redirected back to Login

---
3️⃣ Dashboard (Protected)

Accessible only after successful login

JWT token is stored in browser localStorage

Displays task list returned by backend

Role-based behavior:

USER → sees only own tasks

ADMIN → sees all users’ tasks

---
4️⃣ Task Operations

Create a new task (title, description, status)

Edit existing task

Delete task

UI updates automatically after each operation

---
5️⃣ Logout

Clears JWT token

Redirects back to Login page

🔐 Authentication & Security

JWT token is stored in localStorage

Token is automatically attached to API requests using Axios interceptors

On 401 Unauthorized, user is logged out automatically

All authorization rules are enforced by the backend


--------
All authorization rules are enforced by the backend

# Project Structure

```
src/
 ├── pages/
 │   ├── Login.js
 │   ├── Register.js
 │   └── Dashboard.js
 ├── services/
 │   └── api.js
 ├── styles/
 │   └── app.css
 ├── App.js
 └── index.js
```
