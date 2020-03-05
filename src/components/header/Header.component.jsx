import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {auth} from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/images/four-leaf-clover.svg'

import './Header.styles.scss'
import CartIcon from '../cart-icon/Cart-Icon.component';
import CartDropdown from '../cart-dropdown/Cart-Dropdown.component';

import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'

const Header = ({ currentUser, hidden }) => {

    const toggleMobileMenu = e => {
        Array.from(document.querySelectorAll('li.item')).forEach(function(e) {
            if(e.classList.contains('active')){
                e.classList.remove('active')
                document.querySelector('li.toggle').classList.remove('active')
            }else{
                e.classList.add('active')
                document.querySelector('li.toggle').classList.add('active')
            }
        });
    };

    return (
        <div className='header'>
            <ul className="menu">
                <li className="logo">
                    <Link className='logo-container' to="/">
                        <Logo className='logo' />
                        <h3>Clover Clothing</h3>
                    </Link>
                </li>
                <li className="item"><Link className='option' to='/'>Home</Link></li>
                <li className="item"><Link className='option' to='/shop'>Shop</Link></li>
                <li className="item"><Link className='option' to='/contact'>Contact</Link></li>
                <li className="item"><Link className='option' to='/about'>About</Link></li>
                <li className="item button">
                    {
                        currentUser 
                        ? <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
                        : <Link className='option' to='/signin'>Sign In</Link>
                    }
                </li>
                <li className='cart-button'>
                <CartIcon />    
                    {
                        hidden
                        ? null
                        : <CartDropdown />
                    }
                </li>
                <li className='toggle' onClick={toggleMobileMenu}><span className='bars'></span></li>
            </ul>

            
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
 
export default connect(mapStateToProps)(Header);