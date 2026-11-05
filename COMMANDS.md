# Quick Command Reference
**Author:** Debela Kebede  
**Project:** Smart Talent Discovery and Recruitment Management Platform

## 🚀 Server Commands

### Start Development Server
```bash
npm run dev
```
Server starts with auto-reload on file changes

### Start Production Server
```bash
npm start
```
Server starts in production mode

### Stop Server
- Press `Ctrl + C` in the terminal where server is running

## 🗄️ Database Commands

### Create Database (MySQL)
```bash
mysql -u root -p
```
Then inside MySQL:
```sql
source database/schema.sql;
```

### Or directly:
```bash
mysql -u root -p < database/schema.sql
```

### Access MySQL
```bash
mysql -u root -p stdrmp_db
```

### Show all tables
```sql
SHOW TABLES;
```

### View users
```sql
SELECT * FROM users;
```

### Check database structure
```sql
DESCRIBE users;
DESCRIBE job_seekers;
DESCRIBE companies;
DESCRIBE vacancies;
```

## 🔍 Testing Commands

### Test API Health
**Browser:** http://localhost:3000/api/health

**PowerShell:**
```powershell
Invoke-WebRequest -Uri http://localhost:3000/api/health -UseBasicParsing
```

### Test Registration (After DB setup)
```powershell
$body = @{
    email = "test@example.com"
    password = "Test@123"
    role = "job_seeker"
    firstName = "Test"
    lastName = "User"
} | ConvertTo-Json

Invoke-WebRequest -Uri http://localhost:3000/api/auth/register -Method POST -Body $body -ContentType "application/json" -UseBasicParsing
```

### Test Login
```powershell
$body = @{
    email = "admin@stdrmp.com"
    password = "Admin@123"
} | ConvertTo-Json

Invoke-WebRequest -Uri http://localhost:3000/api/auth/login -Method POST -Body $body -ContentType "application/json" -UseBasicParsing
```

## 📦 Package Management

### Install Dependencies
```bash
npm install
```

### Install New Package
```bash
npm install package-name
```

### Install Dev Dependency
```bash
npm install --save-dev package-name
```

### Update Packages
```bash
npm update
```

### Check for Vulnerabilities
```bash
npm audit
```

### Fix Vulnerabilities
```bash
npm audit fix
```

## 🔧 Development Commands

### Check Node Version
```bash
node --version
```

### Check npm Version
```bash
npm --version
```

### List Installed Packages
```bash
npm list
```

### View Package Info
```bash
npm info package-name
```

## 🌐 Browser URLs

### Main Application
- Homepage: http://localhost:3000
- Registration: http://localhost:3000/frontend/pages/register.html
- Login: http://localhost:3000/frontend/pages/login.html (when created)

### API Endpoints
- Health Check: http://localhost:3000/api/health
- Register: POST http://localhost:3000/api/auth/register
- Login: POST http://localhost:3000/api/auth/login
- Vacancies: GET http://localhost:3000/api/vacancies

## 🐛 Troubleshooting Commands

### Kill Process on Port 3000 (if stuck)
```powershell
# Find process
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess

# Kill process
Stop-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess -Force
```

### Clear node_modules and Reinstall
```bash
Remove-Item -Recurse -Force node_modules
npm install
```

### Clear npm Cache
```bash
npm cache clean --force
```

### Check MySQL Status (if installed)
```powershell
Get-Service MySQL*
```

### Start MySQL Service
```powershell
Start-Service MySQL80
```

## 📝 Git Commands (Future)

### Initialize Git
```bash
git init
```

### Add All Files
```bash
git add .
```

### Commit Changes
```bash
git commit -m "Initial commit - Project by Debela Kebede"
```

### Create Repository on GitHub
```bash
git remote add origin https://github.com/yourusername/stdrmp.git
git branch -M main
git push -u origin main
```

## 🔐 Environment Commands

### View Environment Variables
```powershell
Get-Content .env
```

### Edit Environment File
```powershell
notepad .env
```

## 📊 Monitoring Commands

### Watch Server Logs
Server logs appear in terminal where `npm run dev` is running

### Check Database Connection
Look for:
```
✅ Database connected successfully
```
Or:
```
⚠️  Database connection failed
```

### Monitor Port Usage
```powershell
netstat -ano | findstr :3000
```

## 🎨 Frontend Development

### Open in VS Code (if installed)
```bash
code .
```

### Open Specific File
```bash
code frontend/pages/index.html
```

### Live Reload
- Server auto-reloads on backend changes
- Refresh browser for frontend changes

## 📚 Documentation Commands

### View README
```powershell
Get-Content README.md
```

### View Quick Start
```powershell
Get-Content QUICKSTART.md
```

### View Setup Instructions
```powershell
Get-Content SETUP_INSTRUCTIONS.md
```

### View API Docs
```powershell
Get-Content docs/API_DOCUMENTATION.md
```

## 🎯 Quick Start Sequence

**Complete setup in order:**

```bash
# 1. Install dependencies
npm install

# 2. Create environment file
Copy-Item .env.example .env

# 3. [Optional] Setup database
mysql -u root -p < database/schema.sql

# 4. Start server
npm run dev

# 5. Open browser
start http://localhost:3000
```

## ✨ Common Workflows

### Adding a New Feature
```bash
# 1. Edit files
# 2. Server auto-reloads (backend)
# 3. Refresh browser (frontend)
# 4. Test changes
```

### Fixing a Bug
```bash
# 1. Check error in terminal/console
# 2. Edit the file
# 3. Save and test
# 4. Verify fix works
```

### Creating New Page
```bash
# 1. Create HTML in frontend/pages/
# 2. Add CSS if needed
# 3. Add JS if needed
# 4. Test at http://localhost:3000/frontend/pages/newpage.html
```

---

**Quick Access:**
- Server: `npm run dev`
- Browser: http://localhost:3000
- Stop: `Ctrl + C`

**Remember:** Server is currently running on terminal 2!

---

**Author:** Debela Kebede  
**Tagline:** Connecting Talent, Empowering Careers
