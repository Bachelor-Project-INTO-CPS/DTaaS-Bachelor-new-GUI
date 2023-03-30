import { Box, Typography } from '@mui/material';
import * as React from 'react';
import DTSwitch, { DTControl } from './DTSwitch';

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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        alignContent: 'stretch',
        flexWrap: 'wrap',
      }}
    >
      <Typography variant="h4" sx={{ textAlign: 'center' }}>
        Your Digital Twins
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {DTOverview}
      </Box>
    </Box>
  );
}

export default DTboard;
export type { DTControl };
