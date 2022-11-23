import React from 'react';
import Header from '../components/Header/Header';
import Categories from '../pages/Home/Categories/Categories';

const MainLayout = () => {
  return (
    <main>
      <Header />
      <Categories />
    </main>
  );
};

export default MainLayout;
