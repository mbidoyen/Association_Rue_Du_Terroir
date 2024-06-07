import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AddressValues, fetchAddresses} from './addressActions.ts';

export interface AddressState {
  isLoading: boolean;
  error?: Error;
  addresses: AddressValues[];
}

const initialState: AddressState = {
  isLoading: false,
  error: undefined,
  addresses: [],
};

export const addressSlice = createSlice({
  name: 'addresses',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAddresses.pending, (state: AddressState) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(
      fetchAddresses.fulfilled,
      (state, action: PayloadAction<AddressValues[]>) => {
        state.isLoading = false;
        state.addresses = action.payload;
      },
    );
    builder.addCase(
      fetchAddresses.rejected,
      (state, action: {payload: unknown}) => {
        state.isLoading = false;
        if (action.payload instanceof Error) {
          state.error = action.payload;
        } else {
          state.error = new Error('An unknown error occurred.');
        }
      },
    );
  },
});

export default addressSlice.reducer;
