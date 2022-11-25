import React from 'react';
import format from 'date-fns/format';
import styles from './ProductRow.module.css';
import axios from 'axios';

const ProductRow = ({ product, refetch, handleDelete }) => {
  const { _id, name, img, postedOn, price, type, isAvailable, isAdvertised } =
    product;

  // console.log(product);

  const handleProductSell = async () => {
    try {
      // const response = await fetch(
      //   `http://localhost:3000/my-products/sell/${_id}`,
      //   {
      //     method: 'PATCH',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //   }
      // );
      const response = await axios.patch(
        `http://localhost:3000/my-products/sell/${_id}`
      );

      if (response?.data?.modifiedCount > 0) {
        refetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleProductAdvertisement = async () => {
    try {
      // const response = await fetch(
      //   `http://localhost:3000/my-products/sell/${_id}`,
      //   {
      //     method: 'PATCH',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //   }
      // );
      const response = await axios.patch(
        `http://localhost:3000/my-products/advertisements/${_id}`
      );

      if (response?.data?.modifiedCount > 0) {
        refetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <tr>
      <td>
        <img
          className={styles.avatar}
          src="https://images.saymedia-content.com/.image/t_share/MTkyNTgxMDA4ODY2OTQ0NTQ4/best-electric-guitar-for-intermediate-players.jpg"
          alt=""
        />
      </td>
      <td>
        <p>{name}</p>
      </td>
      <td>
        <p>{type}</p>
      </td>
      <td>
        <p>${price.resale}</p>
      </td>
      <td>
        <p>{format(new Date(postedOn), 'PP')}</p>
      </td>
      {isAvailable ? (
        <td>
          <button className="btn-primary" onClick={handleProductAdvertisement}>
            {isAdvertised ? (
              <span>Remove Advertisement</span>
            ) : (
              <span>Advertise</span>
            )}
          </button>
        </td>
      ) : (
        <td />
      )}
      <td>
        <button className="btn-primary" onClick={handleProductSell}>
          {isAvailable ? <span>Available</span> : <span>Sold</span>}
        </button>
      </td>
      <td>
        <button className="btn-primary" onClick={handleDelete(_id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
