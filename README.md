# Smart Talent Discovery and Recruitment Management Platform (STDRMP)

**Project Tagline:** Connecting Talent, Empowering Careers.

**Author:** Debela Kebede

## Overview

The Smart Talent Discovery and Recruitment Management Platform is a comprehensive web-based application designed to connect job seekers with employers through an intelligent and organized digital recruitment system.

## Key Features

### For Job Seekers
- Create professional profiles with education, experience, and skills
- Upload and manage CVs/resumes
- Advanced job search and filtering
- Personalized job recommendations
- Apply for jobs and track application status
- Receive notifications and updates
- Save interesting vacancies

### For Employers
- Register and manage company profiles
- Publish and manage job vacancies
- Discover qualified candidates using intelligent matching
- Review applications and shortlist candidates
- Schedule interviews
- Track recruitment analytics
- Communicate with applicants

### For Administrators
- Manage users and employers
- Verify employers and moderate job postings
- Monitor platform activities
- Generate comprehensive reports
- Manage job categories
- Handle reports and complaints

### Intelligent Features
- Skills-based candidate matching
- Weighted scoring algorithm for talent discovery
- Automated job recommendations
- CV parsing and skill extraction
- Advanced search and filtering

## Technology Stack

### Frontend
- HTML5
- CSS3
- JavaScript ES6+
- Bootstrap 5
- Bootstrap Icons

### Backend
- Node.js
- Express.js
- REST API

### Database
- MySQL

### Security Features
- Bcrypt password hashing
- JWT authentication
- Role-based access control (RBAC)
- Input validation and sanitization
- SQL injection prevention
- XSS protection
- Rate limiting
- Helmet security headers
- Secure file uploads

## Project Structure

```
├── frontend/               # Frontend application
│   ├── assets/            # Static assets
│   ├── css/               # Stylesheets
│   ├── js/                # JavaScript files
│   └── pages/             # HTML pages
├── backend/               # Backend application
│   ├── config/            # Configuration files
│   ├── controllers/       # Request handlers
│   ├── middleware/        # Custom middleware
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── utils/             # Utility functions
│   └── validators/        # Input validators
├── database/              # Database scripts
│   ├── schema.sql         # Database schema
│   └── seeds.sql          # Sample data
├── uploads/               # User uploads (CVs, photos)
└── docs/                  # Documentation
```

## Installation

### Prerequisites
- Node.js (v16 or higher)
- MySQL (v8 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd smart-talent-discovery-recruitment-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration:
   - Database credentials
   - JWT secret
   - Email service credentials
   - Server port

4. **Set up the database**
   ```bash
   # Create database
   mysql -u root -p < database/schema.sql
   
   # Optional: Load sample data
   mysql -u root -p < database/seeds.sql
   ```

5. **Start the application**
   
   Development mode:
   ```bash
   npm run dev
   ```
   
   Production mode:
   ```bash
   npm start
   ```

6. **Access the application**
   - Frontend: `http://localhost:3000`
   - API: `http://localhost:3000/api`

## API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password

### Job Seeker Endpoints
- `GET /api/profile` - Get user profile
- `PUT /api/profile` - Update profile
- `POST /api/profile/cv` - Upload CV
- `GET /api/jobs` - Search jobs
- `POST /api/applications` - Apply for job
- `GET /api/applications` - Get user applications

### Employer Endpoints
- `POST /api/vacancies` - Create job vacancy
- `GET /api/vacancies` - Get employer vacancies
- `PUT /api/vacancies/:id` - Update vacancy
- `DELETE /api/vacancies/:id` - Delete vacancy
- `GET /api/applications/vacancy/:id` - Get applications for vacancy
- `GET /api/candidates/search` - Search candidates

### Admin Endpoints
- `GET /api/admin/users` - Get all users
- `PUT /api/admin/users/:id/verify` - Verify employer
- `GET /api/admin/vacancies/pending` - Get pending vacancies
- `PUT /api/admin/vacancies/:id/approve` - Approve vacancy
- `GET /api/admin/reports` - Get platform reports

## User Roles

1. **Job Seeker** - Individuals looking for employment
2. **Employer/Recruiter** - Organizations looking for talent
3. **Administrator** - Platform managers

## Security Considerations

- All passwords are hashed using bcrypt
- JWT tokens for authentication
- Role-based access control
- Input validation on all endpoints
- SQL injection prevention
- XSS protection
- CSRF protection
- Rate limiting on sensitive endpoints
- Secure file upload validation
- HTTPS enforcement (production)

## Development Phases

1. ✅ Project Planning and Requirements
2. ✅ System Analysis and Design
3. ✅ Database Design
4. ⏳ UI/UX Design
5. ⏳ Frontend Development
6. ⏳ Backend Development
7. ⏳ Database Integration
8. ⏳ Authentication Implementation
9. ⏳ Intelligent Matching Algorithm
10. ⏳ Testing and QA
11. ⏳ Deployment
12. ⏳ Documentation

## Contributing

This is an academic/personal project by Debela Kebede.

## License

MIT License - See LICENSE file for details

## Contact

**Developer:** Debela Kebede

---

**Connecting Talent, Empowering Careers.**
