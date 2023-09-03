import React, { useEffect, useState } from 'react';

import './Navbar.css';
import { Link } from 'react-router-dom';
import Checkbox from '../Checkbox/Checkbox';
import Square from '../Square/Square';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasBoxShadow, setHasBoxShadow] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    setHasBoxShadow(window.scrollY > 0);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav  style={{boxShadow: hasBoxShadow ? 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px' : 'none'}} className='cv__navbar'>
      <h1 className='cv__navbar-heading'>Web Data Management</h1>

      <ul className='cv__navbar-links'>
        <li><a href="/">HOME</a></li>
        <li><a href="/academic-program">ACADEMIC PROGRAM</a></li>
        <li><a href="/courses">COURSES</a></li>
        <li><a href="/exams">EXAMS</a></li>
        <li><a href="/login">LOGIN</a></li>
      </ul>

      <div className='cv__navbar-smallscreen'>
        <div className='cv__navbar-smallscreen_menu'>
          <Checkbox checked={isMenuOpen} onChange={toggleMenu}></Checkbox>
        </div>
        {isMenuOpen && (
          <div className={isMenuOpen ? 'cv__navbar-smallscreen_overlay active' : 'cv__navbar-smallscreen_overlay'}>
            <ul className='cv__navbar-smallscreen_links'>
                <li><a href="/">Home</a></li>
                <li><a href="/academic-program">Academic Program</a></li>
                <li><a href="/courses">Courses</a></li>
                <li><a href="/exams">Exams</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
