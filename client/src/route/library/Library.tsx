import * as React from 'react';

import Grid from '@mui/material/Grid';
import Layout from 'page/Layout';
import LibComponents from './Components';

function LibraryContent() {
  return (
    <Layout>
      <Grid item xs={12} md={12} lg={12}>
        <LibComponents />
      </Grid>
    </Layout>
  );
}

export default function Library() {
  return <LibraryContent />;
}
