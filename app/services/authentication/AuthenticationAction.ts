import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {
  BACK_URI_AUTHENTICATION,
  BACK_URI_LOGOUT,
} from '../../constantes/backend_uri.tsx';
import {useNavigation} from '@react-navigation/native';
import NavigationType from '../../routes/NavigationType.ts';

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  email: string;
  token: string;
}

export const login = createAsyncThunk<LoginResponse, LoginData>(
  'auth/login',
  async (data: LoginData) => {
    try {
      const response = await axios.post(
        BACK_URI_AUTHENTICATION,
        JSON.stringify(data),
        {
          headers: {'Content-Type': 'application/json'},
        },
      );
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async (token: string) => {
  try {
    const response = await axios.post(BACK_URI_LOGOUT, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    throw error;
  }
});
