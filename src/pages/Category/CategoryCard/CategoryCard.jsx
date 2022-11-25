import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { GoVerified } from 'react-icons/go';
import PurchaseModal from '../PurchaseModal/PurchaseModal';
import styles from './CategoryCard.module.css';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

const CategoryCard = ({ product, handleModalOpen, setModalData, refetch }) => {
  const {
    _id,
    img,
    name,
    location,
    resalePrice,
    originalPrice,
    used,
    postedOn,
    verified,
    seller,
    isWishListed,
  } = product;

  const handlePurchase = () => {
    handleModalOpen();
    setModalData({
      product: name,
      price: resalePrice,
    });
  };

  const handleWishlistToggle = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/my-products/wishlist/new/${_id}`
      );

      if (response?.data?.modifiedCount > 0) {
        refetch();

        const message = isWishListed
          ? 'Product removed from wishlist'
          : 'Product added to wishlist';

        toast.success(message, {
          style: {
            border: '1px solid var(--clr-accent-300)',
            padding: '16px',
            color: '#713200',
          },
          iconTheme: {
            primary: '#713200',
            secondary: '#FFFAEE',
          },
        });
      }
    } catch (error) {}
  };

  return (
    <div className={styles.card}>
      <img className={styles.img} src={img} alt="" />
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.seller}>
        <span>{seller}</span>
        <GoVerified />
      </p>
      <p>used for {used} years</p>
      <p className={styles.location}>
        <HiOutlineLocationMarker />
        <span>{location}</span>
      </p>
      <p className={styles.time}>
        <AiOutlineClockCircle />
        <span>Last Friday</span>
      </p>
      <div className={styles.footer}>
        <div className={styles.price}>
          <p className={styles.resale}>${resalePrice}</p>
          <p className={styles.original}>${originalPrice}</p>
        </div>
        <button className="btn-primary" onClick={handleWishlistToggle}>
          {isWishListed ? (
            <span>remove from wishlist</span>
          ) : (
            <span>add to wishlist</span>
          )}
          wishlist
        </button>
        <button className="btn-primary" onClick={handlePurchase}>
          purchase
        </button>
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default CategoryCard;
