# MERN Classroom - Full Stack Application

A monorepo-style MERN application with separated frontend and backend directories for better project organization.

## 📁 Project Structure

```
mern-classroom/
├── frontend/                          # React Frontend Application
│   ├── client/                        # React components and pages
│   │   ├── assets/                    # Images and static files
│   │   ├── auth/                      # Authentication components
│   │   ├── core/                      # Core components (Home, Menu)
│   │   ├── course/                    # Course management components
│   │   ├── enrollment/                # Enrollment components
│   │   ├── user/                      # User management components
│   │   ├── App.js                     # Main React component
│   │   ├── MainRouter.js              # Route configuration
│   │   ├── main.js                    # React DOM mount point
│   │   └── theme.js                   # Material-UI theme
│   ├── package.json                   # Frontend dependencies
│   ├── package-lock.json
│   ├── webpack.config.client.js       # Webpack dev config
│   └── webpack.config.client.production.js  # Webpack prod config
│
├── backend/                           # Node.js Express Backend
│   ├── server/                        # Server logic
│   │   ├── controllers/               # Route controllers
│   │   ├── models/                    # Mongoose models
│   │   ├── routes/                    # API routes
│   │   ├── helpers/                   # Helper functions
│   │   ├── server.js                  # Express server setup
│   │   ├── express.js                 # Express middleware
│   │   └── devBundle.js               # Development bundle
│   ├── config/                        # Configuration files
│   │   └── config.js                  # Database and app config
│   ├── package.json                   # Backend dependencies
│   ├── package-lock.json
│   ├── webpack.config.server.js       # Server webpack config
│   ├── nodemon.json                   # Nodemon dev server config
│   ├── template.js                    # HTML template for SSR
│   └── .env                           # Environment variables
```

## 🚀 Getting Started

### Prerequisites
- Node.js >= 24.13.0
- npm >= 11.6.2
- MongoDB (local or MongoDB Atlas)

### Installation

**Backend Setup:**
```bash
cd backend
npm install
```

**Frontend Setup:**
```bash
cd frontend
npm install
```

### Environment Configuration

Create `.env` file in the `backend` folder:
```
NODE_ENV=development
PORT=3000
JWT_SECRET=your_jwt_secret_key
MONGODB_URI=your_mongodb_connection_string
```

### Running the Application

**Development Mode:**

From root directory, run both in parallel:

Backend (from `backend/` directory):
```bash
npm run development
```

Frontend (from `frontend/` directory):
```bash
npm run development
```

**Production Build:**

Backend (from `backend/`):
```bash
npm run build
npm start
```

Frontend will be bundled and served by the backend.

## 🏗️ Architecture

### Frontend
- **Framework**: React 16.13.1
- **UI Library**: Material-UI 4.9.8
- **Routing**: React Router 5.1.2
- **Build Tool**: Webpack 5.105.2
- **Task Runner**: Nodemon (with Babel transpilation)

### Backend
- **Framework**: Express 4.22.1
- **Database**: MongoDB with Mongoose 9.2.1
- **Authentication**: JWT (express-jwt 8.5.1)
- **Security**: CORS, Cookie Parser, Body Parser
- **Build Tool**: Webpack 5.105.2

## 🔐 Features

### Authentication & Authorization
- User signup and signin with JWT authentication
- Role-based access control (Student/Instructor)
- Protected routes using PrivateRoute component
- Session-based authentication with sessionStorage

### Course Management
- Instructors can create and edit courses
- Add lessons to courses
- Publish/unpublish courses
- Course listing and search

### Enrollments & Learning
- Students can enroll in published courses
- View enrolled courses
- Track lesson completion
- Progress tracking with completion status

### User Management
- User profiles
- Edit profile information
- User listing (admin)
- Delete account functionality

## 🛠️ Key Scripts

**Backend:**
- `npm run development` - Start dev server with hot reload
- `npm run build` - Build production bundle
- `npm start` - Start production server

**Frontend:**
- `npm run development` - Start dev server with webpack dev middleware
- `npm run build` - Build production bundle (handled by root-level build)

## 📦 Dependencies

### Backend Key Packages
- express: Web framework
- mongoose: MongoDB ORM
- express-jwt: JWT authentication
- cors: Cross-origin requests
- compression: Gzip compression
- dotenv: Environment variables

### Frontend Key Packages
- react: UI library
- react-router-dom: Client-side routing
- @material-ui/core: UI components
- @material-ui/icons: Icon library
- axios: HTTP client (configured in api files)

## 🔗 API Endpoints

### Authentication
- `POST /auth/signup` - Register new user
- `POST /auth/signin` - Login user
- `GET /auth/signout` - Logout user

### Courses
- `GET /api/courses` - List all public courses
- `POST /api/courses` - Create course (instructor)
- `GET /api/courses/:id` - Get course details
- `PUT /api/courses/:id` - Update course (instructor)
- `DELETE /api/courses/:id` - Delete course (instructor)

### Enrollments
- `POST /api/enrollments` - Enroll in course
- `GET /api/enrollments` - Get user enrollments
- `GET /api/enrollments/:id` - Get enrollment details
- `PUT /api/enrollments/:id` - Update enrollment progress

### Users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile
- `DELETE /api/users/:id` - Delete user account

## 📝 License

MIT

## 👤 Author

ShyamParthiv

---

**Created**: May 10, 2026
**Stack**: MongoDB, Express, React, Node.js (MERN)
