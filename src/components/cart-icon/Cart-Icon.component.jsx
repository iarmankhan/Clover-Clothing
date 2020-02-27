
import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/images/shopping-bag.svg'

import './Cart-Icon.styles.scss';

const CartIcon = () => {
    return (
        <div className='cart-icon'>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    );
}
 
export default CartIcon;