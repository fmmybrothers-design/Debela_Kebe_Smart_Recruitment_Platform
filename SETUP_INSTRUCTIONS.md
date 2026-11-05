# Setup Instructions for STDRMP
**Author:** Debela Kebede

## Current Status ✅

✅ **Dependencies installed** - All npm packages ready  
✅ **Environment configured** - .env file created with secure secrets  
✅ **Project structure complete** - All files in place  

## Next Steps Required

### Option 1: Install MySQL (Recommended for Full Functionality)

#### Windows Installation:
1. **Download MySQL:**
   - Visit: https://dev.mysql.com/downloads/mysql/
   - Download MySQL Installer for Windows
   - Choose "MySQL Installer 8.0.x"

2. **Install MySQL:**
   - Run the installer
   - Choose "Developer Default" setup
   - Set root password (remember this!)
   - Complete installation

3. **Add MySQL to PATH:**
   - Search "Environment Variables" in Windows
   - Edit System Environment Variables
   - Add MySQL bin folder to PATH:
     - Usually: `C:\Program Files\MySQL\MySQL Server 8.0\bin`

4. **Create Database:**
   ```bash
   # Open Command Prompt or PowerShell
   mysql -u root -p
   # Enter your password
   
   # Then run:
   source database/schema.sql;
   # Or
   \. database/schema.sql
   ```

### Option 2: Use XAMPP (Easier Alternative)

1. **Download XAMPP:**
   - Visit: https://www.apachefriends.org/
   - Download for Windows
   - Install XAMPP

2. **Start MySQL:**
   - Open XAMPP Control Panel
   - Click "Start" for MySQL

3. **Import Database:**
   - Click "Admin" for MySQL (opens phpMyAdmin)
   - Click "Import" tab
   - Choose `database/schema.sql`
   - Click "Go"

4. **Update .env file:**
   ```env
   DB_USER=root
   DB_PASSWORD=
   ```
   (XAMPP MySQL default has no password)

### Option 3: Start Without Database (Development Mode)

You can start the server and work on frontend development:

```bash
npm run dev
```

The API endpoints will return "Not implemented" until database is connected.

## Testing Your Setup

### 1. Start the Server
```bash
npm run dev
```

You should see:
```
============================================================
Smart Talent Discovery and Recruitment Management Platform
Author: Debela Kebede
Tagline: Connecting Talent, Empowering Careers
============================================================
Server running in development mode
Server: http://localhost:3000
API: http://localhost:3000/api
============================================================
```

### 2. Test in Browser
Open: http://localhost:3000

You should see the homepage!

### 3. Test API Health Check
Open: http://localhost:3000/api/health

Expected response:
```json
{
  "status": "success",
  "message": "Server is running",
  "timestamp": "2024-11-04T...",
  "author": "Debela Kebede"
}
```

### 4. Test Database Connection
If MySQL is installed and database created:
- Registration should work
- Login should work
- API endpoints will be functional

If not installed yet:
- Frontend will load fine
- API will return "Not implemented" errors
- You can still develop frontend features

## Current MySQL Configuration

Your `.env` file expects:
- **Host:** localhost
- **Port:** 3306
- **Database:** stdrmp_db
- **User:** root
- **Password:** (You need to set this in .env)

Update `DB_PASSWORD=your_password` in `.env` with your actual MySQL root password.

## Troubleshooting

### Port 3000 Already in Use
Change in `.env`:
```env
PORT=3001
```

### Database Connection Error
1. Check MySQL is running
2. Verify password in `.env`
3. Ensure database `stdrmp_db` exists
4. Check firewall settings

### "Module not found" Errors
```bash
rm -rf node_modules
npm install
```

## What Works Now

✅ **Server starts** - Express server runs on port 3000  
✅ **Frontend loads** - Homepage, registration page  
✅ **API structure** - All routes defined  
✅ **Authentication** - Login/register endpoints ready  
⚠️ **Database** - Needs MySQL installation  

## Quick Start (No Database)

Just to see the interface:

1. **Start server:**
   ```bash
   npm run dev
   ```

2. **Open browser:**
   - Homepage: http://localhost:3000
   - Registration: http://localhost:3000/frontend/pages/register.html

3. **Develop frontend:**
   - All HTML/CSS/JS works
   - Design and test UI
   - Add database later

## Full Start (With Database)

After MySQL is installed:

1. **Create database:**
   ```bash
   mysql -u root -p < database/schema.sql
   ```

2. **Update .env with password:**
   ```env
   DB_PASSWORD=your_actual_password
   ```

3. **Start server:**
   ```bash
   npm run dev
   ```

4. **Test everything:**
   - Registration works ✅
   - Login works ✅
   - All API endpoints functional ✅

## Default Admin Account

After database creation:
- Email: admin@stdrmp.com
- Password: Admin@123
- ⚠️ Change this immediately!

## Need Help?

Check these files:
- **QUICKSTART.md** - Quick reference
- **README.md** - Project overview
- **docs/API_DOCUMENTATION.md** - API details
- **docs/DEVELOPMENT_GUIDE.md** - Development help

---

**Author:** Debela Kebede  
**Project:** Smart Talent Discovery and Recruitment Management Platform  
**Tagline:** Connecting Talent, Empowering Careers
