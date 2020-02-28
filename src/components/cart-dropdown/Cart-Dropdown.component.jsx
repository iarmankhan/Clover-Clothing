import React from 'react';

import CustomButton from '../custom-button/CustomButton.component'

import './Cart-Dropdown.styles.scss'
import { connect } from 'react-redux';
import CartItem from '../cart-item/Cart-Item.component';

import {selectCartItems} from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect';

const CartDropdown = ({cartItems}) => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
            {
                cartItems.map(item => <CartItem key={item.id} item={item} />)
            }
            </div>
            <CustomButton>Checkout</CustomButton>
        </div>
    );
}
 
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);