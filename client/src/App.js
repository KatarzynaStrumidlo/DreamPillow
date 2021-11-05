import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { store } from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { AllAuthors } from './components/views/AllAuthors/AllAuthors';
import { AllPaintings } from './components/views/AllPaintings/AllPaintings';
import { Author } from './components/views/Author/Author';
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
              <Route exact path='/authors' component={AllAuthors} />
              <Route exact path='/paintings' component={AllPaintings} />
              <Route exact path='/author/:id' component={Author} />
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
