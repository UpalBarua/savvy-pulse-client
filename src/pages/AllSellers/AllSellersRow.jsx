import React from 'react';

const AllSellerRow = ({ seller, handleDelete }) => {
  const { _id, name, email } = seller;

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        <button className="btn-primary">verify</button>
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
