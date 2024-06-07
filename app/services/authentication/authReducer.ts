import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {login, LoginResponse, logout} from './AuthenticationAction.ts';

const initialState: AuthState = {
  user: null,
  token: null,
  connected: false,
  loading: false,
  error: null,
};

interface AuthState {
  user: string | null;
  token: string | null;
  connected: boolean;
  loading: boolean;
  error: string | null;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.pending, (state: AuthState) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      login.fulfilled,
      (state, action: PayloadAction<LoginResponse>) => {
        state.loading = false;
        state.user = action.payload.email;
        state.token = action.payload.token;
        state.connected = true;
        state.error = null;
      },
    );
    builder.addCase(login.rejected, (state, action: {payload: unknown}) => {
      state.loading = false;
      if (action.payload instanceof Error) {
        state.error = action.payload.message;
      } else {
        state.error = new Error('An unknown error occurred.').message;
      }
    });
    builder.addCase(logout.pending, (state: AuthState) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(logout.fulfilled, state => {
      state.loading = false;
      state.user = null;
      state.token = null;
      state.connected = false;
      state.error = null;
    });
    builder.addCase(logout.rejected, (state, action: {payload: unknown}) => {
      state.loading = false;
      if (action.payload instanceof Error) {
        state.error = action.payload.message;
      } else {
        state.error = new Error('An unknown error occurred.').message;
      }
    });
  },
});

export default authSlice.reducer;
