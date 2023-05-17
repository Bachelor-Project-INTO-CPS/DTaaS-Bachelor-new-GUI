import { Asset } from 'models/Asset';
import React from 'react';

interface OwnProps {
  assets: Asset[];
}

function CartList(props: OwnProps) {
  return (
    <ul>
      {props.assets.map((a, i) => (
        <li key={i}>{a.path}</li>
      ))}
    </ul>
  );
}

export default CartList;
