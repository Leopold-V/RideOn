import { createSlice } from '@reduxjs/toolkit';
import { isUserAuthAction, loginUserAction, updateUserAction } from '../actions/user.actions';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    user: null,
    users: null,
    loading: true,
    loadingData: false,
    loadingUsers: false,
    error: false,
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
      state.error = false;
      state.message = '';
    },
  },
  extraReducers: {
    [loginUserAction.pending]: (state) => {
      state.loadingData = true;
      state.loading = true;
    },
    [loginUserAction.fulfilled]: (state, action: any) => {
      state.loading = false;
      state.error = action.payload.error;
      state.message = action.payload.message;
      if (!action.payload.error) {
        state.isAuthenticated = true;
        state.user = action.payload.user;
      }
    },
    [loginUserAction.rejected]: (state, action: any) => {
      state.loading = false;
      state.loadingData = false;
      state.error = true;
      state.message = action.payload;
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
      state.error = true;
      state.message = action.payload;
    },
    [isUserAuthAction.pending]: (state) => {
      state.loading = true;
    },
    [isUserAuthAction.fulfilled]: (state, action: any) => {
      state.loading = false;
      state.error = action.payload.error;
      state.message = action.payload.message;
      if (!action.payload.error) {
        state.isAuthenticated = true;
        state.user = action.payload.user;
      }
    },
    [isUserAuthAction.rejected]: (state, action: any) => {
      state.loading = false;
      state.error = true;
      state.message = action.payload;
      state.isAuthenticated = false;
    },
  },
});

export const { noUser, loadAllUsers } = userSlice.actions;

export default userSlice.reducer;
