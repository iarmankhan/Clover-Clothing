import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/HomePage.component';
import Shop from './pages/shop/Shop.component';
import Header from './components/header/Header.component';
import Authentication from './pages/authentication/Authentication.component';

import { auth } from './firebase/firebase.utils';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribedFromAuth = null

  componentDidMount(){
    this.unsubscribedFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
    })
  }

  componentWillUnmount(){
    this.unsubscribedFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={Authentication} />
        </Switch>
      </div>
    );
  }
}

export default App;
