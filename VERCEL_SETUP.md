# Vercel Environment Setup Instructions

## 🔧 Required Environment Variables

For the application to deploy successfully on Vercel, you need to set the following environment variables:

### Main Variable
- **Name**: `VITE_API_URL`
- **Value**: `https://sltb-backend.vercel.app` (or your backend URL)
- **Apply to**: Production, Preview, Development

## 📋 Step-by-Step Setup

### 1. Access Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. Sign in to your account
3. Select your project: **sltb-website-season-ticket**

### 2. Navigate to Environment Variables
1. Click **Settings** in the top menu
2. In the left sidebar, click **Environment Variables**

### 3. Add the Variable
1. In the "Environment Variables" section, you'll see an input form
2. **Name**: Enter `VITE_API_URL`
3. **Value**: Enter your backend URL (e.g., `https://sltb-backend.vercel.app`)
4. **Select All** or choose specific environments:
   - ✅ Production
   - ✅ Preview
   - ✅ Development
5. Click **Add** or **Save**

### 4. Redeploy
1. Go to **Deployments** tab
2. Click on the latest deployment or **Redeploy**
3. Select **Redeploy with Current Configuration**
4. Wait for deployment to complete

## ⚙️ Optional: GitHub Secrets (for CI/CD)

If you want GitHub Actions to pass the environment variable during build, also add:

1. Go to GitHub repository
2. **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. **Name**: `VITE_API_URL`
5. **Value**: `https://sltb-backend.vercel.app`
6. Click **Add secret**

This allows the workflow to automatically set the variable during deployment.

## 🧪 Verification

After setting up, verify the deployment:

1. Check deployment status in Vercel dashboard
2. Verify the build completes without errors
3. Visit your deployed URL
4. Open browser DevTools (F12)
5. In Console, check: `console.log(import.meta.env.VITE_API_URL)`
6. Should output: `https://sltb-backend.vercel.app` (or your configured URL)

## ❌ Troubleshooting

### Issue: "VITE_API_URL references Secret... which does not exist"
**Solution**: Make sure you've added `VITE_API_URL` to Vercel Environment Variables (see steps above)

### Issue: Environment variable not being used
**Solution**: 
1. Verify the variable name is exactly `VITE_API_URL` (case-sensitive)
2. Redeploy the project
3. Clear browser cache (Ctrl+Shift+Delete)

### Issue: API calls returning 404
**Solution**: 
1. Verify the backend URL is correct
2. Check if backend is deployed and running
3. Verify CORS is enabled on backend

## 📞 Support

If deployment still fails after setting these variables, check:
- Vercel build logs for specific errors
- GitHub Actions workflow status
- Backend availability and CORS configuration
- Browser console for API errors (F12 → Console)
