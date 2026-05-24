<div align="center">

# 📚 BookMyCampus

### Smart Campus Resource Allocation & Management System

[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MySQL](https://img.shields.io/badge/MySQL-Database-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Google Cloud](https://img.shields.io/badge/Google_Cloud-APIs-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white)](https://cloud.google.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

**A modern, full-stack SaaS platform for booking and managing campus facilities — labs, auditoriums, sports grounds, classrooms & more.**

*Zero Double Bookings · ACID-Compliant Transactions · AI-Powered Campus Assistant*

[Features](#-features) · [Tech Stack](#-tech-stack) · [Quick Start](#-quick-start) · [API Reference](#-api-reference) · [Architecture](#-architecture)

</div>

---

## 🌟 Overview

**BookMyCampus** is a comprehensive campus resource management platform designed to eliminate scheduling conflicts and streamline facility bookings for students, faculty, and administrators. Built with a modern React SPA frontend and a robust Node.js/Express backend, it ensures **zero double-bookings** through ACID-compliant database transactions with row-level locking.

### Why BookMyCampus?

| Problem | Solution |
|---------|----------|
| Manual booking via spreadsheets & emails | One-click digital booking with real-time availability |
| Double-booking conflicts | ACID transactions with `SELECT ... FOR UPDATE` row locking |
| No visibility into campus resources | Interactive resource grid, calendar view & analytics dashboard |
| Slow approval workflows | Instant notification system with admin approve/reject panel |
| No campus assistance | AI-powered chatbot (CampusMitra) using Google Gemini |

---

## 🚀 Key Google Technologies Integrated

This project leverages powerful **Google APIs** for a production-grade experience:

| # | Technology | Purpose |
|---|-----------|---------|
| 1 | **Google OAuth 2.0** | Secure, passwordless authentication via Google Sign-In |
| 2 | **Google UserInfo API** | Fetches real user profile data (name, email, avatar) dynamically |
| 3 | **Google Maps Embed API** | Interactive campus map with exact building locations |
| 4 | **Google Gemini 1.5 Flash** | Powers the "CampusMitra AI" chatbot with context-aware, real-time responses |

---

## ✨ Features

### 🔐 Authentication & Access Control
- **Google Sign-In** — One-click OAuth 2.0 authentication with automatic profile sync
- **Manual Registration** — Fallback signup with bcrypt password hashing (10 salt rounds)
- **Role-Based Access** — Three distinct roles: `Student`, `Faculty`, `Admin`
- **Hidden Admin Mode** — Secret administrator login with secure key verification

### 📅 Resource Booking Engine
- **Real-Time Availability** — Instant conflict detection before booking submission
- **ACID-Compliant Transactions** — MySQL row-level locking (`FOR UPDATE`) prevents race conditions
- **Time Slot Validation** — Automatic overlap detection across date + time ranges
- **QR Code Entry Pass** — Auto-generated QR codes for approved bookings via `qrcode` library
- **Booking Lifecycle** — Full flow: `Pending → Approved/Rejected` with audit timestamps

### 🤖 CampusMitra AI Assistant
- **Floating Chat Widget** — Accessible from any page via a magical floating icon
- **Google Gemini Powered** — Uses Gemini 1.5 Flash for intelligent, natural-language responses
- **Real-Time Database Context** — Reads live resource counts, availability, and timetable data
- **Campus-Aware** — Answers questions like *"Are there any sports grounds available?"* or *"Where is my Sem 4 class?"*

### 🏢 Resource & Timetable Management
- **Resource Grid** — View all campus facilities with status indicators (Available / Occupied / Maintenance)
- **Class Timetable** — Dynamic filtering by Department (CSE, ENTC, AIDS, Mech, Civil, Electrical) and Semester (1–8)
- **Campus Calendar** — Interactive FullCalendar integration with day/week/month views
- **Campus Map** — Embedded Google Maps showing exact building locations

### 📊 Analytics Dashboard
- **Booking Statistics** — Visual charts powered by Recharts
- **Resource Utilization** — Track which facilities are most/least booked
- **Trend Analysis** — Historical booking data visualization

### 🔔 Notification System
- **Real-Time Alerts** — Instant approval/rejection notifications
- **Toast Notifications** — Non-intrusive alerts via `react-hot-toast`
- **Unread Badge Counter** — Visual indicator for pending notifications
- **Role-Based Targeting** — Notifications can target specific user roles

### ⚙️ Admin Dashboard
- **Booking Management** — Approve, reject, or delete booking requests
- **Resource CRUD** — Create, read, update, and delete campus facilities
- **User Overview** — Monitor registered users and their roles

---

## 🛠️ Tech Stack

### Frontend Architecture

| Technology | Purpose |
|-----------|---------|
| **React 19** (via Vite 8) | Component-based SPA framework |
| **Tailwind CSS 3** | Utility-first responsive styling |
| **Framer Motion** | Smooth page transitions & micro-animations |
| **React Router DOM 7** | Client-side routing with protected routes |
| **Recharts** | Data visualization & analytics charts |
| **FullCalendar** | Interactive calendar views (day/week/month) |
| **Lucide React** | Modern icon library |
| **Axios** | HTTP client for API communication |
| **@react-oauth/google** | Google OAuth 2.0 integration |
| **react-hot-toast** | Toast notification system |

### Backend Architecture

| Technology | Purpose |
|-----------|---------|
| **Node.js + Express.js** | RESTful API server |
| **MySQL 2** | Database driver with connection pooling |
| **bcrypt** | Password hashing (10 salt rounds) |
| **QRCode** | Booking entry pass generation |
| **Nodemailer** | Email notification capabilities |
| **CORS** | Cross-origin resource sharing |
| **dotenv** | Environment variable management |

### Database

| Technology | Purpose |
|-----------|---------|
| **MySQL** | Primary relational database |
| **Connection Pooling** | 10 concurrent connections with keep-alive |
| **ACID Transactions** | Row-level locking for booking integrity |

---

## 📁 Project Structure

```
BookMyCampus/
│
├── backend/                          # 🖥️ Node.js + Express API Server
│   ├── server.js                     # Express app entry point (port 5000)
│   ├── db.js                         # MySQL connection pool configuration
│   ├── migrate.js                    # Database migration utility
│   ├── .env                          # DB credentials (not committed)
│   ├── package.json                  # Backend dependencies
│   └── routes/
│       ├── auth.js                   # Authentication & Google OAuth endpoints
│       ├── bookings.js               # Bookings, Resources, Notifications CRUD
│       └── timetable.js              # Class timetable API endpoints
│
├── frontend-react/                   # ⚛️ React + Vite SPA (Primary Frontend)
│   ├── index.html                    # HTML entry point
│   ├── vite.config.js                # Vite build configuration
│   ├── tailwind.config.js            # Tailwind CSS customization
│   ├── postcss.config.js             # PostCSS plugins
│   ├── .env                          # Google API keys (not committed)
│   ├── package.json                  # Frontend dependencies
│   └── src/
│       ├── main.jsx                  # React app bootstrap
│       ├── App.jsx                   # Router configuration & route guards
│       ├── index.css                 # Global styles & Tailwind imports
│       ├── App.css                   # App-level custom styles
│       ├── api/
│       │   └── index.js              # Axios API client & endpoint functions
│       ├── context/
│       │   └── AuthContext.jsx       # Authentication state management
│       ├── components/
│       │   ├── CampusMitraAI.jsx     # AI chatbot (Google Gemini integration)
│       │   ├── layout/
│       │   │   ├── AppShell.jsx      # Main app layout wrapper
│       │   │   ├── Sidebar.jsx       # Navigation sidebar
│       │   │   └── TopNav.jsx        # Top navigation bar
│       │   └── ui/
│       │       ├── ConfirmDialog.jsx # Reusable confirmation modal
│       │       ├── LoadingSkeleton.jsx# Loading state skeleton UI
│       │       └── StatusBadge.jsx   # Booking status indicator
│       ├── pages/
│       │   ├── Login.jsx             # Login page with Google OAuth
│       │   ├── Signup.jsx            # Registration with role selection
│       │   ├── BookResource.jsx      # Book a campus facility
│       │   ├── Resources.jsx         # View all resources grid
│       │   ├── MyBookings.jsx        # User's booking history
│       │   ├── BookedResources.jsx   # Currently booked resources
│       │   ├── Calendar.jsx          # FullCalendar integration
│       │   ├── ClassTimetable.jsx    # Timetable with dept/sem filters
│       │   ├── Analytics.jsx         # Booking analytics dashboard
│       │   ├── CampusMap.jsx         # Google Maps embed
│       │   ├── Notifications.jsx     # Notification center
│       │   └── AdminPanel.jsx        # Admin management dashboard
│       └── lib/
│           └── utils.js              # Utility functions
│
├── frontend/                         # 🌐 Legacy HTML/CSS/JS Frontend
│   ├── index.html                    # Landing page
│   ├── login.html                    # Login page
│   ├── signup.html                   # Signup page
│   ├── dashboard.html                # Main dashboard
│   ├── dashboard.js                  # Dashboard logic
│   ├── dashboard.css                 # Dashboard styles
│   ├── script.js                     # Auth scripts
│   ├── style.css                     # Global styles
│   ├── gemini-ai.js                  # AI chatbot (standalone)
│   └── images/                       # Logo & brand assets
│       ├── logo.svg
│       ├── logo-icon.svg
│       └── logo.png.png
│
├── database/                         # 🗄️ SQL Schema & Seed Data
│   └── schema.sql                    # Unified schema (all tables + timetable data)
│
├── .gitignore                        # Git ignore rules
├── SETUP_GUIDE.md                    # Detailed installation instructions
└── README.md                         # This file
```

---

## ⚡ Quick Start

### Prerequisites

| Requirement | Version |
|------------|---------|
| Node.js | v16+ |
| MySQL Server | 5.7+ / 8.0+ |
| Git | Latest |

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Chaitali1105/bookmycampus.git
cd bookmycampus
```

### 2️⃣ Set Up the Database

```sql
-- Open MySQL CLI or Workbench
CREATE DATABASE bookmycampus;
USE bookmycampus;
SOURCE database/schema.sql;
```

> This creates all 5 tables (`users`, `resources`, `bookings`, `notifications`, `timetable`) and inserts sample data including a full weekly timetable for 6 departments across 8 semesters.

### 3️⃣ Configure & Start the Backend

```bash
cd backend
npm install
```

Create `backend/.env`:
```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=bookmycampus
```

Start the server:
```bash
npm run dev
# ✅ Server runs at http://localhost:5000
```

### 4️⃣ Configure & Start the Frontend

```bash
cd frontend-react
npm install
```

Create `frontend-react/.env`:
```env
VITE_GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
VITE_GEMINI_API_KEY=your-gemini-api-key
```

Start the dev server:
```bash
npm run dev
# ✅ App opens at http://localhost:5173
```

### 5️⃣ Google Cloud Setup

1. **Google OAuth Client ID**:
   - Visit [Google Cloud Console](https://console.cloud.google.com/) → APIs & Services → Credentials
   - Create an OAuth 2.0 Client ID (Web Application)
   - Add `http://localhost:5173` to **Authorized JavaScript Origins** and **Redirect URIs**

2. **Google Gemini API Key**:
   - Visit [Google AI Studio](https://aistudio.google.com/) → Get API Key
   - Generate a new API key for Gemini 1.5 Flash

> 📖 For detailed setup instructions, see [SETUP_GUIDE.md](SETUP_GUIDE.md)

---

## 🔌 API Reference

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/signup` | Register a new user |
| `POST` | `/api/login` | Login with email & password |
| `POST` | `/api/google-login` | Authenticate via Google OAuth token |

### Booking Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/resources` | Fetch all campus resources |
| `POST` | `/api/bookings` | Create a new booking (ACID transaction) |
| `GET` | `/api/bookings` | Get all bookings (admin) or user bookings |
| `PUT` | `/api/bookings/:id/status` | Approve or reject a booking (admin) |
| `DELETE` | `/api/bookings/:id` | Delete a booking |

### Notification Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/notifications` | Fetch user notifications |
| `PUT` | `/api/notifications/:id/read` | Mark notification as read |

### Timetable Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/timetable` | Fetch timetable (filterable by dept & semester) |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    CLIENT (Browser)                      │
│  ┌───────────────────────────────────────────────────┐  │
│  │          React 19 SPA (Vite + Tailwind)           │  │
│  │  ┌─────────┐ ┌──────────┐ ┌───────────────────┐  │  │
│  │  │ Auth    │ │ Booking  │ │ CampusMitra AI    │  │  │
│  │  │ Context │ │ Pages    │ │ (Gemini 1.5 Flash)│  │  │
│  │  └────┬────┘ └────┬─────┘ └───────────────────┘  │  │
│  │       │            │                               │  │
│  │  ┌────▼────────────▼──────────────────────────┐   │  │
│  │  │          Axios API Client Layer            │   │  │
│  │  └────────────────┬───────────────────────────┘   │  │
│  └───────────────────┼───────────────────────────────┘  │
└──────────────────────┼──────────────────────────────────┘
                       │ HTTP (REST)
┌──────────────────────▼──────────────────────────────────┐
│                  SERVER (Node.js)                        │
│  ┌───────────────────────────────────────────────────┐  │
│  │           Express.js (Port 5000)                  │  │
│  │  ┌──────────┐ ┌───────────┐ ┌──────────────┐     │  │
│  │  │ Auth     │ │ Bookings  │ │ Timetable    │     │  │
│  │  │ Routes   │ │ Routes    │ │ Routes       │     │  │
│  │  └────┬─────┘ └─────┬─────┘ └──────┬───────┘     │  │
│  │       │              │              │              │  │
│  │  ┌────▼──────────────▼──────────────▼──────────┐  │  │
│  │  │      MySQL2 Connection Pool (10 conns)      │  │  │
│  │  └────────────────────┬────────────────────────┘  │  │
│  └───────────────────────┼───────────────────────────┘  │
└──────────────────────────┼──────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────┐
│                     MySQL Database                       │
│  ┌─────────┐ ┌───────────┐ ┌──────────┐ ┌───────────┐  │
│  │ users   │ │ resources │ │ bookings │ │ timetable │  │
│  └─────────┘ └───────────┘ └──────────┘ └───────────┘  │
│                         ┌───────────────┐               │
│                         │ notifications │               │
│                         └───────────────┘               │
└─────────────────────────────────────────────────────────┘
```

---

## 🗄️ Database Schema

### Tables Overview

| Table | Records | Purpose |
|-------|---------|---------|
| `users` | Dynamic | Registered users (students, faculty, admins) |
| `resources` | 19 seeded | Campus facilities (labs, classrooms, auditoriums, etc.) |
| `bookings` | Dynamic | Facility booking requests with status tracking |
| `notifications` | Dynamic | User alerts for booking approvals/rejections |
| `timetable` | 90+ seeded | Weekly class schedule across 6 departments, 8 semesters |

### Resource Types

| Type | Count | Examples |
|------|-------|---------|
| Lab | 4 | Computer Lab 1-3, Physics Lab, Chemistry Lab |
| Classroom | 3 | Lecture Hall 1-3 |
| Auditorium | 2 | Main Auditorium, Seminar Hall |
| Sport Ground | 3 | Basketball Court, Football Ground, Cricket Ground |
| Workshop | 3 | Workshop Room 1-2, Mechanical Workshop |
| Meeting Room | 3 | Conference Room 1-2, Board Room |

### Departments Covered

`CSE` · `Electrical` · `ENTC` · `AIDS` · `Mechanical` · `Civil`

---

## 🧪 Testing

### Test Google Sign-In
1. Click **"Sign in with Google"** on the Login page
2. Google profile auto-syncs with the MySQL database

### Test Admin Access
1. Create an account via Signup using the Admin Secret Key: `admin@123`
2. Or manually update your role in MySQL: `UPDATE users SET role='admin' WHERE email='your@email.com';`
3. Check **"Login as Administrator"** on the Login page

### Test CampusMitra AI
1. Click the floating AI icon (bottom-right corner) on any page
2. Try: *"Are there any sports grounds available?"*
3. Try: *"Where is my Semester 4 CSE class?"*

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| `EADDRINUSE: address already in use :::5000` | Kill the existing Node process or restart terminal |
| "Failed to load notifications" | Ensure you ran the full `database/schema.sql` (includes `target_role` column) |
| Google Login `401: invalid_client` | Verify `http://localhost:5173` is in your Google Cloud Console Authorized Origins |
| `redirect_uri_mismatch` | Add `http://localhost:5173` to Authorized Redirect URIs in Google Console |
| Database connection refused | Check MySQL is running and `backend/.env` credentials are correct |

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

---

## 👩‍💻 Author

**Chaitali** — [GitHub @Chaitali1105](https://github.com/Chaitali1105)

---

## 📄 License

This project is licensed under the **MIT License** — free to use for hackathons, learning, and academic purposes.

---

<div align="center">

**Built with ❤️ for Campus Communities**

*Zero Double Bookings · Maximum Efficiency · AI-Powered Assistance*

⭐ Star this repo if you found it helpful!

</div>
