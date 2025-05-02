import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * @param {ReactNode} children – the component to render
 * @param {string[]} roles – allowed roles: e.g. ['admin'], ['employee'], or ['admin','employee']
 */
const ProtectedRoute = ({ children, roles }) => {
  const { user } = useAuth();

  if (!user) {
    // Not logged in → redirect to login
    return <Navigate to="/login" replace />;
  }

  if (!roles.includes(user.role)) {
    // Logged in but wrong role → redirect to unauthorized page or home
    return <Navigate to="/unauthorized" replace />;
  }

  // Authorized
  return children;
};

export default ProtectedRoute;
