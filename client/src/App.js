import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { store } from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { AllMaterials } from './components/views/AllMaterials/AllMaterials';
import { AllTypes } from './components/views/AllTypes/AllTypes';
import { Material } from './components/views/Material/Material';
import { Type } from './components/views/Type/Type';
import { Cart } from './components/views/Cart/Cart';
import { AddOrder } from './components/views/AddOrder/AddOrder';
import { NotFound } from './components/views/NotFound/NotFound';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
  },
});

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/materials' component={AllMaterials} />
              <Route exact path='/types' component={AllTypes} />
              <Route exact path='/material/:id' component={Material} />
              <Route exact path='/type/:id' component={Type} />
              <Route exact path='/order' component={AddOrder} />
              <Route exact path='/cart' component={Cart} />
              <Route path='*' component={NotFound} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };
