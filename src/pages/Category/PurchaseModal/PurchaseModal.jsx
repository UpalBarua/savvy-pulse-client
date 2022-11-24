import React from 'react';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useAuth } from '../../../contexts/AuthContext';
import styles from './PurchaseModal.module.css';

const PurchaseModal = ({ isModalOpen, handleModalClose, modalData }) => {
  const { user } = useAuth();

  return (
    <div className={styles.overlay} data-visible={isModalOpen}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>Purchase Product</h2>
          <button className={styles.toggle} onClick={handleModalClose}>
            <AiOutlineClose />
          </button>
        </div>
        <form className={styles.purchaseForm}>
          <div className="control">
            <label className="label">Name</label>
            <input
              className="input"
              type="text"
              defaultValue={user.displayName}
            />
          </div>
          <div className="control">
            <label className="label">Email</label>
            <input className="input" type="text" defaultValue={user.email} />
          </div>
          <div className="control">
            <label className="label">Guitar</label>
            <input
              className="input"
              type="text"
              defaultValue={modalData.product}
            />
          </div>
          <div className="control">
            <label className="label">Price</label>
            <input
              className="input"
              type="text"
              defaultValue={modalData.price}
            />
          </div>
          <div className="control">
            <label className="label">Phone</label>
            <input className="input" type="text" />
          </div>
          <div className="control">
            <label className="label">Meeting</label>
            <input className="input" type="text" />
          </div>
          <button className="btn-primary">purchase</button>
        </form>
      </div>
    </div>
  );
};

export default PurchaseModal;
