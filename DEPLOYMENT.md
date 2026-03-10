# 🚀 Deployment Guide - Business Portfolio

## Part 1: Deploy Backend to Render.com (Free)

### Step 1: Create Render Account
1. Go to https://render.com
2. Sign up (use GitHub for easier deployment)

### Step 2: Connect GitHub Repository
1. Push your project to GitHub
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/business-portfolio-generation.git
   git push -u origin main
   ```

2. Connect Render to GitHub
   - Go to Render Dashboard
   - Click "New +" → "Web Service"
   - Connect your GitHub account
   - Select your repository

### Step 3: Configure Backend on Render
1. **Name**: `business-portfolio-backend`
2. **Root Directory**: `backend`
3. **Build Command**: `npm install`
4. **Start Command**: `npm start`
5. **Environment Variables**: Add these in Render dashboard
   ```
   EMAIL_USER = rgadade75@gmail.com
   EMAIL_PASS = zdjh nwbk ylpc kvdi
   ```

### Step 4: Get Backend URL
- After deployment, you'll get a URL like: `https://business-portfolio-backend.onrender.com`
- **Save this URL** for frontend configuration

---

## Part 2: Deploy Frontend to Vercel (Free)

### Step 1: Create Vercel Account
1. Go to https://vercel.com
2. Sign up with GitHub

### Step 2: Deploy Frontend
1. Click "New Project"
2. Import your GitHub repository
3. Configure:
   - **Framework**: React
   - **Build Command**: `pnpm run build`
   - **Output Directory**: `dist`

### Step 3: Add Environment Variables
In Vercel Dashboard → Project Settings → Environment Variables:
```
VITE_API_URL=https://business-portfolio-backend.onrender.com
```

### Step 4: Deploy
- Click "Deploy"
- Wait for deployment to complete
- You'll get a URL like: `https://business-portfolio-generation.vercel.app`

---

## Part 3: Update Backend API URL

### After getting your Vercel frontend URL:
1. Update backend CORS in `backend/server.js`:
   ```javascript
   app.use(cors({
     origin: "https://your-vercel-url.vercel.app"
   }));
   ```
2. Push changes to GitHub (Render will auto-redeploy)

---

## Testing Live Website
1. Open your Vercel URL
2. Fill the contact form
3. If email sends successfully → ✅ All set!

---

## Troubleshooting

### Email not sending?
- Check Render environment variables are correct
- Verify Gmail app password (not regular password)
- Check Gmail 2-Step Verification is enabled

### API connection error?
- Make sure `VITE_API_URL` is set correctly in Vercel
- Verify backend URL is correct and running
- Check CORS headers in backend

### Build failing on Vercel?
- Make sure `pnpm-lock.yaml` is committed to GitHub
- Check Node.js version matches (v18+)

---

## Quick Summary
✅ Backend: Render.com
✅ Frontend: Vercel
✅ Database: Email via Gmail
✅ Cost: FREE! 🎉