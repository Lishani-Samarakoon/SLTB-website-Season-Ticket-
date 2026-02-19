# 🚀 Quick Reference Card

## Files Created ✨

| File | Purpose |
|------|---------|
| `.env.example` | Template for environment variables |
| `.env.local` | Local development config (git-ignored) |
| `.env.production` | Production config template |
| `src/utils/api.js` | Centralized API calls |
| `DEPLOYMENT.md` | Vercel deployment guide |
| `SETUP_GUIDE.md` | Complete setup & troubleshooting |

## Files Updated 🔄

| File | Changes |
|------|---------|
| `vercel.json` | Fixed env variable reference from `@vite_api_url` to `@VITE_API_URL` |
| `server/index.js` | Added error handling, CORS config, logging |
| `server/package.json` | Added `start` and `dev` scripts |
| `src/pages/FillApplication.jsx` | Added API integration, loading state |
| `src/pages/Payment.jsx` | Fixed CSS class names (grid2 instead of payGrid2) |

## Common Commands

```bash
# Development
npm run dev              # Start frontend
cd server && npm start   # Start backend

# Build & Deploy
npm run build            # Build for production
npm run lint             # Check code quality

# Testing
curl http://localhost:5000/health     # Test backend
```

## Environment Variables

**Local Development** (`.env.local`)
```
VITE_API_URL=http://localhost:5000
```

**Production** (Set in Vercel Dashboard)
```
VITE_API_URL=https://your-backend-url.vercel.app
```

## Deployment Checklist

1. ✅ Build passes: `npm run build`
2. ✅ Linter passes: `npm run lint`
3. ✅ Git changes committed
4. ✅ Push to main branch
5. ✅ Set Vercel env variables
6. ✅ Monitor CI/CD pipeline
7. ✅ Test deployed application

## Port Information

| Service | Port | URL |
|---------|------|-----|
| Frontend (Dev) | 5173 | http://localhost:5173 |
| Frontend (Prod) | 3000/HTTPS | Vercel domain |
| Backend | 5000 | http://localhost:5000 |
| Backend (Prod) | HTTPS | Vercel domain |

## API Endpoints

```
GET  /health           - Server health check
POST /apply            - Submit application form
```

## Debugging

```bash
# View backend logs
node server/index.js

# Check environment variables
echo $VITE_API_URL

# View Vercel build logs
# -> Vercel Dashboard → Deployments → View Build Logs
```

## Support

For detailed information:
- `SETUP_GUIDE.md` - Complete troubleshooting
- `DEPLOYMENT.md` - Vercel deployment steps
- `README.md` - Project overview

---
**Last Updated**: February 19, 2026
