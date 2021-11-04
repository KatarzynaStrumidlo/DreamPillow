import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { API_URL } from '../../../config';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll, fetchAllAuthors } from '../../../redux/authorsRedux';

import styles from './AllAuthors.module.scss';

const Component = ({className, allAuthors, fetchAllAuthors, loading}) => {

  useEffect(() => {
    fetchAllAuthors();
  }, []);

  if(loading.active) return (<div>Loading...</div>)
  else {
  return (<div className={clsx(className, styles.root)}>
    {allAuthors.map(item => (<div className={clsx(className, styles.ad)} key={item.id}>
      <Link to={`/author/${item._id}`}><img className={clsx(className, styles.picture)} src={`${API_URL}images/${item.picture}`} alt=''/></Link>
      <Link className={styles.info} to= {`/author/${item._id}`}>
        <h6 className={clsx(className, styles.name)}>{item.name}</h6>
      </Link>
    </div>))}
  </div>)
  }
};

Component.propTypes = {
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  allAuthors: getAll(state),
  loading: state.authors.loading
});

const mapDispatchToProps = dispatch => ({
  fetchAllAuthors: () => dispatch(fetchAllAuthors()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as AllAuthors,
  Component as AllAuthorsComponent,
};
