import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import CategoryCard from '../../Category/CategoryCard/CategoryCard';
import styles from './Advertisement.module.css';

const Advertisement = () => {
  const { data: advertisedData = [] } = useQuery({
    queryKey: ['advertisedData'],
    queryFn: async () => {
      const response = await axios.get(
        'http://localhost:3000/my-products/advertised'
      );
      return response.data;
    },
  });

  if (advertisedData.length <= 0) {
    return null;
  }

  return (
    <section className="container">
      <h2>Advertisements</h2>
      <div>
        {advertisedData.map((data) => (
          <CategoryCard key={data._id} product={data} />
        ))}
      </div>
    </section>
  );
};

export default Advertisement;
