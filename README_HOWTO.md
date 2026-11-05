# How to Run the Project

## Method 1: Quick Start (RECOMMENDED)
**Double-click on `start-project.bat`**
- This will automatically start the server and open your browser

## Method 2: Using Terminal
1. Open Terminal in VS Code (`` Ctrl+` ``)
2. Run: `npm run dev`
3. Open browser and go to: `http://localhost:3000`

## Method 3: Using VS Code Debug
1. Press `F5` (or go to Run → Start Debugging)
2. Select "Launch Chrome with Project"
3. Browser will open automatically

---

## ⚠️ IMPORTANT NOTES

### ❌ DO NOT USE "Open with Live Server"
Live Server **WILL NOT WORK** with this project because:
- This project requires a Node.js/Express backend server
- It has API routes, authentication, and database features
- Live Server only works with pure static HTML files

### ✅ ALWAYS ACCESS VIA
**`http://localhost:3000/`**

This is your Node.js server URL. All features work correctly here.

---

## Available URLs

- **Home**: http://localhost:3000/
- **Jobs**: http://localhost:3000/jobs
- **About**: http://localhost:3000/about
- **Contact**: http://localhost:3000/contact
- **Login**: http://localhost:3000/login
- **Register**: http://localhost:3000/register
- **Job Seeker Dashboard**: http://localhost:3000/dashboard/jobseeker

---

## Troubleshooting

### Problem: "Cannot GET /contact" or similar errors
**Solution**: Make sure you're accessing `http://localhost:3000/` NOT Live Server URLs

### Problem: Server not starting
**Solution**: 
1. Stop any running servers
2. Run: `npm install`
3. Run: `npm run dev`

### Problem: Port 3000 already in use
**Solution**: 
1. Stop all Node.js processes
2. Or change the PORT in `.env` file

---

## Developer: Debela Kebede
## Tagline: Connecting Talent, Empowering Careers
