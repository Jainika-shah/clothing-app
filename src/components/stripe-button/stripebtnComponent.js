import React from "react";

import StripeCheckout from "react-stripe-checkout";
import checkoutComponent from "../../pages/checkout/checkoutComponent";

const StripeCheckoutBtn = ({price}) =>{
    // stripe takes price in cents.
    console.log(price)
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_51JaebzSDzAulPHNIQrlZKN8MSuQIkoIwyslKr54G4DNqrtpE3Sp2pwwbY8eIdnHCsswnF4upW2vHNq7nLfrX1VFZ00nQ4twKsd';

    const onToken = token => {
        alert('Payment Successful')
    }
    return(
        <StripeCheckout 
        label = 'Pay Now'
        name='JS Clothing'
        billingAddress
        shippingAddress
        description={`Your total is $${price} `}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />


    )
}

export default StripeCheckoutBtn