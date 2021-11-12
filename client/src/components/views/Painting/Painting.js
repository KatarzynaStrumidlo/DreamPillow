import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { API_URL } from '../../../config';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getOne, fetchOnePainting, setInCart, getPaintingsInCart } from '../../../redux/paintingsRedux';
import { addToCart } from '../../../redux/cartRedux';

import styles from './Painting.module.scss';

const Component = ({ className, painting, fetchOnePainting, addToCart, setInCart, paintingsInCart }) => {

  useEffect(() => {
    fetchOnePainting();
  }, [fetchOnePainting]);

  const isInCart = () => {
    if(paintingsInCart.includes(painting._id)){
      alert('This painting is already in cart');
    } else {
        addToCart(painting);
        setInCart();
      }
    };

  return (
    <div className={clsx(className, styles.root)} key={painting.id}>
      {painting.picture && <img className={clsx(className, styles.picture)} src={`${API_URL}images/${painting.picture}`} alt='' /> }
      <div className={clsx(className, styles.about)}>
        <Link className={clsx(className, styles.back)} to={'/paintings'}><ArrowBackIosIcon /></Link>

        <h3 className={clsx(className, styles.title)}>{painting.title}</h3>
        <p className={clsx(className, styles.description)}>{painting.description}</p>
        <p className={clsx(className, styles.author)}>{painting.author}</p>
        <p className={clsx(className, styles.price)}>$ {painting.price}</p>
        <Link className={clsx(className, styles.order)} to={'/cart'} onClick={isInCart}>Add to cart</Link>
      </div>
    </div>
  )
};

Component.propTypes = {
  className: PropTypes.string,
  painting: PropTypes.object,
  fetchOnePainting: PropTypes.func,
  addToCart: PropTypes.func,
  setInCart: PropTypes.func,
  paintingsInCart: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
  painting: getOne(state),
  paintingsInCart: getPaintingsInCart(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchOnePainting: () => dispatch(fetchOnePainting(props.match.params.id)),
  addToCart: (painting) => dispatch(addToCart(painting)),
  setInCart: () => dispatch(setInCart()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Painting,
  Component as PaintingComponent,
};
