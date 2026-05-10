# Frontend - MERN Classroom

React-based frontend application for the MERN Classroom platform.

## 📁 Structure

```
frontend/
├── client/                    # React application source
│   ├── assets/               # Static assets (images)
│   ├── auth/                 # Authentication pages & logic
│   ├── core/                 # Core components (Home, Navigation)
│   ├── course/               # Course management components
│   ├── enrollment/           # Student enrollment views
│   ├── user/                 # User profile components
│   ├── App.js               # Root React component
│   ├── MainRouter.js        # Route definitions
│   ├── main.js              # Entry point
│   └── theme.js             # Material-UI theme configuration
├── package.json             # Dependencies
├── webpack.config.client.js         # Development webpack config
└── webpack.config.client.production.js  # Production webpack config
```

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Development
```bash
npm run development
```
Server runs at `http://localhost:3000` with hot module replacement.

### Build for Production
```bash
npm run build
```
Creates optimized production bundle in `/dist` folder.

## 📚 Key Components

### Auth Components
- **Signin.js** - Login page with JWT token storage
- **Signup.js** - User registration
- **PrivateRoute.js** - Route protection based on authentication
- **api-auth.js** - Authentication API calls

### Core Components
- **Home.js** - Landing page showing courses and enrollments
- **Menu.js** - Navigation menu with auth links

### Course Components
- **Courses.js** - List all published courses
- **Course.js** - Course detail view
- **NewCourse.js** - Create new course (instructor only)
- **EditCourse.js** - Edit course details (instructor only)
- **DeleteCourse.js** - Delete course (instructor only)
- **MyCourses.js** - Instructor's courses list
- **NewLesson.js** - Add lessons to course
- **api-course.js** - Course API calls

### Enrollment Components
- **Enrollment.js** - Student learning interface
- **Enrollments.js** - List student's enrollments
- **Enroll.js** - Enroll in course button/modal
- **api-enrollment.js** - Enrollment API calls

### User Components
- **Profile.js** - User profile display
- **EditProfile.js** - Edit user information
- **Users.js** - Admin user list
- **DeleteUser.js** - Delete user account
- **api-user.js** - User API calls

## 🎨 Styling

Uses **Material-UI v4** for consistent, responsive design:
- Custom theme defined in `theme.js`
- Components use Material-UI `withStyles` HOC
- Responsive grid layouts
- Icons from `@material-ui/icons`

## 🔐 Authentication

- JWT stored in `sessionStorage`
- Auth helper functions in `auth-helper.js`:
  - `authenticate()` - Save JWT after login
  - `isAuthenticated()` - Check if user logged in
  - `getCredentials()` - Retrieve stored credentials
  - `clearCredentials()` - Clear auth on logout
- PrivateRoute component protects authenticated routes

## 🌐 API Integration

All API calls use configured endpoints pointing to backend at `http://localhost:3000/api/`

### Example API Call Pattern
```javascript
import { read } from '../path/to/api-file'

read(params).then(data => {
  // Handle response
}).catch(err => {
  // Handle error
})
```

## 📦 Dependencies

- **react** - UI library
- **react-router-dom** - Client-side routing
- **@material-ui/core** - UI components
- **@material-ui/icons** - Icon set
- **express** - Served by backend

## 🛠️ Build Configuration

### Development (webpack.config.client.js)
- Source maps for debugging
- Webpack dev middleware integration
- Hot module replacement
- CSS/SASS loader support

### Production (webpack.config.client.production.js)
- Minification
- Code splitting
- Asset optimization
- Environment variable substitution

## 📝 Notes

- All API requests made from `api-*.js` files
- Components use React Router for navigation
- Authentication state managed via sessionStorage
- PrivateRoute component handles authorization checks
