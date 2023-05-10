import * as React from 'react';
import { Button } from '@mui/material';

// Logic for AddToCart(card: CardData)

function AddButton(/* card: CardData */) {
  return (
    <Button
      variant="contained"
      fullWidth
      size="small"
      color="primary"
      /* onClick={AddToCart(card)} */
    >
      Select
    </Button>
  );
}

export default AddButton;
