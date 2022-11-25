import React from 'react';
import axios from 'axios';

const AllSellerRow = ({ seller, handleDelete, refetch }) => {
  const { _id, name, email, isVerified } = seller;

  const handleSellerVerification = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/user/verify/${_id}`
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
      <td>{name}</td>
      <td>{email}</td>
      <td>
        <button className="btn-primary" onClick={handleSellerVerification}>
          {isVerified ? <span>verified</span> : <span>verify</span>}
        </button>
      </td>
      <td>
        <button className="btn-primary" onClick={handleDelete(_id)}>
          delete
        </button>
      </td>
    </tr>
  );
};

export default AllSellerRow;
