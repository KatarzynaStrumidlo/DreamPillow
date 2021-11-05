import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { API_URL } from '../../../config';

import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import { AllAuthors } from '../AllAuthors/AllAuthors';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll, fetchAllPaintings } from '../../../redux/paintingsRedux.js';

import styles from './Homepage.module.scss';

const Component = ({className, allPaintings, fetchAllPaintings, loading}) => {

  useEffect(() => {
    fetchAllPaintings();
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
      animationSpeed={900}>
        {allPaintings.map(item => (
          <img key={item.id} className={clsx(className, styles.picture)} src={`${API_URL}images/${item.picture}`} alt=''/>
        ))}
    </Carousel>
    <div className={styles.authors}>
      <h3>Our Artists</h3>
      <AllAuthors />
    </div>
    </div>
  </div>)
  }
};

Component.propTypes = {
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  allPaintings: getAll(state),
  loading: state.paintings.loading
});

const mapDispatchToProps = dispatch => ({
  fetchAllPaintings: () => dispatch(fetchAllPaintings()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Homepage,
  Component as HomepageComponent,
};
