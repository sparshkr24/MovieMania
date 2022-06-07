import React, { useReducer, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getApi } from '../getApi';
import { FETCH_FAILED, FETCH_SUCCESS } from '../Components/Constants/showTypes';

const initailState = {
  show: null,
  isLoading: true,
  error: null
}

// eslint-disable-next-line consistent-return
const reducer = (prevState, action)=>{
  switch(action.type){
    case FETCH_SUCCESS: 
      return {isLoading: false, error: null, show: action.show};
    
    case FETCH_FAILED:
      return {...prevState, isLoading: false, error: action.error};
      
    default:
      break;
  }
}

const Show = () => {
  const { id } = useParams();

  // eslint-disable-next-line no-unused-vars
  const [{show, error, isLoading}, dispatch] = useReducer(reducer, initailState);
  // const [show, setShow] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    getApi(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(result => {
        if (isMounted) {
          dispatch({type: FETCH_SUCCESS, show: result})
        }
      })
      .catch(err => {
        if (isMounted) {
          dispatch({type: FETCH_FAILED, error: err.message});
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  // console.log(state);
  if (isLoading) {
    return <div>Page is Loading</div>;
  }
  if (error) {
    return <div>Error Occured: {error}</div>;
  }

  return <div>this is show page {id}</div>;
};

export default Show;
