import OwnProjectList from '@/components/utils/project/OwnProjectList';
import { Navigate } from 'react-router-dom';

export const OwnProjectListPage = () => {
  return sessionStorage.getItem('me') ? (
    <OwnProjectList />
  ) : (
    <Navigate to="/signin" />
  );
};
