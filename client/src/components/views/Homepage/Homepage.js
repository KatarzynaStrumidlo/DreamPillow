import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll, fetchPublished } from '../../../redux/examplesRedux';

import styles from './Homepage.module.scss';

const Component = ({className, allProducts, fetchPublished, loading}) => {

  useEffect(() => {
    fetchPublished();
  }, []);

  if(loading.active) return (<div>Loading...</div>)
  else {
  return (<div className={clsx(className, styles.root)}>
    {allProducts.map(item => (
      <img key={item.id} className={clsx(className, styles.picture)} src={item.picture} alt=''/>
    ))}
  </div>)
  }
};

Component.propTypes = {
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  allProducts: getAll(state),
  loading: state.examples.loading
});

const mapDispatchToProps = dispatch => ({
  fetchPublished: () => dispatch(fetchPublished()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Homepage,
  Component as HomepageComponent,
};
