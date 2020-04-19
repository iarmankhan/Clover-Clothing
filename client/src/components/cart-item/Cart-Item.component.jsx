import React from 'react';

import {CartItemContainer, CartItemDetails} from "./Cart-Item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
        <CartItemContainer>
            <img src={imageUrl} alt="item"/>
            <CartItemDetails>
                <span className="name">{name}</span>
                <span className="price">{quantity} x ${price}</span>
            </CartItemDetails>
        </CartItemContainer>
    );
};

export default CartItem;
