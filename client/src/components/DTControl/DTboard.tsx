import * as React from 'react';
import DTSwitch, { DTControl } from './DTSwitch';

function DTboard(props: { DTs: DTControl[] }) {
  return (
    <div>
      <h1>DTboard</h1>
      {props.DTs.map((DT) => (
        <DTSwitch DT={DT} key={DT.id} />
      ))}
    </div>
  );
}

export default DTboard;
export type { DTControl };
