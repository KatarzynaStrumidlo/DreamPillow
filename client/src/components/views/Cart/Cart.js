import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import clsx from 'clsx';

import { connect } from 'react-redux';

import styles from './Cart.module.scss';

const Component = ({className}) => {

  // useEffect(() => {
  //   fetchOneMaterial();
  // }, []);

  return (
    <div className={styles.root}>
      <div className={clsx(className, styles.cartProduct)}>
        <HighlightOffIcon className={clsx(className, styles.delete)} />
        <img className={clsx(className, styles.picture)} src='https://cdn.pixabay.com/photo/2017/02/16/10/51/pillow-2071096_960_720.jpg' alt='' />
        <div className={clsx(className, styles.description)}>
          <p className={clsx(className, styles.title)}>Some product</p>
          <p className={clsx(className, styles.number)}>serial number:</p>
          <p className={clsx(className, styles.price)}>price:</p>
        </div>
      </div>
      <div className={clsx(className, styles.cartProduct)}>
        <HighlightOffIcon className={clsx(className, styles.delete)} />
        <img className={clsx(className, styles.picture)} src='https://cdn.pixabay.com/photo/2017/02/16/10/51/pillow-2071096_960_720.jpg' alt='' />
        <div className={clsx(className, styles.description)}>
          <p className={clsx(className, styles.title)}>Some product</p>
          <p className={clsx(className, styles.number)}>serial number:}</p>
          <p className={clsx(className, styles.price)}>price:</p>
        </div>
      </div>
      <div className={clsx(className, styles.total)}>
        <p>Total price: $</p>
      </div>
    </div>
  )
};

Component.propTypes = {
  className: PropTypes.string,
};

// const mapStateToProps = (state) => ({
//   material: getOne(state),
// });

// const mapDispatchToProps = (dispatch, props) => ({
//   fetchOneMaterial: () => dispatch(fetchOneMaterial(props.match.params.id)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Cart,
  Component as CartComponent,
};
