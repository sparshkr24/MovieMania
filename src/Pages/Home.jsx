import React, { useState } from 'react';
import MainPageLayout from '../Components/MainPageLayout';

const Home = () => {
  // state variable for input
  const [input, setInput] = useState('');

  // handling change in input textarea
  const handleOnChange = e => {
    setInput(e.target.value);
  };

  // Function to handle search
  const handleSearch = () => {
    // https://api.tvmaze.com/search/shows?q=girls
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then(response => response.json())
      .then(data => console.log(data));
  };

  // Function to search when enter key is pressed
  const handleKeyDown = event => {
    if (event.which === 13) {
      handleSearch();
    }
  };

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
    </MainPageLayout>
  );
};

export default Home;
