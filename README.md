# HELP STUDY ABROAD – Frontend Technical Assessment

This project is a frontend technical assessment built using **Next.js (App Router)**, **Material-UI (MUI)**, **Zustand**, and **DummyJSON public APIs**.

The objective of this assignment is to demonstrate authentication, protected routes, REST API integration, pagination, filtering, state management, and clean responsive UI.

---

## 🚀 Tech Stack

- Next.js 14 (App Router)
- React 18
- Material-UI (MUI)
- Zustand (State Management)
- Axios
- DummyJSON Public API

---

## 📂 Project Structure

src/
├── app/
│ ├── page.tsx # Login page
│ ├── dashboard/
│ │ ├── layout.tsx # Protected dashboard layout
│ │ ├── users/
│ │ │ ├── page.tsx # Users list
│ │ │ └── [id]/page.tsx # User detail page
│ │ ├── products/
│ │ │ ├── page.tsx # Products list
│ │ │ └── [id]/page.tsx # Product detail page
├── store/
│ ├── authStore.ts # Auth state
│ ├── userStore.ts # Users state
│ └── productStore.ts # Products state
├── components/
│ └── ProtectedRoute.tsx # Route protection

## 🔐 Authentication

- Authentication is implemented using DummyJSON Auth API:
- POST https://dummyjson.com/auth/login


- Token is stored in **Zustand** and persisted in **localStorage**
- Authenticated users are redirected to dashboard
- Dashboard routes are protected via `ProtectedRoute`

> Note: Due to time constraints, authentication is implemented using Zustand-based token handling instead of NextAuth. Core auth concepts are fully demonstrated.

---

## 👥 Users Module

### APIs Used
- List Users  
  `GET https://dummyjson.com/users?limit=10&skip=0`
- Search Users  
  `GET https://dummyjson.com/users/search?q=...`
- Single User  
  `GET https://dummyjson.com/users/{id}`

### Features
- Pagination
- Search functionality
- Responsive MUI table layout
- User detail page with full information

---

## 📦 Products Module

### APIs Used
- Products list  
  `GET https://dummyjson.com/products?limit=10&skip=0`
- Search products  
  `GET https://dummyjson.com/products/search?q=...`
- Product details  
  `GET https://dummyjson.com/products/{id}`

### Features
- Pagination
- Search bar
- Category filter
- Responsive card-based UI
- Product detail page with images and description

---

## 🧠 State Management (Zustand)

Zustand is used for:
- Authentication state
- Users data
- Products data

### Why Zustand?
- Minimal boilerplate
- Built-in async actions
- Better suited than Redux for small–medium apps
- Clean and maintainable code

---

## ⚡ Performance & Optimization

- API-side pagination to reduce data load
- Memoization (`useMemo`, `useCallback`) where applicable
- Cached API responses inside Zustand store

### Caching Benefits
- Fewer API calls
- Faster navigation
- Better user experience

---

## 🎨 UI / UX

- Fully built using Material-UI
- Responsive layout for:
  - Login
  - Dashboard
  - Users
  - Products
  - Detail pages
- Clean admin dashboard design

---

## 🛠️ Setup & Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/help-study-abroad-frontend.git
cd help-study-abroad-frontend

2️⃣ Install Dependencies
npm install

3️⃣ Run Development Server
npm run dev


Open in browser:

http://localhost:3000

🧪 Dummy Login Credentials
Username: kminchelle
Password: 0lelplR

🚧 Pending Improvements

NextAuth integration

Dynamic product categories

Better image carousel UX

Skeleton loaders & error boundaries

👤 Author

Harshit Rai

✅ Conclusion

This project demonstrates:

Clean frontend architecture

REST API integration

Zustand-based state management

Responsive UI using MUI

Performance-conscious implementation


