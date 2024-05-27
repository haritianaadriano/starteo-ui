import './assets/style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import Login from './components/utils/auth/Login';
import { ProjectListPage } from './pages/projects/ProjectListPage';
import { HomePage } from './pages/home/HomePage';
import { ProfilPage } from './pages/users/ProfilPage';
import CreateProject from './components/utils/project/CreateProject';
import { OwnProjectListPage } from './pages/projects/OwnProjectListPage';
import SignupStepper from './components/utils/auth/Signup';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const ROUTER = createBrowserRouter([
  {
    path: '/signin',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignupStepper />,
  },
  {
    path: '/projects',
    element: <ProjectListPage />,
  },
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/profil',
    element: <ProfilPage />,
  },
  {
    path: '/users/:userid/write/projects',
    element: <CreateProject />,
  },
  {
    path: '/users/:userid/projects',
    element: <OwnProjectListPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TooltipProvider>
        <RouterProvider router={ROUTER} />
      </TooltipProvider>
    </LocalizationProvider>
  </React.StrictMode>,
);
