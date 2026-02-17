# 👤 MEMBER 2 - Frontend Pages & Forms Guide

## 📋 Responsibilities

You are responsible for developing and maintaining **frontend pages & forms** that connect to the backend API. You **DO NOT** work on database logic - that's handled by other team members.

---

## 📁 Your Work Area

**Exclusive directory:** `client/src/pages/`

```
src/pages/
├── Login.jsx           ✅ Your responsibility
├── Login.css
├── Register.jsx        ✅ Your responsibility
├── Apply.jsx           ✅ Your responsibility
├── MyTickets.jsx       ✅ Your responsibility
├── Payment.jsx         ✅ Your responsibility
├── Payment.css
├── FillApplication.jsx (Partially - coordinate with team)
└── Other pages         (NOT your responsibility)
```

---

## 🎯 Pages Overview & Tasks

### 1️⃣ **Login Page** (`src/pages/Login.jsx`)

**Current State:** Basic UI with modal choices  
**Status:** ⚠️ Needs API integration

**To-Do:**
- [ ] Connect "Log in with Email" button to backend authentication
- [ ] Store JWT token in localStorage after successful login
- [ ] Validate email format
- [ ] Add password field validation
- [ ] Show loading state during API call
- [ ] Handle login errors gracefully
- [ ] Redirect to home/dashboard after successful login

**API Endpoint:**
```javascript
POST http://localhost:5000/api/auth/login
Body: { email: string, password: string }
Response: { token: string, userId: string, user: {...} }
```

---

### 2️⃣ **Register Page** (`src/pages/Register.jsx`)

**Current State:** Form with basic validation  
**Status:** ⚠️ Needs API integration

**To-Do:**
- [ ] Connect form submission to backend registration API
- [ ] Add email validation (check if email already exists)
- [ ] Hash password before sending (or let backend handle it)
- [ ] Show loading state during submission
- [ ] Add success toast/notification
- [ ] Redirect to login after successful registration
- [ ] Handle duplicate email error
- [ ] Add password strength indicator

**API Endpoint:**
```javascript
POST http://localhost:5000/api/auth/register
Body: { 
  fullName: string,
  email: string, 
  password: string,
  confirmPassword: string 
}
Response: { message: string, userId: string }
```

---

### 3️⃣ **Apply Page** (`src/pages/Apply.jsx`)

**Current State:** Information page showing application steps  
**Status:** ✅ Basic UI complete, just needs minor refinements

**To-Do:**
- [ ] Verify button navigation works correctly
- [ ] Add login check (redirect if not logged in)
- [ ] Add smooth animations to step cards
- [ ] Ensure responsive design

**Current Flow:**
- Shows 4 steps: Fill Application → Upload Photo → Payment → Done
- "Start Application" button → navigates to `/fill-application`

---

### 4️⃣ **MyTickets Page** (`src/pages/MyTickets.jsx`)

**Current State:** Fetches tickets from API and displays list  
**Status:** ⚠️ Needs refinement

**To-Do:**
- [ ] Test API fetch with actual backend data
- [ ] Add ticket status indicator (active/expired/pending)
- [ ] Add "Download Ticket" functionality
- [ ] Add "View Details" button with routing to TicketView
- [ ] Add date formatting (when ticket was purchased, expiry date)
- [ ] Add search/filter functionality
- [ ] Handle "no tickets" state better
- [ ] Add pagination if many tickets

**API Endpoint:**
```javascript
GET http://localhost:5000/api/applications
Headers: { Authorization: "Bearer <token>" }
Response: [
  {
    _id: string,
    fullName: string,
    email: string,
    status: string,
    createdAt: string,
    ticketNumber: string,
    ...
  }
]
```

---

### 5️⃣ **Payment Page** (`src/pages/Payment.jsx`)

**Current State:** Payment form with card details  
**Status:** ⚠️ Needs error handling & refinement

**To-Do:**
- [ ] Add card number formatting (XXXX-XXXX-XXXX-1234)
- [ ] Add expiry date formatting (MM/YY)
- [ ] Validate CVV (3-4 digits)
- [ ] Add amount display before payment
- [ ] Test payment API integration
- [ ] Add success notification after payment
- [ ] Handle payment errors clearly
- [ ] Redirect to success page after payment
- [ ] Disable button during loading
- [ ] Add terms & conditions checkbox

**API Endpoint:**
```javascript
POST http://localhost:5000/api/applications/{applicationId}/pay
Headers: { Authorization: "Bearer <token>" }
Body: {
  amount: number,
  cardNumber: string,
  nameOnCard: string,
  email: string
}
Response: { success: boolean, transactionId: string, message: string }
```

---

## 🔧 Tech Stack & Libraries

- **React 19.2.0** - UI framework
- **React Router DOM 7.12.0** - Navigation (already configured)
- **fetch API** - HTTP requests (built-in, no extra package needed)
  
**Optional (if needed):**
- `axios` - If you prefer over fetch (install with `npm install axios`)
- `react-toastify` - For notifications (install with `npm install react-toastify`)

---

## 📝 Code Standards for Member 2

### Do's ✅
- Use React hooks (useState, useEffect, useContext)
- Always validate user input on the frontend
- Store auth tokens in localStorage
- Use react-router for navigation
- Add error handling for API calls
- Show loading states during API requests
- Use environment variables for API URLs

### Don'ts ❌
- DO NOT touch `/server` directory
- DO NOT modify database models
- DO NOT change backend routes
- DO NOT commit database logic
- DO NOT hardcode API URLs (use .env or config file)
- DO NOT skip error handling

---

## 🚀 API Integration Example

```javascript
import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Login failed");
      }

      const data = await res.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);
      
      // Redirect to home
      window.location.href = "/";
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      {/* Form fields */}
      <button disabled={loading}>
        {loading ? "Loading..." : "Login"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
```

---

## 🔐 Authentication Pattern

```javascript
// Store token after login/register
localStorage.setItem("token", jwtToken);

// Use token in API calls
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

// Check if user is logged in
const isLoggedIn = localStorage.getItem("token") !== null;
```

---

## 📦 Git Workflow

**Your Branch:** `member-2-frontend-pages`

### Workflow:
1. Make changes to your pages
2. Commit locally: `git commit -m "feat: update login page with API"`
3. Push to your branch: `git push origin member-2-frontend-pages`
4. Request PR review when ready
5. **NEVER** commit server/database code to this branch

### Example Commits:
```
git add src/pages/Login.jsx
git commit -m "feat: add email validation to login form"
git push origin member-2-frontend-pages
```

---

## 🧪 Testing Your Pages Locally

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:5173/ in browser

3. Navigate to your pages using the navbar

4. Test with browser DevTools (F12) for:
   - Console errors
   - Network requests (check if API calls work)
   - Local storage (check if tokens are saved)

---

## ❓ Common Issues & Solutions

### Issue: API returns 404
**Solution:** Check if backend server is running (`node server/index.js`)

### Issue: localStorage is empty
**Solution:** Check if login response included token, verify API endpoint

### Issue: Token not sending with requests
**Solution:** Add `Authorization: Bearer <token>` header to fetch requests

### Issue: CORS errors
**Solution:** Backend should have CORS enabled for http://localhost:5173

---

## 📞 API Development Notes

- **Base URL:** http://localhost:5000/api
- **Auth Header:** `Authorization: Bearer <token>`
- **Content-Type:** Always use `application/json`
- **Error Responses:** Check `res.ok` before parsing JSON

---

## ✅ Checklist Before Submitting PR

- [ ] All 5 pages are functional
- [ ] API calls work with backend
- [ ] Error handling is in place
- [ ] Loading states are shown
- [ ] No console errors
- [ ] Responsive design works
- [ ] No server/database code committed
- [ ] Commit messages are clear
- [ ] All forms validate input

---

**Good luck! Start with Login & Register, then move to Apply → MyTickets → Payment. Test each page thoroughly!**
