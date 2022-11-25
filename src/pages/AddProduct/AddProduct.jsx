import axios from 'axios';
import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Toaster, toast } from 'react-hot-toast';
import styles from './AddProduct.module.css';

const AddProduct = () => {
  const { user } = useAuth();

  const handleAddProduct = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = {
      name: form.name.value,
      description: form.description.value,
      picture: form.picture.value,
      type: form.type.value,
      price: {
        original: form.original.value,
        resale: form.resale.value,
      },
      condition: {
        health: form.condition.value,
        purchased: form.purchased.value,
        used: form.used.value,
      },
      seller: user?.email,
      postedOn: new Date(),
      location: form.location.value,
      phone: form.phone.value,
      isAvailable: true,
      isAdvertised: false,
    };

    console.log(JSON.stringify(formData));

    try {
      const response = await axios.post(
        'http://localhost:3000/products/new',
        formData
      );
      if (response.data.acknowledged) {
        toast.success('Sign Up Successful!', {
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
        navigate('/my-products');
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="container">
      <h2>Add product</h2>
      <form className={styles.addProduct} onSubmit={handleAddProduct}>
        <div className="control">
          <label className="label">Name</label>
          <input className="input" name="name" type="text" required />
        </div>
        <div className="control">
          <label className="label">Description</label>
          <textarea className="input" name="description" type="text" />
        </div>
        <div className="control">
          <label className="label">Picture</label>
          <input className="input" name="picture" type="text" required />
        </div>
        <div className="control">
          <label className="label">Type</label>
          <select className="input" name="type" required>
            <option value="Acoustic">Acoustic</option>
            <option value="Electric">Electric</option>
            <option value="Bass">Bass</option>
          </select>
        </div>
        <div className="control">
          <label className="label">Location</label>
          <input className="input" name="location" type="text" required />
        </div>
        <div className="control">
          <label className="label">Product Health</label>
          <select className="input" name="condition" required>
            <option value="25">25%</option>
            <option value="50">50%</option>
            <option value="75">75%</option>
            <option value="100">100%</option>
          </select>
        </div>
        <div className="control">
          <label className="label">Year of purchase</label>
          <input className="input" name="purchased" type="date" required />
        </div>
        <div className="control">
          <label className="label">Used for</label>
          <input className="input" name="used" type="text" required />
        </div>
        <div className="control">
          <label className="label">Phone</label>
          <input className="input" name="phone" type="number" required />
        </div>
        <div className="control">
          <label className="label">Original Price</label>
          <input className="input" name="original" type="text" required />
        </div>
        <div className="control">
          <label className="label">Resale Price</label>
          <input className="input" name="resale" type="text" required />
        </div>
        <button className="btn-primary" type="submit">
          Add
        </button>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </section>
  );
};

export default AddProduct;