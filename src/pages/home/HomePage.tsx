import { Navigate } from 'react-router-dom';

export const HomePage = () => {
  return sessionStorage.getItem('me') ? (
    <Navigate to="/projects" />
  ) : (
    <Navigate to="/signin" />
  );
};
