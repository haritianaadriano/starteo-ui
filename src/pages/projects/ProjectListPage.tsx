import ProjectList from '@/components/utils/project/ProjectList';
import { Navigate } from 'react-router-dom';

export const ProjectListPage = () => {
  return sessionStorage.getItem('me') ? (
    <ProjectList />
  ) : (
    <Navigate to="/login" />
  );
};
