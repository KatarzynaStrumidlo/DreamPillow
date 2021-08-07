import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll, fetchPublished } from '../../../redux/materialsRedux';

import styles from './AllMaterials.module.scss';

const Component = ({className, allMaterials, fetchPublishedPosts, loading}) => {

  useEffect(() => {
    fetchPublishedPosts();
  }, []);

  if(loading.active) return (<div>Loading...</div>)
  else {
  return (<div className={clsx(className, styles.root)}>
    {allMaterials.map(item => (<div className={clsx(className, styles.ad)} key={item.id}>
      <Link to={`/material/${item._id}`}><img className={clsx(className, styles.picture)} src={item.picture} alt=''/></Link>
      <div className={styles.info}>
        <Link className={clsx(className, styles.name)} to={`/material/${item._id}`}>{item.name}</Link>
        <p className={clsx(className, styles.price)}>Price: ${item.price}</p>
      </div>
    </div>))}
  </div>)
  }
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  allMaterials: getAll(state),
  loading: state.materials.loading
});

const mapDispatchToProps = dispatch => ({
  fetchPublishedPosts: () => dispatch(fetchPublished()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as AllMaterials,
  Component as AllMaterialsComponent,
};
