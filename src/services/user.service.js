import storage from '../utils/asyncStorage';

export const loginUser = async (email, password) => {
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
  const data = await response.json();
  return data;
};

export const createUser = async (body) => {
  const response = await fetch('http://localhost:3001/api/v1/users/signup', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...body }),
  });
  const data = await response.json();
  console.log(data);
};

export const updateUser = async (body, id) => {
  const result = await storage.getData('token');
  if (!result.error) {
    const response = await fetch(`http://localhost:3001/api/v1/users/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + result.token,
      },
      body: JSON.stringify({ ...body }),
    });
    const data = await response.json();
    console.log(data);
  } else {
    return result;
  }
};

export const getUser = async (id) => {
  const result = await storage.getData('token');
  if (!result.error) {
    const response = await fetch(`http://localhost:3001/api/v1/users/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + result.token,
      },
    });
    console.log(response.ok);
    const data = await response.json();
    return data;
  } else {
    return result;
  }
};

export const isUserAuth = async () => {
  const result = await storage.getData('token');
  if (!result.error) {
    const response = await fetch(`http://localhost:3001/api/v1/users/auth`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + result.token,
      },
    });
    const data = await response.json();
    return data;
  } else {
    return result;
  }
};

export default { loginUser, createUser, updateUser, getUser, isUserAuth };
