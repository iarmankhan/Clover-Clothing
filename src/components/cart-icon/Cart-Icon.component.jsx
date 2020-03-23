
import React from 'react';
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect';

import {ReactComponent as ShoppingIcon} from '../../assets/images/shopping-bag.svg'

import './Cart-Icon.styles.scss';



const CartIcon = ({toggleCartDropdown, itemsCount}) => {
    return (
        <div className='cart-icon' onClick={toggleCartDropdown}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemsCount}</span>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

const mapStateToProps = createStructuredSelector({
    itemsCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
