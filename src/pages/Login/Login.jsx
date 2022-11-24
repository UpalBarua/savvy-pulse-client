import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { LeapFrog } from '@uiball/loaders';
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { logIn, googleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    try {
      const response = await logIn(formData.email, formData.password);
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
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async (event) => {
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
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="container">
      <div className={styles.signup}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="control">
            <label className="label">Email</label>
            <input className="input" name="email" type="text" />
          </div>
          <div className="control">
            <label className="label">Password</label>
            <input className="input" name="password" type="password" />
          </div>
          {isLoading ? (
            <LeapFrog size={40} speed={2.5} color="#c558ef" />
          ) : (
            <button className="btn-primary" type="submit">
              Login
            </button>
          )}
        </form>
        <button onClick={handleGoogleLogin}>google</button>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </section>
  );
};

export default Login;
