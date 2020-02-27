import React from 'react';

import CustomButton from '../custom-button/CustomButton.component'

import './Cart-Dropdown.styles.scss'

const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">

            </div>
            <CustomButton>Checkout</CustomButton>
        </div>
    );
}
 
export default CartDropdown;