import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getOne, fetchOneType } from '../../../redux/typesRedux';

import styles from './Type.module.scss';

const Component = ({className, type, fetchOneType}) => {

  useEffect(() => {
    fetchOneType();
  }, []);

  return (
    <div>
      <div className={clsx(className, styles.root)} key={type.id}>
        <img className={styles.picture} src={type.picture} alt='' />
        <div className={styles.description}>
          <Link className={styles.back} to={'/types'}><ArrowBackIosIcon /></Link>
          <h3 className={styles.title}>{type.name}</h3>
          <p className={styles.description}>{type.description}</p>
          <p className={styles.price}>Price depends on size and chosen material</p>
          <p className={styles.number}>serial number: {type._id}</p>

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
  type: getOne(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchOneType: () => dispatch(fetchOneType(props.match.params.id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Type,
  Component as TypeComponent,
};
