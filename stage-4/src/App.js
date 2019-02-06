import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import StoreFront from './components/StoreFront/StoreFront';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/storefront" component={StoreFront} />
            <Route path="/shoppingcart" component={ShoppingCart} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
