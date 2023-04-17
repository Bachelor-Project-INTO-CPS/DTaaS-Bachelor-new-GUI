import * as React from 'react';
import Layout from 'page/Layout';
import TabComponent, { TabData } from 'components/tab/TabComponent';
import Iframe from 'components/Iframe';
import tabs from './DigitalTwinData';

const jupyterURL = window.env.REACT_APP_URL_DT;

const tabData: TabData[] = tabs.map((tab, i) => ({
  label: tab.label,
  body: (
    <>
      {tab.body}
      {i === 0 && (
        <Iframe
          title={`JupyterLight-Demo-${tab.label}`}
          url={jupyterURL}
          fullsize
        />
      )}
    </>
  ),
}));

function DTContent() {
  return (
    <Layout>
      <TabComponent tabs={tabData} />
    </Layout>
  );
}

export default function DigitalTwins() {
  return <DTContent />;
}
