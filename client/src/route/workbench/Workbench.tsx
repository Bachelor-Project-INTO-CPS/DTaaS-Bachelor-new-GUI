import { Paper } from '@mui/material';
import WorkbenchButtons from 'components/WorkbenchButtons';
import Layout from 'page/Layout';
import * as React from 'react';
import styled from '@emotion/styled';
import buttons from './WorkbenchButtonData';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Title = styled.h1`
  position: absolute;
  margin-left: 30px;
  top: 10px;
`;

function WorkBenchContent() {
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
        <Title>Workbench Tools</Title>
        <Container>
          <WorkbenchButtons buttons={buttons} />
        </Container>
      </Paper>
    </Layout>
  );
}

export default function WorkBench() {
  return <WorkBenchContent />;
}
