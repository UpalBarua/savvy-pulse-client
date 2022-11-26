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
import AllBuyers from '../pages/AllBuyers/AllBuyers';
import AllSellers from '../pages/AllSellers/AllSellers';
import Wishlist from '../pages/Wishlist/Wishlist';
import ProtectedRoute from './ProtectedRoute';
import SellerRoute from './SellerRoute';
import BuyerRoute from './BuyerRoute';
import AdminRoute from './AdminRoute';

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
        path: '/blog',
        element: <Blog />,
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
        element: (
          <ProtectedRoute>
            <Category />
          </ProtectedRoute>
        ),
      },
      {
        path: '/my-orders',
        element: (
          <ProtectedRoute>
            <BuyerRoute>
              <h1>My Orders</h1>
            </BuyerRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: '/wishlist',
        element: (
          <ProtectedRoute>
            <BuyerRoute>
              <Wishlist />
            </BuyerRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: '/add-product',
        element: (
          <ProtectedRoute>
            <SellerRoute>
              <AddProduct />
            </SellerRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: '/my-products',
        element: (
          <ProtectedRoute>
            <SellerRoute>
              <MyProducts />
            </SellerRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: '/all-buyers',
        element: (
          <ProtectedRoute>
            <AdminRoute>
              <AllBuyers />
            </AdminRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: '/all-sellers',
        element: (
          <ProtectedRoute>
            <AdminRoute>
              <AllSellers />
            </AdminRoute>
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
