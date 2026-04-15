# 🚀 VIJAY ENTERPRISES - DEPLOYMENT GUIDE

## ✅ Project Status: READY FOR DEPLOYMENT

Your **Vijay Enterprises** business portfolio website is fully prepared for hosting!

---

## 🎯 QUICK DEPLOYMENT OPTIONS

### **Option 1: GitHub + Vercel (Recommended)**

#### **Step 1: Create GitHub Repository**
1. Go to https://github.com/new
2. **Repository name**: `business-portfolio-generation`
3. **Public**: ✅ Yes
4. **❌ Don't check**: README, .gitignore, license
5. Click **Create repository**

#### **Step 2: Push Code to GitHub**
```bash
git remote add origin https://github.com/YOUR_USERNAME/business-portfolio-generation.git
git branch -M main
git push -u origin main
```

#### **Step 3: Deploy Frontend + Backend to Vercel**
1. Go to https://vercel.com → New Project
2. Import the GitHub repository
3. Configure:
   - **Framework**: Vite
   - **Build Command**: `pnpm run build`
   - **Output Directory**: `dist`
4. **Environment Variables**:
   ```
   EMAIL_USER = rgadade75@gmail.com
   EMAIL_PASS = <your Gmail app password>
   ```
5. Click **Deploy**

> With this setup, the frontend and backend run in the same Vercel project. The contact form posts to `/api/send-enquiry`, so no separate backend host is required.

---

### **Option 2: Netlify (Easiest - No GitHub Required)**

#### **Deploy Frontend:**
1. Go to https://netlify.com
2. Drag and drop the `dist` folder
3. Site deploys instantly!

#### **Deploy Backend:**
1. Go to https://render.com (same as above)
2. Or use Railway, Fly.io, etc.

---

### **Option 3: Firebase (Google)**

#### **Deploy Frontend:**
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

#### **Deploy Backend:**
Use Firebase Functions or stick with Render.

---

## 📧 EMAIL CONFIGURATION

Your contact form will send emails to: **rgadade75@gmail.com**

**Required Environment Variables:**
- `EMAIL_USER`: Your Gmail address
- `EMAIL_PASS`: Your Gmail app password

---

## 🔧 TROUBLESHOOTING

### **Email Not Sending?**
- Verify Gmail app password (not regular password)
- Check 2-Step Verification is enabled
- Ensure environment variables are set correctly

### **CORS Errors?**
- Update `FRONTEND_URL` in backend environment variables
- Or modify `backend/server.js` CORS settings

### **Build Failing?**
- Make sure `pnpm-lock.yaml` is committed
- Check Node.js version (18+ recommended)

---

## 🎉 FINAL RESULT

After deployment, you'll have:
- **Frontend**: `https://your-site.vercel.app` (or Netlify URL)
- **Backend**: `https://your-api.onrender.com`
- **Email**: Working contact form
- **Cost**: 100% FREE!

---

## 📞 SUPPORT

If you encounter any issues:
1. Check the browser console for errors
2. Verify environment variables are set
3. Test the contact form after deployment

**Your Vijay Enterprises website is deployment-ready! 🚀**