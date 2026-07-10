# 📚 Quiz Web App

A full-stack web application for managing and attempting online quizzes with multiple categories, user authentication, and progress tracking.

---

## 🎯 Overview

**Quiz Web App** is a comprehensive quiz platform that allows users to:
- Create and manage quiz questions across multiple categories
- Take quizzes and receive instant feedback with scores
- Track their quiz history and performance
- Manage their user profile
- Reset passwords securely
- Experience a dark mode interface

This is a modern full-stack application built with **React** on the frontend and **Node.js/Express** on the backend, using **MongoDB** for data persistence.

---

## ✨ Features

### User Management
- ✅ User registration and login with JWT authentication
- ✅ Secure password reset via email verification
- ✅ User profile management
- ✅ Change password functionality
- ✅ Cookie-based session management

### Quiz Features
- ✅ Multiple quiz categories:
  - Maths
  - English
  - Current Affairs
  - History
  - Reasoning
  - NEET (Medical Entrance Exam)
- ✅ Add questions in bulk
- ✅ View all questions by category
- ✅ Attempt quizzes with real-time feedback
- ✅ Time-based quiz timer
- ✅ Score calculation and display

### User Features
- ✅ Quiz history tracking
- ✅ User performance dashboard
- ✅ Visit tracking
- ✅ Attempt quiz again functionality
- ✅ Dark mode theme
- ✅ Responsive design with Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19.2.4
- **Build Tool**: Vite 8.0.0
- **Styling**: Tailwind CSS 4.2.2
- **Routing**: React Router DOM 7.14.2
- **HTTP Client**: Axios 1.15.0
- **UI Components**: React Spinners for loading states
- **Analytics**: React GA4 for Google Analytics
- **Backend Service**: Appwrite 25.0.0

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js 5.2.1
- **Database**: MongoDB with Mongoose 9.4.1
- **Authentication**: JWT (jsonwebtoken 9.0.3)
- **Password Security**: bcryptjs 3.0.3
- **Email Service**: Nodemailer 9.0.3
- **File Upload**: Multer 2.1.1
- **CORS**: Express CORS 2.8.6
- **Environment**: dotenv 17.4.1
- **HTTP Client**: Axios 1.14.0
- **Dev Tool**: Nodemon for auto-restart

---

## 📁 Project Structure

```
QUIZ WEB APP/
│
├── Backend/                          # Node.js/Express Backend
│   ├── src/
│   │   ├── app.js                   # Express app configuration
│   │   ├── index.js                 # Server entry point
│   │   ├── app.route.js             # Main route configuration
│   │   ├── constants.js             # Application constants
│   │   │
│   │   ├── controllers/             # Business logic
│   │   │   ├── user.controller.js
│   │   │   ├── addquestion.controllers.js
│   │   │   ├── CurrentAffairs.controllers.js
│   │   │   ├── englishQueston.controller.js
│   │   │   ├── forgetPass.controller.js
│   │   │   ├── HistoryQuestion.controllers.js
│   │   │   ├── Maths.controllers.js
│   │   │   ├── NeetQuestionadd.js
│   │   │   ├── questionsend.controller.js
│   │   │   ├── userhistory.controllers.js
│   │   │   ├── userscore.controllers.js
│   │   │   └── Visit.controllers.js
│   │   │
│   │   ├── models/                  # MongoDB schemas
│   │   │   ├── User.model.js
│   │   │   ├── question.models.js
│   │   │   ├── user_score.models.js
│   │   │   ├── Current_affairs.models.js
│   │   │   ├── englishQuetion.models.js
│   │   │   ├── maths.model.js
│   │   │   ├── Reasoning.models.js
│   │   │   └── nettQuestion.models.js
│   │   │
│   │   ├── routes/                  # API routes
│   │   │   ├── user.router.js
│   │   │   ├── forgetpass.js
│   │   │   └── util.router.js
│   │   │
│   │   ├── middlewares/             # Custom middleware
│   │   │   ├── Auth.middleware.js
│   │   │   └── multer.js
│   │   │
│   │   ├── db/
│   │   │   └── DataBase.js          # MongoDB connection
│   │   │
│   │   └── utils/                   # Helper utilities
│   │       ├── config.js
│   │       ├── Mailer.transporter.js
│   │       └── seder.js
│   │
│   ├── package.json
│   ├── public/
│   └── README.md
│
├── Frontend/                         # React/Vite Frontend
│   ├── src/
│   │   ├── App.jsx                  # Main App component
│   │   ├── Layout.jsx               # Layout wrapper
│   │   ├── Routes.jsx               # Route definitions
│   │   ├── main.jsx                 # React entry point
│   │   │
│   │   ├── API/
│   │   │   ├── Api.jsx              # API configuration
│   │   │   └── Client.js            # API client setup
│   │   │
│   │   ├── Components/              # Reusable components
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   ├── Hero/
│   │   │   ├── History/
│   │   │   └── QuestionByCAtegory/
│   │   │
│   │   ├── Features/                # Feature components
│   │   │   ├── Darkmode.jsx
│   │   │   ├── DisplayQuestion.jsx
│   │   │   ├── Q_add.jsx
│   │   │   ├── Q_attempt.jsx
│   │   │   ├── Questionaddinbulk.jsx
│   │   │   ├── Quizes/             # Quiz utilities
│   │   │   └── User/               # User-related features
│   │   │
│   │   └── styles/
│   │       ├── App.css
│   │       └── index.css
│   │
│   ├── package.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   ├── vercel.json
│   ├── index.html
│   └── public/
│
└── README.md                        # This file
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **MongoDB** (local or MongoDB Atlas)
- **npm** or **yarn**

### Installation

#### 1. Clone the Repository
```bash
git clone <repository-url>
cd "QUIZ WEB APP"
```

#### 2. Backend Setup

```bash
cd Backend

# Install dependencies
npm install

# Create .env file in Backend folder
cat > .env << EOF
MONGODB_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
NODE_ENV=development
EOF

# Start the server
npm start
```

The backend will run on `http://localhost:5000`

#### 3. Frontend Setup

```bash
cd Frontend

# Install dependencies
npm install

# Create .env file in Frontend folder (if needed)
cat > .env << EOF
VITE_API_BASE_URL=http://localhost:5000
EOF

# Start the development server
npm run dev
```

The frontend will run on `http://localhost:5173`

---

## 🔧 Environment Variables

### Backend (.env)
```env
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname

# Server
PORT=5000
NODE_ENV=development

# JWT
JWT_SECRET=your_super_secret_jwt_key

# Email (for password reset)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# CORS
FRONTEND_URL=http://localhost:5173
```

### Frontend (.env)
```env
VITE_API_BASE_URL=http://localhost:5000
```

---

## 📡 API Endpoints

### User Management
- `POST /api/user/register` - Register a new user
- `POST /api/user/login` - User login
- `POST /api/user/logout` - User logout
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile
- `POST /api/user/change-password` - Change password
- `POST /api/forgetpass/reset` - Reset forgotten password

### Questions
- `GET /api/questions` - Get all questions
- `GET /api/questions/:category` - Get questions by category
- `POST /api/questions` - Add new question (Admin)
- `POST /api/questions/bulk` - Add questions in bulk
- `DELETE /api/questions/:id` - Delete question

### Quiz Attempts
- `POST /api/quiz/attempt` - Submit quiz attempt
- `GET /api/quiz/history` - Get user quiz history
- `GET /api/quiz/score` - Get user scores

### Categories
- `/api/maths` - Maths questions
- `/api/english` - English questions
- `/api/current-affairs` - Current Affairs questions
- `/api/history` - History questions
- `/api/reasoning` - Reasoning questions
- `/api/neet` - NEET questions

---

## 🎮 How It Works

### User Flow

1. **Registration/Login**: Users create an account and authenticate via JWT
2. **Browse Categories**: Users select a quiz category from available options
3. **Attempt Quiz**: Users answer questions with a timer
4. **Submit & Score**: System calculates score and displays results
5. **Track Progress**: Users can view history and attempt quizzes again
6. **Manage Profile**: Users can update profile, change password, or reset password

### Admin Flow

1. **Add Questions**: Admins can add single or bulk questions
2. **Manage Categories**: Organize questions by category
3. **Monitor Usage**: Track user visits and quiz attempts

---

## 🛡️ Security Features

- ✅ **JWT Authentication**: Secure token-based authentication
- ✅ **Password Hashing**: bcryptjs for secure password storage
- ✅ **Email Verification**: Nodemailer for password reset emails
- ✅ **CORS Protection**: Configured CORS for frontend-backend communication
- ✅ **Cookie Management**: Secure cookie handling with cookie-parser
- ✅ **File Upload Protection**: Multer for secure file handling

---

## 📦 Available Scripts

### Backend
```bash
npm start       # Start server with nodemon (auto-reload)
npm run dev     # Run with node
```

### Frontend
```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run lint    # Run ESLint
npm run preview # Preview production build
```

---

## 🎨 Features in Detail

### Dark Mode
- Toggle dark mode via the UI
- Persisted user preference
- Tailwind CSS theme support

### Quiz Timer
- Real-time countdown timer
- Auto-submit on timeout
- Visual warning indicators

### Question Management
- Add single questions
- Bulk upload via file
- Edit and delete questions
- Category-based organization

### User History
- Track all quiz attempts
- View scores and performance
- Retake quizzes
- Performance analytics

---

## 🐛 Troubleshooting

### MongoDB Connection Error
- Verify MongoDB URI in .env
- Check if MongoDB is running
- Ensure IP whitelist in MongoDB Atlas

### Email Not Sending
- Enable "Less secure app access" for Gmail
- Use app-specific passwords for Gmail
- Check email credentials in .env

### CORS Error
- Verify FRONTEND_URL in backend .env
- Check frontend URL matches request origin
- Ensure credentials: include in frontend requests

### Port Already in Use
```bash
# Find and kill process on port 5000
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

---

## 📝 Database Schema

### User Model
- Email, Password (hashed), Name
- Profile information
- Created/Updated timestamps

### Question Model
- Question text, Options, Correct answer
- Category, Difficulty level
- Tags, Created date

### User Score Model
- User ID, Quiz category
- Score, Total questions
- Time taken, Attempt date

### Visit Model
- User ID, Visit timestamp
- Page/Quiz visited

---

## 🚀 Deployment

### Backend (Vercel/Heroku)
1. Push to Git repository
2. Connect to Vercel/Heroku
3. Set environment variables
4. Deploy

### Frontend (Vercel)
1. Push to Git repository
2. Connect to Vercel
3. Set `VITE_API_BASE_URL` to production backend
4. Deploy

---

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 👤 Author

**Piyush Kumar**

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📞 Support

For issues and questions, please open an issue in the repository or contact the development team.

---

## 🔄 Version

**Current Version**: 1.0.0

---

## 📋 Checklist for First Run

- [ ] Install Node.js and MongoDB
- [ ] Clone repository
- [ ] Set up backend environment variables
- [ ] Install backend dependencies
- [ ] Start MongoDB
- [ ] Run backend server
- [ ] Set up frontend environment variables
- [ ] Install frontend dependencies
- [ ] Run frontend development server
- [ ] Access app at http://localhost:5173
- [ ] Register and test quiz functionality

---

**Last Updated**: 2026-07-10

Enjoy building and using the Quiz Web App! 🎉
