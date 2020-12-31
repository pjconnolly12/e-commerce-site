import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from './Navbar';
import { Homepage } from './Homepage';
import { CategoryPage } from './CategoryPage';
import { ProductPage } from './ProductPage';
import { CartPage } from './CartPage';
import { SearchResults } from './SearchResults';
import { Checkout } from './Checkout';

export const App = (): JSX.Element => {
  return (
  <Router>
    <Navbar />
    <Switch>
      <Route path='/categories/:category'>
        <CategoryPage />
      </Route>
      <Route path='/product/:id'>
        <ProductPage />
      </Route>
      <Route path='/cart'>
        <CartPage />
      </Route>
      <Route path='/results'>
        <SearchResults />
      </Route>
      <Route path='/checkout'>
        <Checkout />
      </Route>
      <Route path='/'>
        <Homepage />
      </Route>
    </Switch>
  </Router>
  )
}