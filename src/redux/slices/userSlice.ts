import { createSlice } from '@reduxjs/toolkit';
import { isUserAuthAction, loginUserAction, updateUserAction } from '../actions/user.actions';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    user: null,
    users: null,
    loadingApp: true,
    loadingLogin: false,
    loadingUsers: false,
    showSnackbar: false,
    error: false,
    message: '',
  },
  reducers: {
    loadAllUsers: (state, action: any) => {
      state.loadingUsers = false;
      state.users = action.payload;
    },
    noUser: (state) => {
      state.loadingApp = false;
      state.user = null;
      state.isAuthenticated = false;
      state.error = false;
      state.message = '';
    },
    hideSnackbar: (state) => {
      state.showSnackbar = false;
    },
  },
  extraReducers: {
    [loginUserAction.pending]: (state) => {
      state.loadingLogin = true;
      state.error = false;
      state.message = '';
      state.showSnackbar = false;
    },
    [loginUserAction.fulfilled]: (state, action: any) => {
      state.loadingLogin = false;
      state.error = action.payload.error;
      state.message = action.payload.message;
      if (!action.payload.error) {
        state.isAuthenticated = true;
        state.user = action.payload.user;
      } else {
        state.showSnackbar = true;
      }
    },
    [loginUserAction.rejected]: (state, action: any) => {
      state.loadingLogin = false;
      state.error = true;
      state.message = action.payload;
      state.showSnackbar = true;
    },
    [updateUserAction.pending]: (state: any) => {
      state.loadingApp = true;
    },
    [updateUserAction.fulfilled]: (state: any, action) => {
      state.loadingApp = false;
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
      state.loadingApp = false;
      state.error = true;
      state.message = action.payload;
    },
    [isUserAuthAction.pending]: (state) => {
      state.loadingApp = true;
    },
    [isUserAuthAction.fulfilled]: (state, action: any) => {
      state.loadingApp = false;
      state.error = action.payload.error;
      state.message = action.payload.message;
      if (!action.payload.error) {
        state.isAuthenticated = true;
        state.user = action.payload.user;
      }
    },
    [isUserAuthAction.rejected]: (state, action: any) => {
      state.loadingApp = false;
      state.error = true;
      state.message = action.payload;
      state.isAuthenticated = false;
    },
  },
});

export const { noUser, loadAllUsers, hideSnackbar } = userSlice.actions;

export default userSlice.reducer;
