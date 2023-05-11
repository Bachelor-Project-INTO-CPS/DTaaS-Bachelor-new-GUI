import * as React from 'react';
import Layout from 'page/Layout';
import TabComponent from 'components/tab/TabComponent';
import Iframe from 'components/Iframe';
import { TabData } from 'components/tab/subcomponents/TabRender';
import { useURLforLIB } from 'util/envUtil';
import { Typography } from '@mui/material';
import useAssets from 'util/apiUtil';
import tabs from './LibraryTabData';

function LibraryContent() {
  const LIBurl = useURLforLIB();
  const data = useAssets('/');

  // eslint-disable-next-line no-console
  console.log(data);

  const tabsData: TabData[] = tabs.map((tab) => ({
    label: tab.label,
    body: (
      <>
        <Typography variant="body1">{tab.body}</Typography>
        <Iframe title={`JupyterLight-Demo-${tab.label}`} url={LIBurl} />
      </>
    ),
  }));
  return (
    <Layout>
      <TabComponent tabs={tabsData} />
    </Layout>
  );
}

export default function Library() {
  return <LibraryContent />;
}
