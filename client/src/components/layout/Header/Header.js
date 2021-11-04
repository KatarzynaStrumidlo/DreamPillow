import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from './logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import clsx from 'clsx';
import styles from './Header.module.scss';

const Component = ({ className }) => {

  return (
    <div className= {clsx(className, styles.root)}>
      <nav className={clsx(className, styles.appBar)}>
        <Link className ={clsx(className,styles.logo1)} to={'/'}><img src={logo} alt='' /></Link>
        <div className={clsx(className,styles.tabs)}>
          <Link className ={clsx(className,styles.button)} to={'/paintings'}>Pillow Types</Link>
          <Link className ={clsx(className,styles.button)} to={'/materials'}>Materials</Link>
          <Link to={'/cart'}><FontAwesomeIcon icon={faShoppingCart} className={clsx(className, styles.cart)}/></Link>
        </div>
      </nav>
    </div>
  );
}

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Header,
  Component as HeaderComponent,
};
