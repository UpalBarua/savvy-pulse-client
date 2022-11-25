import React from 'react';
import format from 'date-fns/format';
import styles from './ProductRow.module.css';

const ProductRow = ({ product }) => {
  const { name, img, postedOn, price, type } = product;
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
      <td>
        <button>Available</button>
      </td>
      <td>
        <button>Advertise</button>
      </td>
      <td>
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default ProductRow;
