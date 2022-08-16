import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, UserLoginAPIResponse } from '@Types/user';
import userService from '../../services/user.service';
import storage from '../../utils/asyncStorage';

export const updateUserAction: any = createAsyncThunk(
  'users/updateUser',
  async (data: User, { rejectWithValue }) => {
    try {
      const result = await userService.updateUser(data);
      return { ...result };
    } catch (error: any) {
      return rejectWithValue(error.code);
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
      return rejectWithValue(error.code);
    }
  }
);
