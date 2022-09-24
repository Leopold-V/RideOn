import { User, UserAPIResponse, UserLoginAPIResponse } from '@Types/user';
import storage from '../utils/asyncStorage';

export const loginUser = async (email: string, password: string): Promise<UserLoginAPIResponse> => {
  const response = await fetch('http://localhost:3001/api/v1/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const data: UserLoginAPIResponse = await response.json();
  return data;
};

export const createUser = async (user: User): Promise<UserAPIResponse> => {
  const response = await fetch('http://localhost:3001/api/v1/users/signup', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...user }),
  });
  const data: UserAPIResponse = await response.json();
  return data;
};

export const updateUser = async (user: User, token: string): Promise<UserAPIResponse> => {
  const response = await fetch(`http://localhost:3001/api/v1/users/${user.id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify({ ...user }),
  });
  const data: UserAPIResponse = await response.json();
  console.log(data);
  return data;
};

export const getUser = async (id: string): Promise<UserAPIResponse> => {
  const result = await storage.getData('token');
  if (!result.error) {
    const response = await fetch(`http://localhost:3001/api/v1/users/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + result.token,
      },
    });
    const data: UserAPIResponse = await response.json();
    return data;
  } else {
    return result;
  }
};

export const isUserAuth = async (token: string): Promise<UserAPIResponse> => {
  const response = await fetch(`http://localhost:3001/api/v1/users/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: token }),
  });
  const data = await response.json();
  return data;
};

export default { loginUser, createUser, updateUser, getUser, isUserAuth };
