import * as React from 'react';
import { Box } from '@mui/material';
import { TabData } from 'components/tab/TabComponent';

interface TabPanelProps {
  children: TabData;
  active?: boolean;
}

function TabPanel(props: TabPanelProps) {
  const { children: tab, active } = props;

  return (
    <Box
      role="tabpanel"
      display={active ? 'block' : 'none'}
      id={`simple-tabpanel-${tab.index}`}
      aria-labelledby={`simple-tab-${tab.index}`}
      sx={{
        p: 2,
        ...(tab.fullsize && active
          ? { display: 'flex', flexDirection: 'column', flexGrow: 1 }
          : { minHeight: '100%' }),
      }}
    >
      {tab.body}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default TabPanel;

export { a11yProps };
