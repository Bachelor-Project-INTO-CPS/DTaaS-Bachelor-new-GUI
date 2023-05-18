import { Asset } from 'models/Asset';
import React from 'react';
import CartItemRender from './CartItemRender';

interface OwnProps {
  assets: Asset[];
}

function CartList(props: OwnProps) {
  return (
    <ul>
      {props.assets.map((a, i) => (
        <CartItemRender key={i} asset={a} ></CartItemRender>
      ))}
    </ul>
  );
}

export default CartList;
