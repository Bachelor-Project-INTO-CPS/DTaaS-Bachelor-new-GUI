import * as React from 'react';
import Layout from 'page/Layout';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import RecentRuns from './RecentRuns';
import Logs from './Logs';

function HistoryContent() {
  return (
    <Layout>
      {/* Past Runs */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <RecentRuns />
        </Paper>
      </Grid>
      {/* Logs */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Logs />
        </Paper>
      </Grid>
    </Layout>
  );
}

export default function DTHistory() {
  return <HistoryContent />;
}
