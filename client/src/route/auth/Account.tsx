import * as React from 'react';
import Grid from '@mui/material/Grid';
import Layout from 'page/Layout';
import AccountTabs from './AccountTabs';

const DTContent: React.FC = () => (
  <Layout>
    <Grid item xs={12} md={12} lg={12}>
      <AccountTabs />
    </Grid>
  </Layout>
);

const DigitalTwins: React.FC = () => <DTContent />; /* jshint ignore:line */
export default DigitalTwins;
