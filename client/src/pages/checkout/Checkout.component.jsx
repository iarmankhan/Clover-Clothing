import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/Checkout-Item.component';
import StripeCheckoutButton from "../../components/stripe-button/Stripe-Button.component";
import {CheckOut, CheckOutItems} from "./Checkout.styles";

const Checkout = ({cartItems, total}) => {
    return (
        <CheckOut>
            <CheckOutItems>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                {
                    cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
                }
                </tbody>
            </CheckOutItems>
            <div className='total'>
                <span>Total: ${total}</span>
            </div>
            <div className="test-warning">
                Test Card
                <p>4242 4242 4242 4242 - Exp: 01/21 - CVV: 123</p>
            </div>
            <StripeCheckoutButton price={total} />
        </CheckOut>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
