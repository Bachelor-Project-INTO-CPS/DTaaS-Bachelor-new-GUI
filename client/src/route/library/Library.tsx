import * as React from 'react';
import Layout from 'page/Layout';
import TabComponent from 'components/tab/TabComponent';
import { TabData } from 'components/tab/subcomponents/TabRender';
import { useURLforLIB } from 'util/envUtil';
import { Paper, Typography } from '@mui/material';
import AssetBoard from 'components/AssetBoard';
import tabs from './LibraryTabData';

function useLibraryData() {
  const LIBurl = useURLforLIB();

  const tabsData: TabData[] = tabs.map((tab) => ({
    label: tab.label,
    body: (
      <>
        <Typography variant="body1">{tab.body}</Typography>
        <AssetBoard pathToAssets={`${LIBurl}/${tab.label}`} />
      </>
    ),
  }));
  return tabsData;
}

function LibraryContent() {
  const tabsData = useLibraryData();
  return (
    <Layout>
      <div style={{ display: 'flex' }}>
        <TabComponent
          tabs={tabsData}
          sx={{ flexGrow: 2, marginRight: '2rem' }}
        />
        <Paper
          sx={{
            flexGrow: 1,
            minWidth: '20rem',
            textAlign: 'center',
            paddingTop: '2rem',
          }}
        >
          ShoppingCart
        </Paper>
      </div>
    </Layout>
  );
}

export default function Library() {
  return <LibraryContent />;
}
