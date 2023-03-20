import * as React from 'react';
import Grid from '@mui/material/Grid';
import Layout from 'page/Layout';
import Workflows from './Workflows';

function SAnalysisContent() {
  return (
    <Layout>
      <Grid item xs={12} md={12} lg={12}>
        <Workflows />
      </Grid>
    </Layout>
  );
}

export default function ScenarioAnalysis() {
  return <SAnalysisContent />;
}
