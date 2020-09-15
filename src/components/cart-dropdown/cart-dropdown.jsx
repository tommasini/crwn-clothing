import React from 'react';

import CustomButtom from '../custom-bottom/custom-button';

import './cart-dropdown.scss';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items'></div>
    <CustomButtom>Go To CHeckout</CustomButtom>
  </div>
)

export default CartDropdown;