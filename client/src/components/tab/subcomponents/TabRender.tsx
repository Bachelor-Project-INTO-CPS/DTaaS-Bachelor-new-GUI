import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { TabData } from 'components/tab/TabComponent';

interface TabRenderProps {
  children: TabData;
}

function TabRender(props: TabRenderProps) {
  const { children: tab } = props;

  return (
    <Box
      role="tabpanel"
      id={`simple-tabpanel-${tab.index}`}
      aria-labelledby={`simple-tab-${tab.index}`}
      sx={{
        p: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
      }}
    >
      <Typography
        sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
      >
        {tab.body}
      </Typography>
    </Box>
  );
}

export default TabRender;
