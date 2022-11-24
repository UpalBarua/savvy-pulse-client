import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Categories.module.css';

const CATEGORIES = [
  {
    id: 1,
    type: 'Acoustic',
    img: 'https://www.taylorguitars.com/sites/default/files/styles/feature_half/public/images/2022-10/Taylor-Academy-10-Academy-12N-Academy-12e.jpg?h=80557b9b&itok=Q6mTMuVx',
  },
  {
    id: 2,
    type: 'Electric',
    img: 'https://images.saymedia-content.com/.image/t_share/MTkyNTgxMDA4ODY2OTQ0NTQ4/best-electric-guitar-for-intermediate-players.jpg',
  },
  {
    id: 3,
    type: 'Bass',
    img: 'https://www.masteringbox.com/wp-content/uploads/2018/03/pexels-photo-65718-1170x550.jpeg',
  },
];

const Categories = () => {
  return (
    <section className="container">
      <div className={styles.flex}>
        {CATEGORIES.map((category) => (
          <Link
            to={`/category/${category.type}`}
            key={category.id}
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
