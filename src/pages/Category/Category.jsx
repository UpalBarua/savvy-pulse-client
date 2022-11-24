import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CategoryCard from './CategoryCard/CategoryCard';
import styles from './Category.module.css';
import PurchaseModal from './PurchaseModal/PurchaseModal';

const PRODUCTS = [
  {
    id: 1,
    img: 'https://guitarspace.org/wp-content/uploads/2021/03/Best-Acoustic-Guitar-768x517.png',
    name: 'Gibson Hummingbird 1',
    type: 'Acoustic',
    location: 'Chittagong',
    resalePrice: 2000,
    originalPrice: 3999,
    used: 1,
    postedOn: new Date(),
    seller: 'John Doe',
    verified: true,
  },
  {
    id: 2,
    img: 'https://guitarspace.org/wp-content/uploads/2021/03/Best-Acoustic-Guitar-768x517.png',
    name: 'Gibson Hummingbird 2',
    type: 'Acoustic',
    location: 'Chittagong',
    resalePrice: 2000,
    originalPrice: 3999,
    used: 1,
    postedOn: new Date(),
    seller: 'John Doe',
    verified: true,
  },
  {
    id: 3,
    img: 'https://guitarspace.org/wp-content/uploads/2021/03/Best-Acoustic-Guitar-768x517.png',
    name: 'Gibson Hummingbird 3',
    type: 'Electric',
    location: 'Chittagong',
    resalePrice: 2000,
    originalPrice: 3999,
    used: 1,
    postedOn: new Date(),
    seller: 'John Doe',
    verified: true,
  },
  {
    id: 4,
    img: 'https://guitarspace.org/wp-content/uploads/2021/03/Best-Acoustic-Guitar-768x517.png',
    name: 'Gibson Hummingbird 4',
    type: 'Electric',
    location: 'Chittagong',
    resalePrice: 2000,
    originalPrice: 3999,
    used: 1,
    postedOn: new Date(),
    seller: 'John Doe',
    verified: true,
  },
  {
    id: 5,
    img: 'https://guitarspace.org/wp-content/uploads/2021/03/Best-Acoustic-Guitar-768x517.png',
    name: 'Gibson Hummingbird 5',
    type: 'Bass',
    location: 'Chittagong',
    resalePrice: 2000,
    originalPrice: 3999,
    used: 1,
    postedOn: new Date(),
    seller: 'John Doe',
    verified: true,
  },
  {
    id: 6,
    img: 'https://guitarspace.org/wp-content/uploads/2021/03/Best-Acoustic-Guitar-768x517.png',
    name: 'Gibson Hummingbird 6',
    type: 'Bass',
    location: 'Chittagong',
    resalePrice: 2000,
    originalPrice: 3999,
    used: 1,
    postedOn: new Date(),
    seller: 'John Doe',
    verified: true,
  },
];

const Category = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="container">
      <div className={styles.grid}>
        {PRODUCTS.map((product) => (
          <CategoryCard
            key={product.id}
            product={product}
            handleModalOpen={handleModalOpen}
            setModalData={setModalData}
          />
        ))}
      </div>
      <PurchaseModal
        isModalOpen={isModalOpen}
        handleModalClose={handleModalClose}
        modalData={modalData}
      />
    </section>
  );
};

export default Category;
