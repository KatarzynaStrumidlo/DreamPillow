import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import clsx from 'clsx';
import styles from './Footer.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Component = ({ className }) => (
  <footer className={clsx(className, styles.root)}>
    <div className={clsx(className, styles.footerMenu)}>
      <div className={clsx(className,styles.menuWrapper)}>
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
      <div className={clsx(className, styles.menuWrapper)}>
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
    <div className={clsx(className, styles.bottomBar)}>
      <div className={clsx(className, styles.copyright)}>
        <p>©Copyright 2021 Paint | All Rights Reserved</p>
      </div>
      <div className={clsx(className, styles.socialMedia)}>
        <Link to='/#'>
          <FontAwesomeIcon className={clsx(className, styles.icon)} icon={faFacebookF}>Facebook</FontAwesomeIcon>
        </Link>
      </div>
    </div>
  </footer>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Footer,
  Component as FooterComponent,
};
