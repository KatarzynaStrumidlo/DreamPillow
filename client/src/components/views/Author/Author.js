import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { API_URL } from '../../../config';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getOne, fetchOneAuthor } from '../../../redux/authorsRedux';

import styles from './Author.module.scss';

const Component = ({className, author, fetchOneAuthor}) => {

  useEffect(() => {
    fetchOneAuthor();
  }, []);

  return (
    <div>
      <div className={clsx(className, styles.root)}>
        <img className={clsx(className, styles.picture)} src={`${API_URL}images/${author.picture}`} alt='' />
        <div className={clsx(className, styles.description)}>
          <Link className={clsx(className, styles.back)} to={'/authors'}><ArrowBackIosIcon /></Link>
          <h3 className={clsx(className, styles.title)}>{author.name}</h3>
          <p className={clsx(className, styles.number)}>{author.description}</p>
        </div>
      </div>;
    </div>
  )
};

Component.propTypes = {
  className: PropTypes.string,
};

const mapStateToProps = (state) => ({
  author: getOne(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchOneAuthor: () => dispatch(fetchOneAuthor(props.match.params.id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Author,
  Component as AuthorComponent,
};
