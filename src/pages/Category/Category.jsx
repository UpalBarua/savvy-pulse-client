import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard/CategoryCard';
import PurchaseModal from './PurchaseModal/PurchaseModal';
import axios from 'axios';
import styles from './Category.module.css';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

// const PRODUCTS = [
//   {
//     id: 1,
//     img: 'https://guitarspace.org/wp-content/uploads/2021/03/Best-Acoustic-Guitar-768x517.png',
//     name: 'Gibson Hummingbird 1',
//     type: 'Acoustic',
//     location: 'Chittagong',
//     resalePrice: 2000,
//     originalPrice: 3999,
//     used: 1,
//     postedOn: new Date(),
//     seller: 'John Doe',
//     verified: true,
//   },
//   {
//     id: 2,
//     img: 'https://guitarspace.org/wp-content/uploads/2021/03/Best-Acoustic-Guitar-768x517.png',
//     name: 'Gibson Hummingbird 2',
//     type: 'Acoustic',
//     location: 'Chittagong',
//     resalePrice: 2000,
//     originalPrice: 3999,
//     used: 1,
//     postedOn: new Date(),
//     seller: 'John Doe',
//     verified: true,
//   },
//   {
//     id: 3,
//     img: 'https://guitarspace.org/wp-content/uploads/2021/03/Best-Acoustic-Guitar-768x517.png',
//     name: 'Gibson Hummingbird 3',
//     type: 'Electric',
//     location: 'Chittagong',
//     resalePrice: 2000,
//     originalPrice: 3999,
//     used: 1,
//     postedOn: new Date(),
//     seller: 'John Doe',
//     verified: true,
//   },
//   {
//     id: 4,
//     img: 'https://guitarspace.org/wp-content/uploads/2021/03/Best-Acoustic-Guitar-768x517.png',
//     name: 'Gibson Hummingbird 4',
//     type: 'Electric',
//     location: 'Chittagong',
//     resalePrice: 2000,
//     originalPrice: 3999,
//     used: 1,
//     postedOn: new Date(),
//     seller: 'John Doe',
//     verified: true,
//   },
//   {
//     id: 5,
//     img: 'https://guitarspace.org/wp-content/uploads/2021/03/Best-Acoustic-Guitar-768x517.png',
//     name: 'Gibson Hummingbird 5',
//     type: 'Bass',
//     location: 'Chittagong',
//     resalePrice: 2000,
//     originalPrice: 3999,
//     used: 1,
//     postedOn: new Date(),
//     seller: 'John Doe',
//     verified: true,
//   },
//   {
//     id: 6,
//     img: 'https://guitarspace.org/wp-content/uploads/2021/03/Best-Acoustic-Guitar-768x517.png',
//     name: 'Gibson Hummingbird 6',
//     type: 'Bass',
//     location: 'Chittagong',
//     resalePrice: 2000,
//     originalPrice: 3999,
//     used: 1,
//     postedOn: new Date(),
//     seller: 'John Doe',
//     verified: true,
//   },
// ];

const Category = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  // const [productsData, setProductsData] = useState([]);
  const params = useParams();

  // useEffect(() => {
  //   const fetchProductsData = async () => {
  //     const response = await axios.get(
  //       `http://localhost:3000/categories/${params.type}`
  //     );
  //     setProductsData(response.data);
  //   };

  //   fetchProductsData();
  // }, []);

  const { data: products = [] } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:3000/products/${params.type}`
      );
      return response.data;
    },
  });

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="container">
      <div className={styles.grid}>
        {products.map((product) => (
          <CategoryCard
            key={product._id}
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
