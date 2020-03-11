import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {auth} from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/images/four-leaf-clover.svg'

import CartIcon from '../cart-icon/Cart-Icon.component';
import CartDropdown from '../cart-dropdown/Cart-Dropdown.component';

import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {
    CartButtonContainer,
    HeaderContainer,
    ItemContainer,
    LogoContainer,
    MenuContainer,
    ToggleContainer
} from "./Header.styles";

const Header = ({ currentUser, hidden }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <HeaderContainer>
            <MenuContainer>
                <LogoContainer>
                    <Link className='logo-container' to="/">
                        <Logo className='logo' />
                        <h3>Clover Clothing</h3>
                    </Link>
                </LogoContainer>
                <ItemContainer active={isActive}><Link to='/'>Home</Link></ItemContainer>
                <ItemContainer active={isActive}><Link to='/shop'>Shop</Link></ItemContainer>
                <ItemContainer active={isActive}><Link to='/contact'>Contact</Link></ItemContainer>
                <ItemContainer active={isActive}><Link to='/about'>About</Link></ItemContainer>
                <ItemContainer className='button' active={isActive}>
                    {
                        currentUser 
                        ? <div onClick={() => auth.signOut()}>Sign Out</div>
                        : <Link to='/signin'>Sign In</Link>
                    }
                </ItemContainer>
                <CartButtonContainer>
                    <CartIcon />
                    {
                        hidden
                        ? null
                        : <CartDropdown />
                    }
                </CartButtonContainer>
                <ToggleContainer active={isActive} onClick={() => setIsActive(!isActive)}><span className='bars'/></ToggleContainer>
            </MenuContainer>
        </HeaderContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});
 
export default connect(mapStateToProps)(Header);