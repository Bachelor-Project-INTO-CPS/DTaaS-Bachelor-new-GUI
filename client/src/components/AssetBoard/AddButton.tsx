import * as React from 'react';
import { Button } from '@mui/material';
import { Asset } from 'models/Asset';
import useCart from 'store/useCart';

function AddButton(asset: Asset) {
  const { state, actions } = useCart();
  return (
    <Button
      variant="contained"
      fullWidth
      disabled={state.assets.includes(asset)}
      size="small"
      color="primary"
      onClick={() => {
        // eslint-disable-next-line no-console
        console.log(state.assets.length);
        actions.addToCart(asset);
        // eslint-disable-next-line no-console
        console.log(state.assets.length);
      }}
    >
      Select
    </Button>
  );
}

export default AddButton;
