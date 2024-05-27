import ActualProjectList from '@/components/utils/project/ActualProjectList';
import { Navigate } from 'react-router-dom';

export const ProjectListPage = () => {
  //TODO: create a function who will authenticate each time before enter component
  return sessionStorage.getItem('me') ? (
    <ActualProjectList />
  ) : (
    <Navigate to="/login" />
  );
};
