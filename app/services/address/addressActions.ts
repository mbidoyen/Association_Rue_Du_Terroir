import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BACK_URI_GET_ALL_ADDRESSES} from '../../constantes/backend_uri.tsx';

export const fetchAddresses = createAsyncThunk(
  'addresses/fetchAddresses',
  async () => {
    try {
      const response = await axios.get(BACK_URI_GET_ALL_ADDRESSES);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
);
