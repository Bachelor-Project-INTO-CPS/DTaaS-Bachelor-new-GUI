import * as React from 'react';
import Layout from 'page/Layout';
import TabComponent from 'components/tab/TabComponent';
import { TabData } from 'components/tab/subcomponents/TabRender';
// import { useURLforLIB } from 'util/envUtil';
import { Paper, Typography } from '@mui/material';
import { CardData } from 'components/AssetBoard/AssetCard';
import AssetBoard from 'components/AssetBoard';
import tabs from './LibraryTabData';

const cardData: CardData[] = [
  {
    name: 'fileTest1.somethingsdfsdfsdf',
    description: 'Aenean placerat. In vulputate urna',
    icon: 'description',
  },
  {
    name: 'folderTest1',
    description:
      'Morbi leo mi, nonummy eget, tristique non, rhoncus non, leo. Nullam faucibus mi quis velit. Integer in sapien. Fusce tellus',
    icon: 'folder',
  },
  {
    name: 'fileTest2',
    description:
      'Morbi leo mi, nonummy eget, tristique non, rhoncus non, leo. Nullam faucibus mi quis velit. Integer in sapien. Fusce tellus',
    icon: 'description',
  },
  {
    name: 'fileTest3',
    description: 'Aenean placerat. In vulputate urna',
    icon: 'description',
  },
  {
    name: 'folderTest1',
    description:
      'Praesent in mauris eu tortor porttitor accumsan. Mauris suscipit, ligula',
    icon: 'folder',
  },
  {
    name: 'fileTest3',
    description:
      'Morbi leo mi, nonummy eget, tristique non, rhoncus non, leo. Nullam faucibus mi quis velit. Integer in sapien. Fusce tellus',
    icon: 'description',
  },
  {
    name: 'folderTest1',
    description: 'Aenean placerat. In vulputate urna',
    icon: 'folder',
  },
];

function useLibraryData() {
  // const LIBurl = useURLforLIB();

  const tabsData: TabData[] = tabs.map((tab) => ({
    label: tab.label,
    body: (
      <>
        <Typography variant="body1">{tab.body}</Typography>
        <AssetBoard data={cardData} />
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
