import * as React from 'react';
import Layout from 'page/Layout';
import TabComponent from 'components/tab/TabComponent';
import Iframe from 'components/Iframe';
import { TabData } from 'components/tab/subcomponents/TabRender';
import { useURLforLIB } from 'util/envUtil';
import { Typography } from '@mui/material';
import { CardData } from 'components/card/AssetCard';
import AssetBoard from 'components/card/AssetBoard';
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
  const LIBurl = useURLforLIB();
  const tabsData: TabData[] = tabs.map((tab) => ({
    label: tab.label,
    body: (
      <>
        <Typography variant="body1">{tab.body}</Typography>
        {tab.label === 'Functions' && <AssetBoard data={cardData} />}
        {tab.label !== 'Functions' && (
          <Iframe title={`JupyterLight-Demo-${tab.label}`} url={LIBurl} />
        )}
      </>
    ),
  }));
  return tabsData;
}

function LibraryContent() {
  const tabsData = useLibraryData();
  return (
    <Layout>
      <TabComponent tabs={tabsData} />
    </Layout>
  );
}

export default function Library() {
  return <LibraryContent />;
}
