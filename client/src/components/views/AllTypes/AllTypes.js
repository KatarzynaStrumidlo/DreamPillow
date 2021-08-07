import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll, fetchPublished } from '../../../redux/typesRedux';

import styles from './AllTypes.module.scss';

const Component = ({className, allTypes, fetchTypes, loading}) => {

  useEffect(() => {
    fetchTypes();
  }, []);

  if(loading.active) return (<div>Loading...</div>)
  else {
  return (<div className={clsx(className, styles.root)}>
    {allTypes.map(item => (<div className={clsx(className, styles.ad)} key={item.id}>
    <Link to={`/material/${item._id}`}><img className={clsx(className, styles.picture)} src={item.picture} alt=''/></Link>
      <div className={styles.info}>
        <Link className={clsx(className, styles.name)} to={`/material/${item._id}`}>{item.name}</Link>
        {/*<p className={clsx(className, styles.price)}>Price: ${item.price}</p>*/}
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
  allTypes: getAll(state),
  loading: state.materials.loading
});

const mapDispatchToProps = dispatch => ({
  fetchTypes: () => dispatch(fetchPublished()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as AllTypes,
  Component as AllTypesComponent,
};
