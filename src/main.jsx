import React from 'react';
import { AuthProvider } from './context/AuthContext';
import './index.css'
import App from './App.jsx'
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import About from './pages/About.jsx';
import DashboardPage from './pages/DashboardPage';
import { BooksPage } from './pages/BooksPage.jsx';
import { MeetingsPage } from './pages/MeetingsPage.jsx';
import { UsersPage } from './pages/UsersPage.jsx';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // Public Routes
      { index: true, element: <About /> },
      { path: "about", element: <About /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
      // Protected Routes Area
      {
        element: <ProtectedRoute />,
        children: [
          { path: "dashboard",
            element: <DashboardPage />
          },
          { path: "books",
            element: <BooksPage /> 
          },
          { path: "meetings",
            element: <MeetingsPage />
          },
          { path: "users",
            element: <UsersPage />
          }
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);