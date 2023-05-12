import * as React from 'react';
import { Grid } from '@mui/material';
import { Asset } from 'models/Asset';
import AssetCard from './AssetBoard/AssetCard';

const useAssetsFake = (path: string): Asset[] => [
  {
    name: 'folderTest1.somethingsdfsdfsdf',
    description: 'Aenean placerat. In vulputate urna',
    isDir: true,
    path,
  },
  {
    name: 'folderTest2.something',
    isDir: true,
    path,
  },
  {
    name: 'folderTest3',
    description:
      'Morbi leo mi, nonummy eget, tristique non, rhoncus non, leo. Nullam faucibus mi quis velit. Integer in sapien. Fusce tellus',
    isDir: true,
    path,
  },
  {
    name: 'folderTest4',
    description: 'Aenean placerat. In vulputate urna',
    isDir: true,
    path,
  },
  {
    name: 'folderTest5',
    description: undefined,
    isDir: true,
    path,
  },
  {
    name: 'folderTest6',
    description:
      'Morbi leo mi, nonummy eget, tristique non, rhoncus non, leo. Nullam faucibus mi quis velit. Integer in sapien. Fusce tellus',
    isDir: true,
    path,
  },
  {
    name: 'folderTest7',
    description: 'Aenean placerat. In vulputate urna',
    isDir: true,
    path,
  },
];

const outerGridContainerProps = {
  container: true,
  spacing: 2,
  sx: {
    justifyContent: 'flex-start',
    overflow: 'auto',
    maxHeight: 'inherent',
  },
};

/**
 * Displays a board with navigational properties to locate and select assets for DT configuration.
 * @param props Takes relative path to Assets. E.g `Library` for Library assets. OR maybe the full path using `useURLforLIB`?
 * @returns
 */
function AssetBoard(props: { pathToAssets: string }) {
  const assets: Asset[] = useAssetsFake(props.pathToAssets);
  return (
    <Grid {...outerGridContainerProps}>
      {assets.map((asset) => (
        <Grid
          key={asset.index}
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{ minWidth: 250 }}
        >
          <AssetCard asset={asset} />
        </Grid>
      ))}
    </Grid>
  );
}

export default AssetBoard;
