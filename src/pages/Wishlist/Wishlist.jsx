import React from 'react';
import CategoryCard from '../Category/CategoryCard/CategoryCard';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Wishlist = () => {
  const { data: wishlistData = [], refetch } = useQuery({
    queryKey: ['wishlistData'],
    queryFn: async () => {
      const response = await axios.get(
        'http://localhost:3000/my-products/wishlist'
      );
      return response.data;
    },
  });

  return (
    <section className="container">
      <h2>wishlist</h2>
      {wishlistData.map((data) => (
        <CategoryCard key={data._id} product={data} refetch={refetch} />
      ))}
    </section>
  );
};

export default Wishlist;
