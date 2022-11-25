import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import Signup from '../pages/Signup/Signup';
import Category from '../pages/Category/Category';
import Login from '../pages/Login/Login';
import AddProduct from '../pages/AddProduct/AddProduct';
import NotFound from '../pages/NotFound/NotFound';
import Blog from '../pages/Blog/Blog';
import MyProducts from '../pages/MyProducts/MyProducts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/category/:type',
        element: <Category />,
      },
      {
        path: '/add-product',
        element: <AddProduct />,
      },
      {
        path: '/my-products',
        element: <MyProducts />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
