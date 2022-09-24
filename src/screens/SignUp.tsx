import React from 'react';

import { useAppDispatch } from '../redux/hooks';
import { loginUserAction } from '../redux/actions/user.actions';
import userService from '../services/user.service';
import { User } from '@Types/user';

import { Layout } from '@Components/Layout';
import { ButtonPrimary } from '@Components/Common/Button';

export const SignUp = () => {
  const dispatch = useAppDispatch();

  const createUser = async () => {
    const user: User = {
      firstname: 'John5',
      lastname: 'Doe5',
      password: '1234567',
      email: 'johndoe5@gmail.com',
    };
    try {
      const response = await userService.createUser(user);
      response.error
        ? console.log(response.message)
        : dispatch(loginUserAction({ email: user.email, password: user.password }));
    } catch (e: any) {
      console.log(e.message);
    }
  };
  return (
    <Layout>
      <ButtonPrimary title="Create a user" onPress={createUser} />
    </Layout>
  );
};
