import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import TableRow from './TableRow';
import ConfirmationModal from '../../components/ConfirmModal/ConfirmationModal';
import { Toaster, toast } from 'react-hot-toast';

const AllBuyers = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [deleteId, setDeleteId] = useState('');

  const handleToggleModal = () => {
    setIsModalVisible((prevIsModalVisible) => !prevIsModalVisible);
  };

  const { data: allBuyersData = [], refetch } = useQuery({
    queryKey: ['allBuyersData'],
    queryFn: async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/user/all?type=buyer'
        );
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const deleteBuyer = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/user/delete/${deleteId}`
      );

      if (response?.data?.deletedCount > 0) {
        refetch();
        toast.success('Buyer Deleted', {
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
    } catch (error) {
      console.log(error);
    } finally {
      handleToggleModal();
    }
  };

  const handleDelete = (id) => {
    return () => {
      handleToggleModal();
      setDeleteId(id);
    };
  };

  // console.log(allBuyersData);

  return (
    <section className="container">
      <h2>All Buyers</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allBuyersData.map((buyer) => (
            <TableRow
              key={buyer._id}
              buyer={buyer}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>

      {isModalVisible && (
        <ConfirmationModal
          title="Delete Buyer"
          message="are you sure you want to delete this buyer?"
          cancelFn={handleToggleModal}
          confirmFn={deleteBuyer}
        />
      )}

      <Toaster position="top-center" reverseOrder={false} />
    </section>
  );
};

export default AllBuyers;
