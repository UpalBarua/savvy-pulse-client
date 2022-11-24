import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import styles from './Categories.module.css';

// const CATEGORIES = [
//   {
//     id: 1,
//     type: 'Acoustic',
//     img: 'https://www.taylorguitars.com/sites/default/files/styles/feature_half/public/images/2022-10/Taylor-Academy-10-Academy-12N-Academy-12e.jpg?h=80557b9b&itok=Q6mTMuVx',
//   },
//   {
//     id: 2,
//     type: 'Electric',
//     img: 'https://images.saymedia-content.com/.image/t_share/MTkyNTgxMDA4ODY2OTQ0NTQ4/best-electric-guitar-for-intermediate-players.jpg',
//   },
//   {
//     id: 3,
//     type: 'Bass',
//     img: 'https://www.masteringbox.com/wp-content/uploads/2018/03/pexels-photo-65718-1170x550.jpeg',
//   },
// ];

const Categories = () => {
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     const response = await axios.get('http://localhost:3000/categories');
  //     setCategories(response.data);
  //   };

  //   fetchCategories();
  // }, []);

  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await axios.get('http://localhost:3000/categories');
      return response.data;
    },
  });

  return (
    <section className="container">
      <div className={styles.flex}>
        {categories.map((category) => (
          <Link
            to={`/category/${category.type}`}
            key={category._id}
            className={styles.category}
            style={{ backgroundImage: `url(${category.img})` }}>
            <p className={styles.title}>{category.type}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
