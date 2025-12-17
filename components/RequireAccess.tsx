import React from 'react';
import { Navigate } from 'react-router-dom';
import { hasAccess } from '../src/lib/access';

interface RequireAccessProps {
  children: React.ReactNode;
}

const RequireAccess: React.FC<RequireAccessProps> = ({ children }) => {
  if (!hasAccess()) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default RequireAccess;
