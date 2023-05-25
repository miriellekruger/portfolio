import Link from 'next/link';
// import { FaBars } from "react-icons/fa";
import styles from './NavBar.module.css';
import React, {useState} from 'react';
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import useDeviceSize from '../lib/useDeviceSize';

const Navbar = ({name}) => {
  const logoUrl = '/images/profile.jpg';
  // if changed threshold here, change in NavBar css
  const thresholdWidth = 700;
  const [width, height] = useDeviceSize();

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isOpen ? styles.open : ''}`}>
      {width > thresholdWidth ? (
          <div className={styles['logo-container']}>
            <Link href="/">
                  <div >
                    <Image
                      priority
                      src="/images/profile.jpg"
                      className={utilStyles.borderCircle}
                      height={60}
                      width={60}
                      alt={name}
                    />
                  </div>
            </Link>
            <h2 className={styles['logo-description']}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </div>
      ) : (
        <div className={styles['burger-icon']} onClick={toggleNavbar}>
          <div className={styles.line} />
          <div className={styles.line} />
          <div className={styles.line} />
        </div>
      )}
          <ul className={`${styles['nav-links']} ${isOpen ? styles.open : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/resume">Resume</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
  );
};

export default Navbar;

