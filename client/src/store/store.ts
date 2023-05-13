import { PreloadedState, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menu.slice';
import authReducer from './auth.slice';
import cartReducer from './CartStore/cart.slice';

const rootReducer = combineReducers({
  menu: menuReducer,
  auth: authReducer,
  cart: cartReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
