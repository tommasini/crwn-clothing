import React from 'react';

import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

import './signi-in-and-out.scss';

const signInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
  <SignIn></SignIn>
  <SignUp></SignUp>
  </div>
)

export default signInAndSignUpPage;