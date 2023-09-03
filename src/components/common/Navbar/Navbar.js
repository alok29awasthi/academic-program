import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Checkbox from '../Checkbox/Checkbox';

import navConfig from './navConfig'; // Import the navigation configuration

const Navbar = ({ currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasBoxShadow, setHasBoxShadow] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    setHasBoxShadow(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Get the navigation items based on the currentPage from the configuration object
  const navigationItems = navConfig[currentPage] || [];

  return (
    <nav
      style={{
        boxShadow: hasBoxShadow
          ? 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px'
          : 'none',
      }}
      className='cv__navbar'
    >
      <h1 className='cv__navbar-heading'>Web Data Management</h1>

      <ul className='cv__navbar-links'>
        {navigationItems.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>

      <div className='cv__navbar-smallscreen'>
        <div className='cv__navbar-smallscreen_menu'>
          <Checkbox checked={isMenuOpen} onChange={toggleMenu}></Checkbox>
        </div>
        {isMenuOpen && (
          <div
            className={
              isMenuOpen
                ? 'cv__navbar-smallscreen_overlay active'
                : 'cv__navbar-smallscreen_overlay'
            }
          >
            <ul className='cv__navbar-smallscreen_links'>
              {navigationItems.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;