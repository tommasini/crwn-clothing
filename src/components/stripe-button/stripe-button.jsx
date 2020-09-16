import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HRwecGVyrra7eZAkBYDlTSd64wprNmdQCsoG9FnYb8hYQBNSaweAq77wtVzBUgOi5nUA5lDcZXyIT8aMRutc4q900UMEUxVGn';
  
  const onToken = token => {
  console.log(token);
  alert('Payment Successful');
}

  return (
    <StripeCheckout label='Pay Now' name='CRWN Clothing Ltd.'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your total is ${price}€`}
    amount= {priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey= {publishableKey}

    />
  )
};

export default StripeCheckoutButton;