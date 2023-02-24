import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel, { a11yProps } from 'components/tab/subcomponents/TabPanel';
import { useState, SyntheticEvent } from 'react';

type TabDataIndex = number & { readonly __tabDataIndex: unique symbol };

export interface TabData {
  index: TabDataIndex;
  label: string;
  body: JSX.Element;
}

function TabComponent(props: { tabs: TabData[] }) {
  const [activeTab, setSelectedTabIndex] = useState<number>(0);

  const handleTabChange = (
    _event: SyntheticEvent<Element, Event>,
    newValue: number
  ): void => {
    setSelectedTabIndex(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          aria-label="basic tabs example"
        >
          {props.tabs.map((tab) => (
            <Tab key={tab.index} label={tab.label} {...a11yProps(tab.index)} />
          ))}
        </Tabs>
      </Box>
      {props.tabs.map((tab) => (
        <TabPanel key={tab.index} value={activeTab} index={tab.index}>
          {tab.body}
        </TabPanel>
      ))}
    </>
  );
};

export default TabComponent;