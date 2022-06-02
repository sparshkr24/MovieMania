import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getApi } from '../getApi';

const Show = () => {
  const [show, setShow] = useState(null);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    getApi(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(result => {
        if (isMounted) {
          setShow(result);
          setIsLoading(false);
        }
      })
      .catch(err => {
        if (isMounted) {
          setIsLoading(false);
          setError(err.message);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  console.log(show);
  if (isLoading) {
    return <div>Page is Loading</div>;
  }
  if (error) {
    return <div>Error Occured: {error}</div>;
  }

  return <div>this is show page {id}</div>;
};

export default Show;
