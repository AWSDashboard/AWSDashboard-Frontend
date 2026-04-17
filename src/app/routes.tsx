import { AuthLayout } from './components/AuthLayout';
import { MainLayout } from './components/MainLayout';
import { Home } from './pages/Home';
import LogIn from './pages/LogIn';
import { NotFound } from './pages/NotFound';
import { Profile } from './pages/Profile';
import { Instances } from './pages/Projects';
import { Settings } from './pages/Settings';
import SignUp from './pages/SignUp';
import { ViewsEditor } from './pages/ViewsEditor';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'instances', element: <Instances /> },
      { path: 'settings', element: <Settings /> },
      { path: 'profile', element: <Profile /> },
      { path: 'views-editor', element: <ViewsEditor /> },
      {
        path: 'instance/setting/:id',
        element: <Settings />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <LogIn /> },
      { path: 'signup', element: <SignUp /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
