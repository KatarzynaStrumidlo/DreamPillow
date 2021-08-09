import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getOne, fetchOneMaterial } from '../../../redux/materialsRedux';

import styles from './Material.module.scss';

const Component = ({className, material, fetchOneMaterial}) => {

  useEffect(() => {
    fetchOneMaterial();
  }, []);

  return (
    <div>
      <div className={clsx(className, styles.root)}>
        <img className={styles.picture} src={material.picture} alt='' />
        <div className={styles.description}>
          <Link className={styles.back} to={'/materials'}><ArrowBackIosIcon /></Link>
          <h3 className={styles.title}>{material.name}</h3>
          <p className={styles.price}>price: ${material.price} each linear metre</p>
          <p className={styles.number}>serial number: {material._id}</p>
        </div>
      </div>;
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
  Container as Material,
  Component as MaterialComponent,
};
