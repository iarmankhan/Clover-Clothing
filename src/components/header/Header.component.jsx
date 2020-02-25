import React from 'react';
import {Link} from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/images/four-leaf-clover.svg'

import './Header.styles.scss'

const Header = () => {
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
            </div>
        </div>
    );
}
 
export default Header;