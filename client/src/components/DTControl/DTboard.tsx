import * as React from 'react';
import DTSwitch, { DTControl } from './DTSwitch';

// Could use a local state to store the DTs, but I think it's better to use
// the props to store the DTs. This way, the DTs can be passed in from the
// parent component.

function DTboard(props: { DTs?: DTControl[] }) {
  let DTOverview = <></>;
  if (props.DTs === undefined) {
    DTOverview = <p>No DTs</p>;
  } else {
    DTOverview = (
      <>
        {props.DTs.map((DT) => (
          <DTSwitch DT={DT} key={DT.id} />
        ))}
      </>
    );
  }

  return (
    <div>
      <h1>DTboard</h1>
      {DTOverview}
    </div>
  );
}

export default DTboard;
export type { DTControl };
