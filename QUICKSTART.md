# Quick Start Guide

**Smart Talent Discovery and Recruitment Management Platform**  
**Author:** Debela Kebede  
**Tagline:** Connecting Talent, Empowering Careers

---

## 🚀 Get Started in 5 Minutes

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Configure Environment

Create a `.env` file from the example:

```bash
cp .env.example .env
```

**Minimum required configuration:**
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=stdrmp_db
JWT_SECRET=your-secret-key-change-this
```

### Step 3: Set Up Database

Open MySQL and run:

```bash
mysql -u root -p < database/schema.sql
```

Or manually:
```sql
mysql -u root -p
SOURCE database/schema.sql;
```

### Step 4: Start the Server

**Development mode with auto-reload:**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

### Step 5: Access the Application

- **Frontend:** http://localhost:3000
- **API:** http://localhost:3000/api
- **Health Check:** http://localhost:3000/api/health

---

## 🔐 Default Admin Account

After running the database schema, you can use:

- **Email:** admin@stdrmp.com
- **Password:** Admin@123 (Please change immediately!)

---

## 📁 Project Structure Overview

```
├── server.js              # Main server file
├── backend/               # Backend API
│   ├── controllers/       # Business logic
│   ├── routes/           # API endpoints
│   ├── middleware/       # Auth & validation
│   └── utils/            # Helper functions
├── frontend/             # Frontend files
│   ├── pages/           # HTML pages
│   ├── css/             # Stylesheets
│   └── js/              # JavaScript
├── database/            # Database scripts
└── docs/                # Documentation
```

---

## 🧪 Testing the Setup

### Test the Health Endpoint
```bash
curl http://localhost:3000/api/health
```

Expected response:
```json
{
  "status": "success",
  "message": "Server is running",
  "author": "Debela Kebede"
}
```

### Test User Registration
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "Test@123",
    "role": "job_seeker",
    "firstName": "Test",
    "lastName": "User"
  }'
```

---

## 🎯 Next Steps

1. **Explore the API** - Check `docs/API_DOCUMENTATION.md`
2. **Read the Development Guide** - See `docs/DEVELOPMENT_GUIDE.md`
3. **Customize the Platform** - Modify branding, colors, features
4. **Add Features** - Implement remaining controller methods
5. **Deploy** - Follow deployment guide for production

---

## 🐛 Common Issues

### Port 3000 Already in Use
Change the port in `.env`:
```env
PORT=3001
```

### Database Connection Error
- Ensure MySQL is running
- Check credentials in `.env`
- Verify database `stdrmp_db` exists

### Module Not Found
```bash
rm -rf node_modules
npm install
```

---

## 📚 Additional Resources

- [Complete README](README.md)
- [API Documentation](docs/API_DOCUMENTATION.md)
- [Development Guide](docs/DEVELOPMENT_GUIDE.md)
- [Database Schema](database/schema.sql)

---

## 🤝 Need Help?

This is an academic project by **Debela Kebede**.

**Project Goal:** Modern recruitment platform with intelligent talent matching.

---

**Happy Coding! 🎉**

**Connecting Talent, Empowering Careers.**
