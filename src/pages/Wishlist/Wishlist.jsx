import React from 'react';
import CategoryCard from '../Category/CategoryCard/CategoryCard';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Wishlist = () => {
  const { data: wishlistData = [], refetch } = useQuery({
    queryKey: ['wishlistData'],
    queryFn: async () => {
      const response = await axios.get(
        'https://savvy-pulse-upalbarua.vercel.app/my-products/wishlist'
      );
      return response.data;
    },
  });

  return (
    <section className="container flow margin-block">
      <h2 className="title-primary">wishlist</h2>
      {wishlistData.map((data) => (
        <CategoryCard key={data._id} product={data} refetch={refetch} />
      ))}
    </section>
  );
};

export default Wishlist;
