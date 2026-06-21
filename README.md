# Visitor Pass Management System

A full-stack **Visitor Pass Management System** built using the MERN Stack (MongoDB, Express.js, React, Node.js). The application digitizes visitor registration and access control for offices, institutions, and organizations.

---

## Features

### Authentication & Authorization

- JWT Authentication
- Role-Based Access Control (RBAC)
- Admin, Employee, and Security roles

### Visitor Management

- Register visitors
- View visitor records
- Delete visitors

### Appointment Management

- Create appointments
- Approve appointments
- Track appointment status

### Pass Management

- Generate digital visitor passes
- QR code generation
- PDF badge generation
- Pass validity tracking

### Security Panel

- Check-In visitors
- Check-Out visitors
- Maintain access logs

### Dashboard

- Total Visitors
- Total Appointments
- Active Passes
- Used Passes
- Checked-In Visitors

### Reports

- Export Visitors CSV
- Export Appointments CSV
- Export Check Logs CSV

---

# Workflow

Employee → Create Appointment
↓
Admin → Approve Appointment
↓
Generate QR Pass + PDF Badge
↓
Security → Check-In Visitor
↓
Visitor Access
↓
Security → Check-Out Visitor
↓
Pass Marked as Used

---

# Tech Stack

## Frontend

- React
- React Router
- Bootstrap
- Axios

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

## Libraries Used

- JWT
- bcryptjs
- QRCode
- PDFKit
- csv-writer
- CORS

---

# Project Structure

```
visitor-pass-system
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── pdfs
│   ├── exports
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── context
│   │   ├── App.jsx
│   │   └── main.jsx
│
└── README.md
```

---

# Database Collections

- Users
- Visitors
- Appointments
- Passes
- CheckLogs

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
cd visitor-pass-system
```

---

## Backend Setup

```bash
cd backend
npm install
npm run dev
```

Server runs at:

```
http://localhost:4000
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# Environment Variables

Create `.env`

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

# API Routes

## Authentication

```
POST /api/auth/register
POST /api/auth/login
```

## Visitors

```
GET /api/visitors
POST /api/visitors
DELETE /api/visitors/:id
```

## Appointments

```
GET /api/appointments
POST /api/appointments
PUT /api/appointments/:id
DELETE /api/appointments/:id
```

## Passes

```
GET /api/passes
POST /api/passes
```

## Check Logs

```
POST /api/checklogs
PUT /api/checklogs/checkout/:id
GET /api/checklogs
```

## Dashboard

```
GET /api/dashboard
```

## Reports

```
GET /api/reports/visitors
GET /api/reports/appointments
GET /api/reports/checklogs
```

---

# Future Enhancements

- Visitor Self Registration Portal
- Email Notifications
- OTP Verification
- Multi-Organization Support
- QR Scanner Integration
- Docker Deployment
- Nginx Reverse Proxy
- Analytics Dashboard with Charts

---

# Screenshots

Add screenshots of:

- Login Page
- Dashboard
- Visitors Page
- Appointments Page
- Passes Page
- Security Panel
- Reports Page

---

# Author

**Devender Singh Bisht**

Built using the MERN Stack as a portfolio project for internships and full-stack development practice.
