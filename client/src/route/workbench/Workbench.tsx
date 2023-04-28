import { Paper } from '@mui/material';
import LinkButtons from 'components/LinkButtons';
import Layout from 'page/Layout';
import * as React from 'react';
import styled from '@emotion/styled';
import { getWorkbenchLinkValues } from 'util/envUtil';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

function WorkBenchContent() {
  const linkValues = getWorkbenchLinkValues();
  return (
    <Layout>
      <Paper
        sx={{
          p: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        <h1>Workbench Tools</h1>
        <Container>
          <LinkButtons buttons={linkValues} size={6} />
        </Container>
      </Paper>
    </Layout>
  );
}

export default function WorkBench() {
  return <WorkBenchContent />;
}
