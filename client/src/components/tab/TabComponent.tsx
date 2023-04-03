import * as React from 'react';
import { Paper } from '@mui/material';
import TabRender from './subcomponents/TabRender';
import { Tab, TabList, TabPanel, Tabs } from './subcomponents/TabStyles';

type TabDataIndex = number & { readonly __tabDataIndex: unique symbol };

export interface TabData {
  index: TabDataIndex;
  label: string;
  body: JSX.Element;
  fullsize?: boolean;
}

export function createTabData(
  tabs: { label: string; body: JSX.Element }[],
  fullsize?: boolean
): TabData[] {
  return tabs.map(({ label, body }, index) => ({
    index: index as TabDataIndex,
    label,
    body,
    fullsize,
  }));
}

function TabComponent(props: { tabs: TabData[] }) {
  return (
    <Paper
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
      }}
    >
      <Tabs>
        <TabList>
          {props.tabs.map((tab) => (
            <Tab key={tab.index}>{tab.label}</Tab>
          ))}
        </TabList>
        {props.tabs.map((tab) => (
          <TabPanel key={tab.index}>
            <TabRender>{tab}</TabRender>
          </TabPanel>
        ))}
      </Tabs>
    </Paper>
  );
}

export default TabComponent;
