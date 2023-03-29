import { Card, CardContent, Switch, Typography } from '@mui/material';
import * as React from 'react';

export interface DTControl {
  id: number;
  name: string;
  running: boolean;
}

// TODO: Add waiting animation and disable switch

function DTSwitch(props: { DT: DTControl }) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line no-alert
    alert(
      `DT ${props.DT.name} is ${event.target.checked ? 'running' : 'stopped'}
      We should send a request to the backend to change the state of the DT.
      State should update with setState from the parent component.`
    );
  };

  // OBS, MUI-Switch will inherent from Button

  return (
    <Card
      sx={{
        width: '30%',
        margin: '1rem',
        minWidth: '16rem',
        height: 'fit-content',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5">{props.DT.name}</Typography>
        <Switch
          aria-label={`DT${props.DT.id}`}
          checked={props.DT.running}
          onChange={handleChange}
        />
      </CardContent>
    </Card>
  );
}

export default DTSwitch;
