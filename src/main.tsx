import './assets/style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/utils/auth/LoginPage';
import './assets/style.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProjectList from './components/utils/project/ProjectListPage';
import { TooltipProvider } from '@radix-ui/react-tooltip';

const ROUTER = createBrowserRouter([
  {
    path: '/login',
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
