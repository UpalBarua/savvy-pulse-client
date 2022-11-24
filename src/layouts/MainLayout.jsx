import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Categories from '../pages/Home/Categories/Categories';

const MainLayout = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default MainLayout;
