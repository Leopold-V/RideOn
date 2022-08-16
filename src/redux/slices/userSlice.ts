import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginUserAction, updateUserAction } from '../actions/user.actions';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    user: null,
    users: null,
    loading: true,
    loadingData: false,
    loadingUsers: true,
    error: '',
    message: '',
  },
  reducers: {
    loadAllUsers: (state, action: any) => {
      state.loadingUsers = false;
      state.users = action.payload;
    },
    noUser: (state) => {
      state.loading = false;
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: {
    [loginUserAction.pending]: (state) => {
      state.loadingData = true;
    },
    [loginUserAction.fulfilled]: (state, action: any) => {
      state.loading = false;
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.error = action.payload.error;
      state.message = action.payload.message;
    },
    [loginUserAction.rejected]: (state, action: any) => {
      state.loadingData = false;
      state.error = action.payload;
    },
    [updateUserAction.pending]: (state: any) => {
      state.loadingData = true;
    },
    [updateUserAction.fulfilled]: (state: any, action) => {
      state.loadingData = false;
      state.error = action.payload.error;
      state.message = action.payload.message;
      const user = state.user;
      user.firstname = action.payload.user.firstname;
      user.lastname = action.payload.user.lastname;
      user.email = action.payload.user.email;
      user.isOnline = action.payload.user.isOnline;
      user.friendslist = action.payload.user.friendslist;
    },
    [updateUserAction.rejected]: (state: any, action) => {
      state.loadingData = false;
      state.error = action.payload;
    },
  },
});

export const { noUser, loadAllUsers } = userSlice.actions;

export default userSlice.reducer;
