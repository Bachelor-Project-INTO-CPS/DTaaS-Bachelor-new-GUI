import { useSelector } from 'react-redux';
import * as Cart from './CartStore/cart.slice';
import { RootState } from './store';

function useCart() {
  const { addToCart, removeFromCart, clearCart } = Cart;
  const actions = {
    addToCart,
    removeFromCart,
    clearCart,
  };
  const state = useSelector((store: RootState) => store.cart);

  return { state, actions };
}

export default useCart;
