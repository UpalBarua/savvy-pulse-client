import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { GiGuitarBassHead } from 'react-icons/gi';
import styles from './Header.module.css';
import { useState } from 'react';

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleNavToggle = () => {
    setIsNavVisible((prevIsNavVisible) => !prevIsNavVisible);
    document.body.style.overflow = isNavVisible ? 'hidden' : 'unset';
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
            <NavLink to="/">Blog</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/">Dashboard</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/">Sign Up</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/">Login</NavLink>
          </li>
          <li className={styles.item}>
            <button className="btn-primary">Logout</button>
          </li>
        </ul>

        <button className={styles.toggle} onClick={handleNavToggle}>
          {isNavVisible ? <AiOutlineClose /> : <HiMenuAlt3 />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
