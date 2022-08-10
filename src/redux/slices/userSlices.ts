// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  username: 'Joe',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = 'Joe';
    },
  },
});

export const { setUsername } = userSlice.actions;

export default userSlice.reducer;
