# SLTB Season Ticket - Setup & Troubleshooting Guide

## ✅ Issues Fixed

### 1. **Vercel Deployment Error: Missing Environment Variable**
   - **Problem**: `VITE_API_URL` environment variable was not properly configured
   - **Solution**: 
     - Created `.env.example` with template variables
     - Created `.env.local` for local development
     - Created `.env.production` for production configuration
     - Fixed `vercel.json` to properly reference `@VITE_API_URL`

### 2. **Missing API Utility Functions**
   - **Problem**: Frontend had no way to communicate with backend
   - **Solution**: Created `src/utils/api.js` with centralized API call functions

### 3. **Application Form Not Submitting**
   - **Problem**: Form submission wasn't connected to backend
   - **Solution**: Updated `FillApplication.jsx` to call the backend API on submit

### 4. **CSS Class Name Mismatch in Payment Component**
   - **Problem**: Used `payGrid2` class but CSS defined `grid2` class
   - **Solution**: Fixed all CSS class references to match actual CSS definitions

### 5. **Backend Server Missing Start Script**
   - **Problem**: No `npm start` script in server package.json
   - **Solution**: Added start and dev scripts to server `package.json`

### 6. **Incomplete Error Handling**
   - **Problem**: No error handling in API calls and backend
   - **Solution**: Added error handling middleware and try-catch blocks

## 🚀 Quick Start Guide

### Local Development Setup

```bash
# 1. Install root dependencies
npm install

# 2. Open Terminal 1 - Start Backend
cd server
npm install
npm start
# Backend runs on http://localhost:5000

# 3. Open Terminal 2 - Start Frontend
npm run dev
# Frontend runs on http://localhost:5173
```

### Testing the Application

1. **Test Backend Health**: Visit `http://localhost:5000/health`
2. **Test Frontend**: Visit `http://localhost:5173`
3. **Test Form Submission**: Fill and submit the application form

## 📝 Environment Variables

### Development (Local)
- **File**: `.env.local` (auto-loaded, git-ignored)
- **VITE_API_URL**: `http://localhost:5000`

### Production (Vercel)
You must set this in Vercel Dashboard:

**Settings → Environment Variables**

For all environments (Production, Preview, Development):
```
VITE_API_URL = https://your-backend-url.vercel.app
```

## 📁 Project Structure

```
SLTB-website-Season-Ticket/
├── src/
│   ├── components/          # React components
│   ├── pages/              # Page components
│   ├── utils/
│   │   └── api.js          # ✨ NEW - API utility functions
│   ├── assets/             # Images and media
│   ├── App.jsx             # Main app component
│   └── main.jsx            # Entry point
├── server/
│   ├── index.js            # ✨ UPDATED - Enhanced with error handling
│   └── package.json        # ✨ UPDATED - Added start script
├── .env.example            # ✨ NEW - Environment template
├── .env.local              # ✨ NEW - Local development (git-ignored)
├── .env.production         # ✨ NEW - Production template
├── vercel.json             # ✨ UPDATED - Fixed env variable reference
└── DEPLOYMENT.md           # ✨ NEW - Deployment guide
```

## 🔧 Key Updates Made

### Frontend Files
- ✨ Created: `src/utils/api.js`
- 🔄 Updated: `src/pages/FillApplication.jsx` - Now submits to backend
- 🔄 Updated: `src/pages/Payment.jsx` - Fixed CSS class names

### Backend Files
- 🔄 Updated: `server/index.js` - Enhanced with better error handling
- 🔄 Updated: `server/package.json` - Added start script

### Configuration Files
- ✨ Created: `.env.example`
- ✨ Created: `.env.local`
- ✨ Created: `.env.production`
- 🔄 Updated: `vercel.json` - Fixed environment variable reference
- ✨ Created: `DEPLOYMENT.md` - Comprehensive deployment guide

## 📋 Checklist for Production Deployment

- [ ] **Push all changes to GitHub**
  ```bash
  git add .
  git commit -m "fix: fix deployment errors and add environment variables"
  git push origin main
  ```

- [ ] **Set Vercel Environment Variables**
  1. Go to Vercel Dashboard
  2. Select project: `sltb-website-season-ticket`
  3. Settings → Environment Variables
  4. Add `VITE_API_URL` for Production, Preview, and Development

- [ ] **Deploy Backend (if using separate Vercel project)**
  1. Create new Vercel project for `server` folder
  2. Add same environment variables
  3. Set backend URL in frontend `VITE_API_URL`

- [ ] **Verify CI/CD Pipeline**
  - Check GitHub Actions (should pass)
  - Check Vercel build logs
  - Test deployed application

- [ ] **Test All Features**
  - [ ] Health check endpoint
  - [ ] Fill application form
  - [ ] Submit to backend
  - [ ] View confirmation

## ⚠️ Common Issues & Solutions

### Issue: "Cannot find module 'express'"
**Solution**: Run `npm install` in the server directory

### Issue: "VITE_API_URL is undefined"
**Solution**: Make sure `.env.local` or Vercel env variables are set

### Issue: "CORS Error"
**Solution**: Backend CORS is configured to accept localhost. For production, update the `ALLOWED_ORIGINS` environment variable in backend.

### Issue: "Build fails on Vercel"
**Solution**: Check build logs in Vercel Dashboard. Ensure:
- All dependencies are in `package.json`
- Build command is correct
- Environment variables are properly set

## 📚 Additional Resources

- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Express.js Documentation](https://expressjs.com/)
- [React Router Documentation](https://reactrouter.com/)

## 🎯 Next Steps

1. **Database Integration**: Connect MongoDB to store applications
2. **Authentication**: Implement user login/registration with JWT
3. **File Upload**: Add image upload functionality for documents
4. **Payment Gateway**: Integrate real payment processing
5. **Admin Panel**: Create admin dashboard to manage applications
6. **Email Notifications**: Send confirmation emails to users

---

**Last Updated**: February 19, 2026
**Status**: ✅ All critical deployment issues fixed
