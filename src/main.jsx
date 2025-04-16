import React from 'react';
import './index.css'
import App from './App.jsx'
import About from './About.jsx';
import { BooksPage } from './BooksPage.jsx';
import { MeetingsPage } from './MeetingsPage.jsx';
import { UsersPage } from './UsersPage.jsx';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <BooksPage />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/meetings",
        element: <MeetingsPage />
      },
      {
        path: "/users",
        element: <UsersPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
