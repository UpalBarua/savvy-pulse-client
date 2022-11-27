import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import styles from './Categories.module.css';
import FailedToLoad from '../../../components/FailedToLoad/FailedToLoad';

const Categories = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await axios.get('http://localhost:3000/categories');
      return response.data;
    },
  });

  return (
    <section className={`${styles.categories} | container flow`}>
      <h2 className="title-primary">product categories</h2>
      <div className={styles.flex}>
        {categories.length ? (
          categories.map((category) => (
            <Link
              to={`/category/${category.type}`}
              key={category._id}
              className={styles.category}
              style={{ backgroundImage: `url(${category.img})` }}>
              <p className={styles.title}>#{category.type}</p>
            </Link>
          ))
        ) : (
          <FailedToLoad />
        )}
      </div>
    </section>
  );
};

export default Categories;
