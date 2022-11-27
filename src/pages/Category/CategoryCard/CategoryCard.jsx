import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { GoVerified } from 'react-icons/go';
import PurchaseModal from '../PurchaseModal/PurchaseModal';
import styles from './CategoryCard.module.css';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import format from 'date-fns/format';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCartCheck, BsBookmarkHeart } from 'react-icons/bs';

const CategoryCard = ({ product, handleModalOpen, setModalData, refetch }) => {
  const {
    _id,
    picture,
    name,
    location,
    postedOn,
    seller,
    isWishListed,
    description,
    condition,
    price,
  } = product;

  const handlePurchase = () => {
    handleModalOpen();
    setModalData(product);
    // setModalData({
    //   product: name,
    //   price: resalePrice,
    // });
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
    <div className={`${styles.card} flow`}>
      <img className={styles.img} src={picture} alt={name} />
      <div className="flow">
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.seller}>
          <span>{seller}</span>
          <GoVerified className={styles.icon} />
        </p>
        <p>{format(new Date(postedOn), 'PP')}</p>
      </div>
      <p>{description.slice(0, 200) + '...'}</p>
      <div className={styles.metadata}>
        <p className={styles.data}>
          <AiOutlineHeart />
          <span>{condition.health}%</span>
        </p>
        <p className={styles.data}>
          <HiOutlineLocationMarker />
          <span>{location}</span>
        </p>
        <p className={styles.data}>
          <AiOutlineClockCircle />
          <span>{condition.used} years</span>
        </p>
      </div>
      <div className={styles.footer}>
        <div>
          <p className={styles.resale}>${price.resale}</p>
          <p className={styles.original}>${price.original}</p>
        </div>
        <div>
          <button
            className={isWishListed ? styles.btn : styles.btnToggled}
            onClick={handleWishlistToggle}>
            <BsBookmarkHeart />
          </button>
          <button className={styles.btn} onClick={handlePurchase}>
            <BsCartCheck />
          </button>
        </div>
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default CategoryCard;
