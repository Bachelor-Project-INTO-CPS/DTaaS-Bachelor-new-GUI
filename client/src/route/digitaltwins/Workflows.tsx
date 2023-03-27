import * as React from 'react';
import Iframe from 'components/Iframe';
import TabComponent, {
  createTabData,
  TabData,
} from 'components/tab/TabComponent';
import DTboard, { DTControl } from 'components/DTControl/DTboard';
import tabs from './WorkflowsData';

const DTs: DTControl[] = [
  {
    id: '1',
    name: 'DT1',
    status: 'on',
  },
  {
    id: '2',
    name: 'DT2',
    status: 'off',
  },
  {
    id: '3',
    name: 'DT3',
    status: 'on',
  },
];

const jupyterURL = window.env.REACT_APP_URL_DT;

const tabData: TabData[] = createTabData(
  tabs.map((tab, i) => ({
    label: tab.label,
    body: (
      <>
        {tab.body}
        {tab.label === 'Execute' && <DTboard DTs={DTs} />}
        {i === 0 && tab.label !== 'Execute' && (
          <Iframe
            title={`JupyterLight-Demo-${tab.label}`}
            url={jupyterURL}
            fullsize
          />
        )}
      </>
    ),
  })),
  true
);

function Workflows() {
  return <TabComponent tabs={tabData} />;
}

export default Workflows;
