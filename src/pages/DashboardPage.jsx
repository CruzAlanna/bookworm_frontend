import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { BooksPage } from './BooksPage';

function DashboardPage() {
  const { auth } = useContext(AuthContext);

  return (
    <div>
      {auth ? (
        <div>
          <BooksPage />
        </div>
      ) : (
        // This part might briefly show if auth check is slow,
        // but ProtectedRoute should handle redirection mostly.
        <p>Loading user data or user not available.</p>
      )}
      {/* Add other dashboard-specific content here later */}
    </div>
  );
}

export default DashboardPage;