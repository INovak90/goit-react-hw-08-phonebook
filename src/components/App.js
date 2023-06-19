import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refresh } from 'redux/authorization/authOperations';
import { PrivateRoute } from './privateRoute';
import { PublicRoute } from './publiceRoute';
import { useSelector } from 'react-redux';
import { selectIsRefreshing } from '../redux/selectors';

// import Home from 'pages/home';
// import Register from 'pages/auth/registration';
// import Contacts from 'pages/Contacts/Contacts';
import 'react-toastify/dist/ReactToastify.css';

const Login = lazy(() => import('../pages/auth/login'));
const Home = lazy(() => import('../pages/home'));
const Register = lazy(() => import('../pages/auth/registration'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/contacts"
              element={<PrivateRoute redirectTo="/" component={<Contacts />} />}
            />
            <Route
              path="/register"
              element={
                <PublicRoute redirectTo="/contacts" component={<Register />} />
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
        <ToastContainer />
      </>
    )
  );
};
