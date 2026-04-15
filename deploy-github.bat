@echo off
echo ========================================
echo   VIJAY ENTERPRISES - GITHUB DEPLOYMENT
echo ========================================
echo.
echo Step 1: Create GitHub Repository
echo 1. Go to https://github.com/new
echo 2. Repository name: business-portfolio-generation
echo 3. Make it Public
echo 4. DON'T check any boxes (README, .gitignore, license)
echo 5. Click "Create repository"
echo.
echo Step 2: Push Code (run after creating repo)
echo.
git push -u origin main
echo.
echo Step 3: Deploy to Hosting
echo - Frontend: Vercel.com or Netlify.com
echo - Backend: Render.com
echo.
echo Your Vijay Enterprises website will be live! 🚀
echo.
pause