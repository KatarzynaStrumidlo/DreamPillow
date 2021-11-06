import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { API_URL } from '../../../config';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { getNumberOfProducts } from '../../../redux/cartRedux';
import { connect } from 'react-redux';

import clsx from 'clsx';
import styles from './Header.module.scss';

const Component = ({ className, numberOfProducts }) => {

  return (
    <div className= {clsx(className, styles.root)}>
      <nav className={clsx(className, styles.appBar)}>
        <Link className ={clsx(className,styles.logo)} to={'/'}><img src={`${API_URL}images/logo.png`} alt='' /></Link>
        <div className={clsx(className,styles.tabs)}>
          <Link className ={clsx(className,styles.button)} to={'/paintings'}>Paintings</Link>
          <Link className ={clsx(className,styles.button)} to={'/authors'}>Authors</Link>
          <Link to={'/cart'}><FontAwesomeIcon icon={faShoppingCart} className={clsx(className, styles.cart)}/></Link>
          <p className={clsx(className, styles.numberOfProducts)}>{numberOfProducts}</p>
        </div>
      </nav>
    </div>
  );
}

Component.propTypes = {
  className: PropTypes.string,
};

const mapStateToProps = (state) => ({
  numberOfProducts: getNumberOfProducts(state),
})

const Container = connect(mapStateToProps)(Component);

export {
  Container as Header,
  Component as HeaderComponent,
};
