import React, { useState } from 'react';
import MainPageLayout from '../Components/MainPageLayout';
import { getApi } from '../getApi';

const Home = () => {
  // state variable for input
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  // handling change in input textarea
  const handleOnChange = e => {
    setInput(e.target.value);
  };

  // Function to handle search
  const handleSearch = () => {
    // https://api.tvmaze.com/search/shows?q=girls
    getApi(`/search/shows?q=${input}`).then(data=> setResult(data))
  };

  // Function to search when enter key is pressed
  const handleKeyDown = event => {
    if (event.which === 13) {
      handleSearch();
    }
  };

  const renderResults = ()=>{
      if(result && result.length===0){
          return <div>No Results</div>;
      }
      if(result && result.length>0){
          return (<div>{result.map((item) =>{
              return <div key={item.show.id}>{item.show.name}</div>
          })}
          </div>);
      }

      return null;
  }

  return (
    <MainPageLayout>
      This is Home
      <input
        type="text"
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        value={input}
      />
      <button type="submit" onClick={handleSearch}>
        Search
      </button>
        {renderResults()}

    </MainPageLayout>
  );
};

export default Home;
