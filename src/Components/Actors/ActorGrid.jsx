import React from 'react';
import ActorCard from './ActorCard';

import { FlexGrid } from '../styled';

const ActorGrid = ({ data }) => {
  const IMAGE_NOT_FOUND = 'https://aeroclub-issoire.fr/wp-content/uploads/2020/05/image-not-found-300x225.jpg';

  return (
    <FlexGrid>
      {data.map(({ person }) => (
      <ActorCard
          key={person.id}
          name={person.name}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deathday={person.deathday}
          gender={person.gender}
          image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
        />
      ))}
    </FlexGrid>
  );
};

export default ActorGrid;
