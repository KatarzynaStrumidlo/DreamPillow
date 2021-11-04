import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { API_URL } from '../../../config';

import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

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
  return (
  <div>
    <div className={styles.header}>
      <h1 className={styles.title}>PAINT</h1>
      <p className={styles.description}>This is what is great about painting: you can recall something that has been lost and keep it forever.</p>
    </div>
    <div className={styles.mainPainting}>
      <img src={`${API_URL}images/main-painting.jpeg`} alt='' />
    </div>
    <div className={styles.about}>
      <h3>About Our Shop</h3>
      <p>Sed at nisl euismod, gravida mauris feugiat, iaculis lectus. Integer ullamcorper interdum tellus, eget iaculis nibh laoreet non. Duis aliquet ante risus, in mollis libero rhoncus ut. Aliquam eleifend rhoncus dolor accumsan semper. Curabitur convallis, lorem eget imperdiet tristique, ante purus pellentesque augue, eu porttitor nisl purus vitae lectus. Mauris hendrerit hendrerit quam, eget laoreet ex bibendum eget. Donec molestie fringilla orci sodales condimentum. Nam rhoncus et velit ut placerat. Aenean fermentum nisi vitae nisi vehicula varius. Maecenas non libero nisi. Suspendisse eu dolor et elit accumsan tincidunt. Duis ullamcorper vestibulum nisi, et egestas dui. Fusce non elementum est, id suscipit libero. Phasellus sed est aliquet, laoreet ex viverra, maximus metus.</p>
    </div>
    <div className={clsx(className, styles.gallery)}>
    <Carousel plugins={[
     'infinite',
      {
        resolve: autoplayPlugin,
        options: {
          interval: 2000,
        }
      },
    ]}
      animationSpeed={1000}>
        {allProducts.map(item => (
          <img key={item.id} className={clsx(className, styles.picture)} src={item.picture} alt=''/>
        ))}
    </Carousel>

    </div>
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
