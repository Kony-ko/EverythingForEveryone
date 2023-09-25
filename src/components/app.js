import React, { Component } from 'react';
import { Header } from "./header/index";
import 'boxicons';
import { BrowserRouter as Router } from 'react-router-dom';
import { Pages } from './pages';
import { DataProvider } from '../context/dataProvider';
import { Cart } from './cart/index';

export default class App extends Component {
  render() {
    return (
      <DataProvider>
        <div className='app'>
          <Router>
            <Header />
            <Cart />
            <Pages />
          </Router>
        </div>
      </DataProvider>
    );
  }
}
