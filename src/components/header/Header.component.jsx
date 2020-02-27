import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {auth} from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/images/four-leaf-clover.svg'

import './Header.styles.scss'

const Header = ({ currentUser }) => {
    return (
        <div className='header'>
            <Link className='logo-container' to="/">
                <Logo className='logo' />
                <h3>Clover Clothing</h3>
            </Link>
            <div className="options">
                <Link className='option' to='/shop'>Shop</Link>
                <Link className='option' to='/contact'>Contact</Link>
                <Link className='option' to='/about'>About</Link>
                {
                    currentUser 
                    ? <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
                    : <Link className='option' to='/signin'>Sign In</Link>
                }
                
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})
 
export default connect(mapStateToProps)(Header);