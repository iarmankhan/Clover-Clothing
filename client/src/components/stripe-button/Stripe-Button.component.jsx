import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_30NWVlwAGQnWr0iBeOPw7s9a00P7uXtDB7';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'POST',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert("Payment Successful!");
        }).catch(error => {
            console.log("Payment error ", error);
            alert('There was a issue with your payment. Please make sure you use the provided credit card');
        });
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='Clover Clothing'
            billingAddress
            shippingAddress
            image="https://i.imgur.com/HKhFd1h.png"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton
