import * as React from 'react';

export interface DTControl {
  id: number;
  name: string;
  status: string;
}

function DTSwitch(props: { DT: DTControl }) {
  return (
    <div>
      <h1>DTSwitch</h1>
      <p>
        {props.DT.name} + {props.DT.status}
      </p>
    </div>
  );
}

export default DTSwitch;
