import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refresh } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const registerFulfilledReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};
const logInFulfilledReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};
const logOutFulfilledReducer = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};
const refreshPendingReducer = state => {
  state.isRefreshing = true;
};
const refreshFulfilledReducer = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
const refreshRejectedReducer = state => {
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, registerFulfilledReducer)
      .addCase(logIn.fulfilled, logInFulfilledReducer)
      .addCase(logOut.fulfilled, logOutFulfilledReducer)
      .addCase(refresh.pending, refreshPendingReducer)
      .addCase(refresh.fulfilled, refreshFulfilledReducer)
      .addCase(refresh.rejected, refreshRejectedReducer),
});

export const authReducer = authSlice.reducer;
