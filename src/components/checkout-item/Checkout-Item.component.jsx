import React from 'react';
import {connect} from 'react-redux'

import {clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions';

import './Checkout-Item.styles.scss'

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {imageUrl, name, quantity, price} = cartItem;

    return (
        <tr className='item'>
            <td className='image-container'>
                    <img src={imageUrl} alt="item"/>
            </td>
            <td>
                <span className='name'>{name}</span>
            </td>
            <td>
                <span className='quantity'>
                   <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
                   <span className='value'>{quantity}</span>
                   <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
                </span>
            </td>
            <td>
                <span className='price'>{price}</span>
            </td>
            <td>
                <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
            </td>
        </tr>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
