import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll, fetchAllMaterials } from '../../../redux/materialsRedux';

import styles from './AllMaterials.module.scss';

const Component = ({className, allMaterials, fetchAllMaterials, loading}) => {

  useEffect(() => {
    fetchAllMaterials();
  }, []);

  if(loading.active) return (<div>Loading...</div>)
  else {
  return (<div className={clsx(className, styles.root)}>
    {allMaterials.map(item => (<div className={clsx(className, styles.ad)} key={item.id}>
      <Link to={`/material/${item._id}`}><img className={clsx(className, styles.picture)} src={item.picture} alt=''/></Link>
      <Link className={styles.info} to= {`/material/${item._id}`}>
        <h6 className={clsx(className, styles.name)}>{item.name}</h6>
        <p className={clsx(className, styles.price)}>${item.price}</p>
      </Link>
    </div>))}
  </div>)
  }
};

Component.propTypes = {
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  allMaterials: getAll(state),
  loading: state.materials.loading
});

const mapDispatchToProps = dispatch => ({
  fetchAllMaterials: () => dispatch(fetchAllMaterials()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as AllMaterials,
  Component as AllMaterialsComponent,
};
