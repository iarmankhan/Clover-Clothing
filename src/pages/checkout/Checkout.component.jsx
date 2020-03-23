import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import './Checkout.styles.scss'
import CheckoutItem from '../../components/checkout-item/Checkout-Item.component';
import StripeCheckoutButton from "../../components/stripe-button/Stripe-Button.component";

const Checkout = ({cartItems, total}) => {
    return (
        <div className='checkout-page'>
            <table className='checkout-items'>
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
            </table>
            <div className='total'>
                <span>Total: ${total}</span>
            </div>
            <div className="test-warning">
                Test Card
                <p>4242 4242 4242 4242 - Exp: 01/21 - CVV: 123</p>
            </div>
            <StripeCheckoutButton price={total} />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
