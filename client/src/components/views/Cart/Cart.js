import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getOne, fetchOneMaterial } from '../../../redux/materialsRedux';

import styles from './Cart.module.scss';

const Component = ({className, material, fetchOneMaterial}) => {

  useEffect(() => {
    fetchOneMaterial();
  }, []);

  return (
    <div className={styles.root}>
      <div className={clsx(className, styles.cartProduct)}>
        <HighlightOffIcon className={styles.delete} />
        <img className={styles.picture} src='https://cdn.pixabay.com/photo/2017/02/16/10/51/pillow-2071096_960_720.jpg' alt='' />
        <div className={styles.description}>
          <p className={styles.title}>Some product</p>
          <p className={styles.number}>serial number: {material._id}</p>
          <p className={styles.price}>price: ${material.price}</p>
        </div>
      </div>
      <div className={clsx(className, styles.cartProduct)}>
        <HighlightOffIcon className={styles.delete} />
        <img className={styles.picture} src='https://cdn.pixabay.com/photo/2017/02/16/10/51/pillow-2071096_960_720.jpg' alt='' />
        <div className={styles.description}>
          <p className={styles.title}>Some product</p>
          <p className={styles.number}>serial number: {material._id}</p>
          <p className={styles.price}>price: ${material.price}</p>
        </div>
      </div>
      <div className={styles.total}>
        <p>Total price: $</p>
      </div>
    </div>
  )
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = (state) => ({
  material: getOne(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchOneMaterial: () => dispatch(fetchOneMaterial(props.match.params.id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Cart,
  Component as CartComponent,
};
