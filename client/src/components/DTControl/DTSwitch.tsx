import * as React from 'react';

export interface DTControl {
  id: number;
  name: string;
  status: string;
}

function DTSwitch(props: { DT: DTControl }) {
  return (
    <div>
      <h1>DTSwitch{props.DT.id}</h1>
      <p>{props.DT.name}</p>
      <p>{props.DT.status}</p>
    </div>
  );
}

export default DTSwitch;
