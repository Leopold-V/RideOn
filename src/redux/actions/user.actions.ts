import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, UserAPIResponse, UserLoginAPIResponse } from '@Types/user';
import userService from '../../services/user.service';
import storage from '../../utils/asyncStorage';

export const updateUserAction: any = createAsyncThunk(
  'users/updateUser',
  async (data: User, { rejectWithValue }) => {
    try {
      const tokenData = await storage.getData('token');
      if (tokenData.token) {
        const result = await userService.updateUser(data, tokenData.token);
        return { ...result };
      } else {
        throw new Error(tokenData.message);
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const isUserAuthAction: any = createAsyncThunk(
  'users/isUserAuth',
  async (data, { rejectWithValue }) => {
    try {
      const tokenData = await storage.getData('token');
      if (tokenData.token) {
        const result: any = await userService.isUserAuth(tokenData.token);
        return { ...result };
      } else {
        throw new Error(tokenData.message);
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUserAction: any = createAsyncThunk(
  'users/loginUser',
  async (data: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const result: UserLoginAPIResponse = await userService.loginUser(data.email, data.password);
      if (!result.error) {
        await storage.storeData('token', result.token);
      }
      return { ...result };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const newUserAction: any = createAsyncThunk(
  'users/newUser',
  async (data: User, { rejectWithValue }) => {
    try {
      const result: UserAPIResponse = await userService.createUser(data);
      return { ...result };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
