import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Icon,
  SxProps,
  Theme,
} from '@mui/material';
import styled from '@emotion/styled';
import AddButton from 'components/AssetBoard/AddButton';
import { Asset } from 'models/Asset';

interface CardProps {
  data: Asset;
  sx?: SxProps<Theme>;
}

const Header = styled(Typography)`
  white-space. nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function CardActionAreaContainer(asset: Asset) {
  return (
    <CardActionArea sx={{ textAlign: 'start' }}>
      <Grid container alignItems="center">
        <Grid item xs={7}>
          <CardContent
            sx={{
              padding: '5px 5px 0px 10px',
              ':last-child': { paddingBottom: 0 },
            }}
          >
            <Header variant="h6">{asset.name}</Header>
            <Description variant="body2" color="text.secondary">
              {asset.description}
            </Description>
          </CardContent>
        </Grid>
        <Grid item xs={5} sx={{ width: 100 }}>
          <Icon sx={{ fontSize: 100 }}>
            {asset.isDir ? 'folder' : 'description'}
          </Icon>
        </Grid>
      </Grid>
    </CardActionArea>
  );
}

function CardButtonsContainer(/* data: CardData */) {
  return (
    <CardActions>
      <Button variant="contained" fullWidth size="small" color="primary">
        Details
      </Button>
      <AddButton /* {data} */ />
    </CardActions>
  );
}

function AssetCard(props: CardProps) {
  const { data, sx } = props;

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: 235,
        height: 170,
        justifyContent: 'space-between',
        ...sx,
      }}
    >
      <CardActionAreaContainer {...data} />
      <CardButtonsContainer /* {...data} */ />
    </Card>
  );
}

export default AssetCard;
