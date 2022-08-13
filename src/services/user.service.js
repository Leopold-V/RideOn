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

export const updateUser = async (body) => {
  const response = await fetch('http://localhost:3001/api/v1/users/01GAB4CF2ZECW5ZPJXXAG2KFVA', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...body }),
  });
  const data = await response.json();
  console.log(data);
};

export default { loginUser, createUser, updateUser };
