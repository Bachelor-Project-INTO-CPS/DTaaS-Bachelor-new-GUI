/* eslint-disable no-param-reassign  */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AuthState {
  user: string;
}

const initState: AuthState = {
  user: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initState,
  reducers: {
    setUser: (state: AuthState, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
