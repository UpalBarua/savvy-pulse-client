import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { LeapFrog } from '@uiball/loaders';
import styles from './Signup.module.css';
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { signUp, googleSignIn, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
      type: event.target.type.value,
    };

    try {
      const response = await signUp(formData.email, formData.password);
      if (response?.user?.uid) {
        updateUserProfile(formData.name);
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
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await googleSignIn();
      if (response?.user?.uid) {
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
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="container">
      <div className={styles.signup}>
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <div className="control">
            <label className="label">Name</label>
            <input className="input" name="name" type="text" />
          </div>
          <div className="control">
            <label className="label">Email</label>
            <input className="input" name="email" type="text" />
          </div>
          <div className="control">
            <label className="label">Password</label>
            <input className="input" name="password" type="password" />
          </div>
          <div className="control">
            <label className="label">Account type</label>
            <select className="input" name="type" id="">
              <option value="buyer">buyer</option>
              <option value="seller">seller</option>
            </select>
          </div>
          {isLoading ? (
            <LeapFrog size={40} speed={2.5} color="#c558ef" />
          ) : (
            <button className="btn-primary" type="submit">
              Sign Up
            </button>
          )}
        </form>
        <button onClick={handleGoogleSignup}>google</button>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </section>
  );
};

export default Signup;
