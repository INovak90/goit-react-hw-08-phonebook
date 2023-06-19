import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/selectors';
import { useSelector } from 'react-redux';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
