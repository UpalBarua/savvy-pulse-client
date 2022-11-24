import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { GoVerified } from 'react-icons/go';
import PurchaseModal from '../PurchaseModal/PurchaseModal';
import styles from './CategoryCard.module.css';

const CategoryCard = ({ product, handleModalOpen, setModalData }) => {
  const {
    img,
    name,
    location,
    resalePrice,
    originalPrice,
    used,
    postedOn,
    verified,
    seller,
  } = product;

  const handlePurchase = () => {
    handleModalOpen();
    setModalData({
      product: name,
      price: resalePrice,
    });
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
        <button className="btn-primary" onClick={handlePurchase}>
          purchase
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
