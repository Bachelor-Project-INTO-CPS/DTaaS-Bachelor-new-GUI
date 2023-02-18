import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel, { a11yProps } from 'components/TabPanel';

function Workflows() {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: number,
  ) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Create" {...a11yProps(0)} />
          <Tab label="Execute" {...a11yProps(1)} />
          <Tab label="Analyze" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <p>
          Create digital twins from available library components. The text and
          graphical configuration of digital twins happen here.
        </p>
        <iframe
          src="https://jupyterlite.github.io/demo/repl/index.html?kernel=javascript&toolbar=0"
          width="100%"
          height="500px"
        ></iframe>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Execute the digital twins with the DTaaS performing the automated
        deployment and execution. Potential realtime interactions must be
        possible. There should be an accordion of DT summary, Visualization,
        Output, Logs.
      </TabPanel>
      <TabPanel value={value} index={2}>
        Execution summary, output data in text and graphical formats
      </TabPanel>
    </Box>
  );
}

export default Workflows;
