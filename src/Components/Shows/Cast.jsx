import React from 'react';

const Cast = ({ cast }) => {
  const IMG_PLACEHOLDER =
    'https://cdn.vectorstock.com/i/1000x1000/39/98/error-404-page-not-found-vector-14463998.webp';

  return (
    <div>
      {cast.map(({ person, character, voice }, key) => (
        <div key={key}>
          <div>
            <img
              src={person.image ? person.image.medium : IMG_PLACEHOLDER}
              alt="cast-person"
            />
          </div>
          <div>
            <span>
              {person.name} | {character.name} {voice ? '| Voice' : ''}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cast;
