import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import clsx from 'clsx';

import { API_URL } from '../../../config';

import { getCartCost, getAll, removeFromCart } from '../../../redux/cartRedux';
import { fetchAllPaintings } from '../../../redux/paintingsRedux';
import { connect } from 'react-redux';

import styles from './Cart.module.scss';

const Component = ({ className, products, total, fetchAllPaintings, removeFromCart }) => {

  useEffect(() => {
    fetchAllPaintings();
  }, []);

  return (
    <div className={styles.root}>
      {products.map(item => (<div key={item._id} className={clsx(className, styles.cartProduct)}>
        <HighlightOffIcon className={clsx(className, styles.delete)} onClick={() => removeFromCart(item)} />
        <img className={clsx(className, styles.picture)} src={`${API_URL}images/${item.picture}`} alt='' />
        <div className={clsx(className, styles.description)}>
          <p className={clsx(className, styles.title)}>"{item.title}"</p>
          <p className={clsx(className, styles.price)}>price: $ {item.price}</p>
          <p className={clsx(className, styles.price)}>price: $ {item.amountInCart}</p>
        </div>
      </div>))}
      <div className={clsx(className, styles.total)}>
        <p>Total price: $ {total}</p>
      </div>
    </div>
  )
};

Component.propTypes = {
  className: PropTypes.string,
};

const mapStateToProps = (state) => ({
  products: getAll(state),
  total: getCartCost(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchAllPaintings: () => dispatch(fetchAllPaintings()),
  removeFromCart: (item) => dispatch(removeFromCart(item)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Cart,
  Component as CartComponent,
};
