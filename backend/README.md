# Backend - MERN Classroom

Express.js backend API server for the MERN Classroom platform with MongoDB database integration.

## 📁 Structure

```
backend/
├── server/                  # Express server application
│   ├── controllers/         # Route handler functions
│   ├── models/             # Mongoose database models
│   ├── routes/             # API route definitions
│   ├── helpers/            # Utility functions
│   ├── server.js           # Server startup & config
│   ├── express.js          # Express middleware setup
│   └── devBundle.js        # Development webpack bundler
├── config/                 # Configuration files
│   └── config.js           # Environment & database config
├── package.json            # Dependencies
├── webpack.config.server.js # Server-side webpack config
├── nodemon.json            # Nodemon development config
├── template.js             # SSR HTML template
└── .env                    # Environment variables
```

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Environment Setup

Create `.env` file in backend directory:
```
NODE_ENV=development
PORT=3000
JWT_SECRET=your_secret_key_here
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
```

### Development
```bash
npm run development
```
Server runs at `http://localhost:3000` with auto-reload on file changes.

### Production Build & Run
```bash
npm run build
npm start
```

## 🗄️ Database Models

### User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  created: Date,
  updated: Date
}
```

### Course Model
```javascript
{
  name: String,
  description: String,
  image: String,
  category: String,
  lessons: [LessonSchema],
  published: Boolean,
  created: Date,
  updated: Date,
  instructor: ObjectId (ref: User)
}
```

### Lesson Schema
```javascript
{
  title: String,
  content: String,
  resource_url: String
}
```

### Enrollment Model
```javascript
{
  course: ObjectId (ref: Course),
  student: ObjectId (ref: User),
  lessonStatus: [{
    lesson: ObjectId,
    complete: Boolean
  }],
  enrolled: Date,
  updated: Date
}
```

## 🔌 API Endpoints

### Authentication Routes (`/auth`)
- `POST /auth/signup` - User registration
- `POST /auth/signin` - User login
- `GET /auth/signout` - User logout

### Course Routes (`/api/courses`)
- `GET /api/courses` - List all public courses
- `GET /api/courses/published` - Get published courses
- `POST /api/courses` - Create new course (auth required)
- `GET /api/courses/:courseId` - Get course details
- `PUT /api/courses/:courseId` - Update course (instructor)
- `DELETE /api/courses/:courseId` - Delete course (instructor)

### Enrollment Routes (`/api/enrollments`)
- `POST /api/enrollments` - Enroll in course
- `GET /api/enrollments` - Get user's enrollments
- `GET /api/enrollments/:enrollmentId` - Get enrollment details
- `PUT /api/enrollments/:enrollmentId` - Update enrollment progress
- `DELETE /api/enrollments/:enrollmentId` - Remove enrollment

### User Routes (`/api/users`)
- `GET /api/users` - List all users (admin)
- `GET /api/users/:userId` - Get user profile
- `PUT /api/users/:userId` - Update user profile
- `DELETE /api/users/:userId` - Delete user account

## 🔐 Authentication & Authorization

### JWT Implementation
- Tokens generated on signin and stored in sessionStorage on client
- Tokens validated using `express-jwt` middleware
- Protected routes require valid JWT in Authorization header

### Middleware Stack
1. **CORS** - Enable cross-origin requests from frontend
2. **Body Parser** - Parse JSON/form request bodies
3. **Cookie Parser** - Handle session cookies
4. **Compression** - Gzip response compression
5. **Express JWT** - Token validation on protected routes

## 📁 Controllers

Each controller handles a specific domain:

### auth.controller.js
- `signup()` - Register new user with hashed password
- `signin()` - Authenticate user and return JWT
- `signout()` - Clear session

### user.controller.js
- `read()` - Get user profile
- `update()` - Modify user information
- `delete()` - Remove user account
- `list()` - Get all users

### course.controller.js
- `create()` - Add new course by instructor
- `read()` - Get course details
- `update()` - Modify course
- `delete()` - Remove course
- `list()` - Get published courses
- `isCourseOwner()` - Check instructor authorization

### enrollment.controller.js
- `create()` - Enroll student in course
- `read()` - Get enrollment details
- `update()` - Update lesson completion status
- `list()` - Get user's enrollments
- `remove()` - Unenroll from course

## 📦 Key Dependencies

- **express** - Web framework
- **mongoose** - MongoDB ORM
- **express-jwt** - JWT authentication middleware
- **jsonwebtoken** - JWT token generation
- **bcryptjs** - Password hashing
- **cors** - CORS middleware
- **compression** - Gzip compression
- **dotenv** - Environment variables
- **nodemon** - Development auto-reload

## 🛠️ Helpers

### dbErrorHandler.js
Utility function to handle MongoDB validation and operation errors:
- Field-specific error messages
- Duplicate key error handling
- Validation error formatting

## ⚙️ Configuration

### config.js
- `mongoUri` - MongoDB connection string
- `port` - Server port (default: 3000)
- `jwtSecret` - JWT signing secret
- `NODE_ENV` - Environment mode

## 🌐 Server Setup (express.js)

Initializes Express app with:
- Middleware stack configuration
- Route mounting
- Error handling
- Static file serving

## 🔄 Development Workflow

Using **nodemon** + **webpack**:
1. Nodemon watches for file changes
2. Webpack recompiles on changes
3. Server auto-restarts
4. Browser hot-reloads via webpack dev middleware

**nodemon.json** config:
- Watches `server/` and `config/` directories
- Ignores `node_modules/` and dist files
- Runs webpack on restart

## 🐛 Error Handling

### Error Response Format
```json
{
  "message": "Error description",
  "field": "fieldName" (optional)
}
```

### Common Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not found
- `500` - Server error

## 📝 Security Notes

- Passwords hashed with bcryptjs before storage
- JWT tokens expire after configured duration
- CORS whitelist configured for frontend domain
- Environment variables for sensitive config
- Protected routes verified with JWT middleware

## 🚀 Deployment Considerations

- Set `NODE_ENV=production` in environment
- Configure MongoDB Atlas for cloud database
- Use environment variables for all secrets
- Enable CORS for production frontend URL
- Build frontend and serve from backend

---

**Stack**: Node.js, Express, MongoDB, Mongoose
**Created**: May 10, 2026
