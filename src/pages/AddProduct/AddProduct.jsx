import React from 'react';
import styles from './AddProduct.module.css';

const AddProduct = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = {
      name: form.name.value,
    };

    console.log(formData);
  };

  return (
    <section className="container">
      <h2>Add product</h2>
      <form className={styles.addProduct} onSubmit={handleAddProduct}>
        <div className="control">
          <label className="label">Name</label>
          <input className="input" name="name" type="text" />
        </div>
        <div className="control">
          <label className="label">Condition</label>
          <input className="input" name="condition" type="text" />
        </div>
        <div className="control">
          <label className="label">Phone</label>
          <input className="input" name="phone" type="number" />
        </div>
        <div className="control">
          <label className="label">Description</label>
          <input className="input" name="description" type="text" />
        </div>
        <div className="control">
          <label className="label">Price</label>
          <input className="input" name="price" type="text" />
        </div>
        <div className="control">
          <label className="label">Year of purchase</label>
          <input className="input" name="purchase" type="text" />
        </div>
        <button className="btn-primary" type="submit">
          Add
        </button>
      </form>
    </section>
  );
};

export default AddProduct;
