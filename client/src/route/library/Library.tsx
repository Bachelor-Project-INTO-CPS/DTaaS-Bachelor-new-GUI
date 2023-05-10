import * as React from 'react';
import Layout from 'page/Layout';
import TabComponent from 'components/tab/TabComponent';
import Iframe from 'components/Iframe';
import { TabData } from 'components/tab/subcomponents/TabRender';
import { useURLforLIB } from 'util/envUtil';
import { Typography } from '@mui/material';
import { CardData } from 'components/card/CardComponent';
import CardContainer from 'components/card/CardContainer';
import tabs from './LibraryTabData';

const cardData: CardData[] = [
  {
    title: 'fileTest1',
    description: 'Small description of fileTest1',
    icon: 'description',
  },
  {
    title: 'folderTest1',
    description:
      'Small description of folderTest1 bla bla bla esdrfsd sdf  asd as df sdfas',
    icon: 'folder',
  },
  {
    title: 'fileTest2',
    description: 'Small description of fileTest2',
    icon: 'description',
  },
  {
    title: 'fileTest3',
    description: 'Small description of fileTest3',
    icon: 'description',
  },
  {
    title: 'folderTest1',
    description:
      'Small description of folderTest1 bla bla bla esdrfsd sdf  asd as df sdfas',
    icon: 'folder',
  },
  {
    title: 'fileTest3',
    description: 'Small description of fileTest3',
    icon: 'description',
  },
  {
    title: 'folderTest1',
    description:
      'Small description of folderTest1 bla bla bla esdrfsd sdf  asd as df sdfas',
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
        {tab.label === 'Functions' && <CardContainer data={cardData} />}
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
