import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Login from './components/Login/Login';
import SPdetails from './components/Login/SPdetails';

class App extends Component {
  render() {
    return (
      // <div>
      //   <Login />
      // </div>
      <BrowserRouter>
        <div className="App">

          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
