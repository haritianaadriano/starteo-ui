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

const ROUTER = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
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
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TooltipProvider>
      <RouterProvider router={ROUTER} />
    </TooltipProvider>
  </React.StrictMode>,
);
