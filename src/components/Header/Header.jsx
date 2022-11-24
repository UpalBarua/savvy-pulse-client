import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { GiGuitarBassHead } from 'react-icons/gi';
import styles from './Header.module.css';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import useUserType from '../../hooks/useUserType';

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const { user, logOut } = useAuth();
  const { userType } = useUserType(user?.email);

  console.log(userType);

  const handleNavToggle = () => {
    setIsNavVisible((prevIsNavVisible) => !prevIsNavVisible);
    document.body.style.overflow = isNavVisible ? 'unset' : 'hidden';
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.navbar} | container`}>
        <Link className={styles.logo} to="/">
          <GiGuitarBassHead />
          <span>SavvyPulse</span>
        </Link>

        <ul className={styles.menu} data-visible={isNavVisible}>
          <li className={styles.item}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/blog">Blog</NavLink>
          </li>

          {user?.uid && userType === 'buyer' && (
            <li className={styles.item}>
              <NavLink to="/dashboard">My Orders</NavLink>
            </li>
          )}

          {user?.uid && userType === 'seller' && (
            <>
              <li className={styles.item}>
                <NavLink to="/dashboard">Add Product</NavLink>
              </li>
              <li className={styles.item}>
                <NavLink to="/dashboard">My Products</NavLink>
              </li>
            </>
          )}

          {user?.uid && userType === 'admin' && (
            <>
              <li className={styles.item}>
                <NavLink to="/dashboard">All Sellers</NavLink>
              </li>
              <li className={styles.item}>
                <NavLink to="/dashboard">All Buyers</NavLink>
              </li>
            </>
          )}

          {user?.uid ? (
            <li className={styles.item}>
              <button className="btn-primary" onClick={logOut}>
                Logout
              </button>
            </li>
          ) : (
            <>
              <li className={styles.item}>
                <NavLink to="/signup">Sign Up</NavLink>
              </li>
              <li className={styles.item}>
                <NavLink to="/login">Login</NavLink>
              </li>
            </>
          )}
        </ul>
        <button className={styles.toggle} onClick={handleNavToggle}>
          {isNavVisible ? <AiOutlineClose /> : <HiMenuAlt3 />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
