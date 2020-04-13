import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

import HomePage from './pages/homepage/HomePage.component';
import Shop from './pages/shop/Shop.component';
import Header from './components/header/Header.component';
import Authentication from './pages/authentication/Authentication.component';
import Checkout from './pages/checkout/Checkout.component';

import {selectCurrentUser} from './redux/user/user.selectors'
import {checkUserSession} from "./redux/user/user.actions";
import ScrollToTop from "./components/Utilities/ScrollToTop.component";

const App = ({checkUserSession, currentUser}) => {

    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);

    return (
        <div>
            <ToastContainer/>
            <ScrollToTop/>
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
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
