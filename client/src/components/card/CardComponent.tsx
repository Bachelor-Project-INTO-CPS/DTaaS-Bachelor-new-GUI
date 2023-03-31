import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Icon } from '@mui/material';

type CardDataIndex = number & { readonly __tabDataIndex: unique symbol };

export interface CardData {
  index?: CardDataIndex;
  title: string;
  icon: string;
  folder?: boolean;
}

interface CardProps {
  data: CardData;
}

function CardComponent(props: CardProps) {
  const { data } = props;

  return (
    <Card>
      <CardActionArea sx={{ textAlign: 'center' }}>
        <Icon sx={{ fontSize: 120 }}>{data.icon}</Icon>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" fullWidth size="small" color="primary">
          Add
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardComponent;
