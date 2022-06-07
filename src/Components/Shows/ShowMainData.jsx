import React from 'react';
import { Star } from '../styled';

const ShowMainData = ({ name, rating, summary, tags, image }) => {

    const IMG_PLACEHOLDER = 'https://cdn.vectorstock.com/i/1000x1000/39/98/error-404-page-not-found-vector-14463998.webp';

  return (
    <div>
      <img src={image ? image.original : IMG_PLACEHOLDER} alt="show-cover" />
      <div>
        <div>
          <h1>{name}</h1>
          <div>
            <Star />
            <span>{rating.average || 'N/A'}</span>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: summary }} />

        <div>
          Tags:{' '}
          <div>
            {tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShowMainData;
