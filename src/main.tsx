import './assets/style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/auth/LoginPage';
import './assets/style.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProjectList from './pages/project/ProjectListPage';
import { TooltipProvider } from '@radix-ui/react-tooltip';

const ROUTER = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/projects',
    element: <ProjectList />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TooltipProvider>
      <RouterProvider router={ROUTER} />
    </TooltipProvider>
  </React.StrictMode>,
);
