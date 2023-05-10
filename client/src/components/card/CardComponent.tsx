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

type CardDataIndex = number & { readonly __tabDataIndex: unique symbol };

export interface CardData {
  index?: CardDataIndex;
  title: string;
  description: string;
  icon: string;
  folder?: boolean;
}

interface CardProps {
  data: CardData;
  sx?: SxProps<Theme>;
}

function CardActionAreaContainer(data: CardData): React.ReactElement {
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
            <Typography variant="h6" component="div">
              {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.description}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={5} sx={{ width: 100 }}>
          <Icon sx={{ fontSize: 100 }}>{data.icon}</Icon>
        </Grid>
      </Grid>
    </CardActionArea>
  );
}

function CardActionsContainer() {
  return (
    <CardActions>
      <Button variant="contained" fullWidth size="small" color="primary">
        Details
      </Button>
      <Button variant="contained" fullWidth size="small" color="primary">
        Select
      </Button>
    </CardActions>
  );
}

function CardComponent(props: CardProps) {
  const { data, sx } = props;

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: 240,
        height: 170,
        justifyContent: 'space-between',
        ...sx,
      }}
    >
      <CardActionAreaContainer {...data} />
      <CardActionsContainer />
    </Card>
  );
}

export default CardComponent;
