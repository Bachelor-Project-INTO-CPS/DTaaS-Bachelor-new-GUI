import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Asset } from 'models/asset';

interface CartState {
  assets: Asset[];
}

const initState: CartState = {
  assets: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<Asset>) => {
      if (!state.assets.includes(action.payload))
        state.assets.push(action.payload);
    },
    removeFromCart: (state: CartState, action: PayloadAction<Asset>) => {
      state.assets.filter((a) => a !== action.payload);
    },
    clearCart: (state: CartState) => {
      state.assets = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
