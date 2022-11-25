import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useQuery } from '@tanstack/react-query';
import styles from './MyProducts.module.css';
import axios from 'axios';
import { format } from 'date-fns';
import ProductRow from './ProductRow/ProductRow';

const MyProducts = () => {
  const { user } = useAuth();

  const { data: products = [], refetch } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/my-products/${user?.email}`
        );
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <section className="container">
      <h2>My Products</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Type</th>
            <th>Price</th>
            <th>Added</th>
            <th>Advertisement</th>
            <th>Availability</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow key={product._id} product={product} refetch={refetch} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default MyProducts;
