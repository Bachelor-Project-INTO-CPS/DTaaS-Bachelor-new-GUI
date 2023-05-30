import * as menu from './Redux/slices/menu.slice';
import { useAppDispatch, useAppSelector } from './Redux/hooks';

function useApp() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((store) => store.menu);
  const actions = {
    open: () => {
      // eslint-disable-next-line no-console
      console.log('open');
      dispatch(menu.openMenu());
    },
    close: () => dispatch(menu.closeMenu()),
  };

  return { state, actions };
}

export default useApp;
