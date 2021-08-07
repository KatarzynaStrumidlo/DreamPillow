import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

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
      <div className={clsx(className, styles.root)} key={material.id}>
        <img className={styles.picture} src={material.picture} alt='' />
        <div className={styles.description}>
          <h3 className={styles.title}>{material.name}</h3>
          <p className={styles.about}>{material.content}</p>
          <p className={styles.infoTwo}>Price: ${material.price}</p>
          <div className={styles.info}>
            <p>Email: {material.email}</p>
            <p>Phone: {material.phone} </p>
          </div>
          <div className={styles.info}>
            <p>Added: {material.publicationDate}</p>
            <p>Edited: {material.lastUpdateDate}</p>
          </div>
          <p className={styles.infoTwo}>Status: {material.status}</p>
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
