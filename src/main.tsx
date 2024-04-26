import './assets/style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import LoginPage from './components/utils/auth/LoginPage';
import ProjectListPage from './components/utils/project/ProjectListPage';

const ROUTER = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/projects',
    element: <ProjectListPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TooltipProvider>
      <RouterProvider router={ROUTER} />
    </TooltipProvider>
  </React.StrictMode>,
);
