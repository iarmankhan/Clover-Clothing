import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/CustomButton.component'
import CartItem from '../cart-item/Cart-Item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors'
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

import {CartDropdownContainer, CartDropdownItems} from "./Cart-Dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <CartDropdownContainer>
            <CartDropdownItems>
            {   cartItems.length
                ? cartItems.map(item => <CartItem key={item.id} item={item} />)
                : <span className='empty-message'>Your cart is empty</span>
            }
            </CartDropdownItems>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartDropdown())
            }}>Checkout</CustomButton>
        </CartDropdownContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
