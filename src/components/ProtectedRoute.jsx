import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function ProtectedRoute() {
  const { auth } = useContext(AuthContext);
  const location = useLocation();

  if (auth) {
    return <Outlet />;
  }

  return <Navigate to="/login" replace state={{ from: location }} />;

}
export default ProtectedRoute;