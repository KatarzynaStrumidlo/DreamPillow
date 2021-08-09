import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faGooglePlusG,
  faLinkedinIn,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';

const Component = ({ className, children }) => (
  <footer className={styles.root}>
    <div className={styles.footerMenu}>
      <div className={styles.menuWrapper}>
        <h6>Information</h6>
        <ul>
          <li>
            <Link to='/#'>About us</Link>
          </li>
          <li>
            <Link to='/#'>Policy</Link>
          </li>
          <li>
            <Link to='/#'>Conditions</Link>
          </li>
          <li>
            <Link to='/#'>Online support</Link>
          </li>
        </ul>
      </div>
      <div className={styles.menuWrapper}>
        <h6>Orders</h6>
        <ul>
          <li>
            <Link to='/#'>Payment options</Link>
          </li>
          <li>
            <Link to='/#'>Shipping and delivery</Link>
          </li>
          <li>
            <Link to='/#'>Returns</Link>
          </li>
          <li>
            <Link to='/#'>Shipping</Link>
          </li>
        </ul>
      </div>
    </div>
    <div className={styles.bottomBar}>
      <div className={styles.copyright}>
        <p>©Copyright 2021 Dream Pillow | All Rights Reserved</p>
      </div>
      <div className={styles.socialMedia}>
        <Link to='/#'>
          <FontAwesomeIcon className={styles.icon} icon={faFacebookF}>Facebook</FontAwesomeIcon>
        </Link>
      </div>
    </div>
  </footer>
);

Component.propTypes = {
  children: PropTypes.node,
};

export {
  Component as Footer,
  Component as FooterComponent,
};
