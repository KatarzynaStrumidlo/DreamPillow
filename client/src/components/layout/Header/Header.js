import React from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import clsx from 'clsx';
import styles from './Header.module.scss';

const Component = ({ className }) => {

  return (
    <div>
      <AppBar position="static" className={clsx(className, styles.appBar)}>
        <Link className ={styles.logo} to={'/'}>Dream pillow</Link>
        <div className={styles.tabs}>
          <Link className ={styles.button} to={'/types'}>Pillow Types</Link>
          <Link className ={styles.button} to={'/materials'}>Materials</Link>
          <ShoppingCartIcon className={clsx(className, styles.cart)}/>
        </div>
      </AppBar>
    </div>
  );
}

// Component.propTypes = {
//   children: PropTypes.node,
//   className: PropTypes.string,
// };

export {
  Component as Header,
  Component as HeaderComponent,
};
