import {configureStore} from '@reduxjs/toolkit';
import addressReducer from './services/address/addressReducer.ts';
import authReducer from './services/authentication/authReducer.ts';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    addresses: addressReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
