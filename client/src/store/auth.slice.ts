import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AuthState {
  user: string | undefined;
}

const initState: AuthState = {
  user: undefined,
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
