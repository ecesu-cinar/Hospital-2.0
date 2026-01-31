import React, { useEffect, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('access_token');
  const toastShown = useRef(false);

  useEffect(() => {
    if (!token) {
      toast.error('İlk önce giriş yapmalısınız');
      toastShown.current = true;
    }

  }, [token]);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;