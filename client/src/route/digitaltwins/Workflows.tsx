import * as React from 'react';
import Box from '@mui/material/Box';
import Iframe from 'components/Iframe';
import TabComponent, { TabData } from 'components/tab/Tab';

function Workflows() {
  // TODO: URL should depend on the selected tab. Get from .env
  const jupyterURL =
    'https://jupyterlite.github.io/demo/repl/index.html?kernel=javascript&toolbar=';

  const tabs: TabData[] = [
    {
      index: 0 as TabData['index'],
      label: 'Create',
      body: (
        <>
          Create digital twins from available library components. The text and
          graphical configuration of digital twins happen here.
          <Iframe url={jupyterURL} />
        </>
      ),
    },
    {
      index: 1 as TabData['index'],
      label: 'Execute',
      body: (
        <>
          Execute the digital twins with the DTaaS performing the automated
          deployment and execution. Potential realtime interactions must be
          possible. There should be an accordion of DT summary, Visualization,
          Output, Logs.
          <Iframe url={jupyterURL} />
        </>
      ),
    },
    {
      index: 2 as TabData['index'],
      label: 'Analyze',
      body: (
        <>
          Execution summary, output data in text and graphical formats.
          <Iframe url={jupyterURL} />
        </>
      ),
    },
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <TabComponent tabs={tabs} />
    </Box>
  );
}

export default Workflows;
