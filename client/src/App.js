import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { store } from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { AllMaterials } from './components/views/AllMaterials/AllMaterials';
import { AllPaintings } from './components/views/AllPaintings/AllPaintings';
import { Material } from './components/views/Material/Material';
import { Painting } from './components/views/Painting/Painting';
import { Cart } from './components/views/Cart/Cart';
import { AddOrder } from './components/views/AddOrder/AddOrder';
import { NotFound } from './components/views/NotFound/NotFound';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider>
          <CssBaseline />
          <MainLayout>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/materials' component={AllMaterials} />
              <Route exact path='/paintings' component={AllPaintings} />
              <Route exact path='/material/:id' component={Material} />
              <Route exact path='/painting/:id' component={Painting} />
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
