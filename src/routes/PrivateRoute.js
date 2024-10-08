import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function useAuth() {
  // This is a placeholder for your authentication logic.
  // You should replace it with your actual authentication logic.
  const user = { loggedIn: true }; // Example user object
  return user && user.loggedIn;
}

export default function PrivateRoute({ children }) {
  const isAuthenticated = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};
