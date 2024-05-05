import Profil from '@/components/utils/user/profil/Profil';
import { Navigate } from 'react-router-dom';

export const ProfilPage = () => {
  return sessionStorage.getItem('me') ? <Profil /> : <Navigate to="/login" />;
};
