import * as React from 'react';
import { Box, Grid } from '@mui/material';
import CardComponent, { CardData } from './CardComponent';

interface CardContainerProps {
  data: CardData[];
}

function CardContainer(props: CardContainerProps) {
  const { data } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      {data.map((cardData) => (
        <Grid key={cardData.index} item sx={{ minWidth: 170, width: 250 }}>
          <CardComponent data={cardData} />
        </Grid>
      ))}
    </Box>
  );
}

export default CardContainer;
