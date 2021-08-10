import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll, fetchAllTypes } from '../../../redux/typesRedux';

import styles from './AllTypes.module.scss';

const Component = ({className, allTypes, fetchTypes, loading}) => {

  useEffect(() => {
    fetchTypes();
  }, []);

  if(loading.active) return (<div>Loading...</div>)
  else {
  return (<div className={clsx(className, styles.root)}>
    {allTypes.map(item => (<div className={clsx(className, styles.ad)} key={item.id}>
    <Link to={`/type/${item._id}`}><img className={clsx(className, styles.picture)} src={item.picture} alt=''/></Link>
      <Link className={styles.info} to={`/type/${item._id}`}>
        <h6 className={clsx(className, styles.name)}>{item.name}</h6>
      </Link>
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
  fetchTypes: () => dispatch(fetchAllTypes()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as AllTypes,
  Component as AllTypesComponent,
};
