import React from 'react';
import ShowCard from './ShowsCard';

import { FlexGrid } from '../styled';


const ShowGrid = ({ data }) => {

  const NOT_FOUND = 'https://c4.wallpaperflare.com/wallpaper/706/34/355/pleasant-lookout-wallpaper-preview.jpg';
  return (
    <FlexGrid>
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : NOT_FOUND}
          summary={show.summary}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowGrid;

