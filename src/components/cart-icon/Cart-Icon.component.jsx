
import React from 'react';
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

import {ReactComponent as ShoppingIcon} from '../../assets/images/shopping-bag.svg'

import './Cart-Icon.styles.scss';



const CartIcon = ({toggleCartDropdown}) => {
    return (
        <div className='cart-icon' onClick={toggleCartDropdown}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    );
}
 
const mapDispatchToProps = dispatch => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
})

export default connect(null, mapDispatchToProps)(CartIcon);