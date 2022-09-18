import React from 'react'

import { loginUserAction } from '../redux/actions/user.actions';

import { Layout } from '@Components/Layout';
import { useAppDispatch } from '../redux/hooks';
import { ButtonPrimary } from '@Components/Common/Button';

export const SignIn = () => {
    const dispatch = useAppDispatch();

    const loginUser = async () => {
        try {
          const credentials = {
            email: 'johndoe4@gmail.com',
            password: '1234567',
          };
          dispatch(loginUserAction(credentials));
        } catch (e: any) {
          console.log(e.message);
        }
      };

  return (
    <Layout>
      <ButtonPrimary title="Login" onPress={loginUser} />
    </Layout>
  )
}
  