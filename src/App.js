import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import './App.css';

import HomePage from './pages/homepage/HomePage.component';
import Shop from './pages/shop/Shop.component';
import Header from './components/header/Header.component';
import Authentication from './pages/authentication/Authentication.component';
import Checkout from './pages/checkout/Checkout.component';

import {selectCurrentUser} from './redux/user/user.selectors'
import ScrollToTop from "./components/Utilities/ScrollToTop.component";

class App extends Component {
    unsubscribedFromAuth = null;

    componentDidMount() {

        // this.unsubscribedFromAuth = auth.onAuthStateChanged(async userAuth => {
        //     if (userAuth) {
        //         const userRef = await createUserProfileDocument(userAuth);
        //
        //         userRef.onSnapshot(snapShot => {
        //             setCurrentUser({
        //                 id: snapShot.id,
        //                 ...snapShot.data()
        //             });
        //         })
        //     }
        //
        //     setCurrentUser(userAuth)
        // })
    }

    componentWillUnmount() {
        // this.unsubscribedFromAuth()
    }

    render() {
        const {currentUser} = this.props;
        return (
            <div>
                <ScrollToTop />
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={Shop}/>
                    <Route exact path='/checkout' component={Checkout}/>
                    <Route exact path='/signin'
                           render={() => currentUser ? (<Redirect to='/'/>) : (<Authentication/>)}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);
