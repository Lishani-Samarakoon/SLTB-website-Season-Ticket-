# Vercel Deployment Guide

## Prerequisites

1. GitHub repository pushed with all changes
2. Vercel account connected to GitHub
3. Project connected to Vercel

## Environment Variables Setup on Vercel

To fix the deployment errors, you need to add the following environment variables to your Vercel project:

### Steps:

1. Go to your Vercel Dashboard
2. Select your project "sltb-website-season-ticket"
3. Go to **Settings** → **Environment Variables**
4. Add the following variables for each environment:

#### Development Environment:
- **Name**: `VITE_API_URL`
- **Value**: `http://localhost:5000`

#### Preview Environment:
- **Name**: `VITE_API_URL`
- **Value**: `https://sltb-backend-staging.vercel.app` (or your preview backend URL)

#### Production Environment:
- **Name**: `VITE_API_URL`
- **Value**: `https://sltb-backend.vercel.app` (or your production backend URL)

## Files Added/Modified

- **`.env.example`**: Template for environment variables (commit to repo)
- **`.env.local`**: Local development environment (gitignored, don't commit)
- **`.env.production`**: Production environment template (gitignored, don't commit)
- **`vercel.json`**: Updated to use correct environment variable reference (`@VITE_API_URL`)

## How It Works

1. The application reads environment variables using `import.meta.env.VITE_API_URL`
2. Created `src/utils/api.js` to centralize API calls
3. `FillApplication` component now properly submits to the backend
4. The API URL is dynamically set based on the environment

## Backend Deployment

To deploy the backend separately:

1. Create a new Vercel project for the backend (server folder)
2. Add the same environment variables
3. Update `VITE_API_URL` to point to your deployed backend URL

## Testing

### Local Testing:
```bash
# Terminal 1: Start backend
cd server
npm install
npm start

# Terminal 2: Start frontend
npm install
npm run dev
```

### Production Testing:
Push to the main branch and verify:
- CI Pipeline passes (GitHub Actions)
- Deploy to Production succeeds
- Application loads at deployed URL
- API calls work correctly

## Troubleshooting

If deployment still fails:

1. Check Vercel build logs for specific errors
2. Verify all environment variables are set correctly
3. Ensure `package.json` scripts are correct
4. Check that all dependencies are listed in `package.json`
5. Verify backend URL is accessible and CORS is enabled
