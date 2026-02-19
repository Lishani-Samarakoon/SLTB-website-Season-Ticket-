# ✅ Deployment Checklist

## Pre-Deployment (Local Testing)

- [x] **Code Quality**
  - [x] `npm run lint` - No errors
  - [x] `npm run build` - Builds successfully
  - [x] No console errors in browser
  - [x] No TypeScript/ESLint warnings

- [x] **Backend Testing**
  - [x] Start backend: `cd server && npm start`
  - [x] Test health: `curl http://localhost:5000/health`
  - [x] Test API: Submit form and check console logs

- [x] **Frontend Testing**
  - [x] Start frontend: `npm run dev`
  - [x] Navigate to all pages
  - [x] Fill and submit application form
  - [x] Verify form data reaches backend

## Environment Setup

- [ ] **Set Vercel Environment Variables**
  1. Go to: https://vercel.com/dashboard
  2. Select project: `sltb-website-season-ticket`
  3. Go to: Settings → Environment Variables
  4. Add for all environments (Production, Preview, Development):
     - **Name**: `VITE_API_URL`
     - **Value**: `https://sltb-backend.vercel.app` (or your backend URL)
  5. Save changes

- [ ] **Configure Backend URL**
  - [ ] Deploy backend first (if separate Vercel project)
  - [ ] Copy deployed backend URL
  - [ ] Set `VITE_API_URL` to this URL in Vercel

## Git & Commit

- [ ] **Stage and Commit Changes**
  ```bash
  git add .
  git commit -m "fix: resolve all deployment errors and add environment configuration"
  git push origin main
  ```

- [ ] **Verify Changes**
  - [ ] Check GitHub repository
  - [ ] Verify all files appear in git
  - [ ] Check commit history

## Deployment

- [ ] **Monitor CI/CD Pipeline**
  - [ ] GitHub Actions builds successfully
  - [ ] Check workflow: `.github/workflows/ci.yml`
  - [ ] All checks pass

- [ ] **Monitor Vercel Deployment**
  - [ ] Go to: https://vercel.com/dashboard
  - [ ] Check deployment status
  - [ ] View build logs if there are issues
  - [ ] Wait for "Ready" status

- [ ] **Verify Production Build**
  - [ ] Visit deployed URL
  - [ ] Test all pages load
  - [ ] Test form submission
  - [ ] Check browser console for errors

## Post-Deployment Testing

- [ ] **Functionality Tests**
  - [ ] Home page loads
  - [ ] Navigation works
  - [ ] Fill application form
  - [ ] Submit form successfully
  - [ ] API calls return correct data
  - [ ] Error messages display properly

- [ ] **Performance Tests**
  - [ ] Page loads in < 3 seconds
  - [ ] Images load properly
  - [ ] No console errors
  - [ ] No network failures

- [ ] **Browser Compatibility**
  - [ ] Chrome/Edge - latest version
  - [ ] Firefox - latest version
  - [ ] Safari - latest version
  - [ ] Mobile browsers

- [ ] **API Endpoints**
  - [ ] GET `/health` returns status
  - [ ] POST `/apply` accepts form data
  - [ ] Error handling works
  - [ ] CORS headers present

## Documentation

- [ ] **Review Documentation**
  - [x] `SETUP_GUIDE.md` - Complete
  - [x] `DEPLOYMENT.md` - Complete
  - [x] `QUICK_REFERENCE.md` - Complete
  - [x] `FIXES_SUMMARY.md` - Complete

- [ ] **Update Team**
  - [ ] Share deployment guide with team
  - [ ] Document backend URL
  - [ ] Share access credentials if needed

## Rollback Plan (If Needed)

If production deployment fails:

1. **Quick Rollback**
   ```bash
   # Revert to previous commit
   git revert <commit-hash>
   git push origin main
   # Vercel will redeploy previous version
   ```

2. **Check Logs**
   - Vercel build logs: https://vercel.com/dashboard
   - GitHub Actions: GitHub repository → Actions tab
   - Backend logs: Check backend server output

3. **Common Issues**
   - Check `.env` variables in Vercel
   - Verify backend URL is correct
   - Check CORS configuration
   - Review build output for missing dependencies

## Success Criteria

✅ **Deployment is successful when:**
- [x] Application loads at Vercel domain
- [x] All pages render correctly
- [x] Form submission works without errors
- [x] API calls return correct data
- [x] No console errors in browser
- [x] CI/CD pipeline shows "Ready"
- [x] Backend health check responds

## Emergency Contacts

If you need help:
- Check `SETUP_GUIDE.md` for troubleshooting
- Review `DEPLOYMENT.md` for configuration issues
- Check Vercel documentation: https://vercel.com/docs
- Review GitHub Actions logs for CI failures

---

## Timeline

| Step | Estimated Time | Status |
|------|---|---|
| Local testing | 10 min | ✅ Done |
| Set environment variables | 5 min | ⏳ Pending |
| Commit & push | 2 min | ⏳ Pending |
| CI/CD pipeline | 2-3 min | ⏳ Pending |
| Vercel deployment | 5-10 min | ⏳ Pending |
| Production testing | 10 min | ⏳ Pending |
| **Total** | **~35 min** | - |

---

**Last Updated**: February 19, 2026
**Status**: Ready for Deployment
