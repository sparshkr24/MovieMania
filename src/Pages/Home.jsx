import React, { useState } from 'react';
import ActorGrid from '../Components/Actors/ActorGrid';
import MainPageLayout from '../Components/MainPageLayout';
import ShowsGrid from '../Components/Shows/ShowsGrid';
import { getApi } from '../getApi';

const Home = () => {
  // state variable for input
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');
  const isShowsSearch = searchOption === 'shows';

  // handling change in input textarea
  const handleOnChange = e => {
    setInput(e.target.value);
  };

  // Function to handle search
  const handleSearch = () => {
    // https://api.tvmaze.com/search/shows?q=girls
    getApi(`/search/${searchOption}?q=${input}`).then(data => setResult(data));
  };

  // Function to search when enter key is pressed
  const handleKeyDown = event => {
    if (event.which === 13) {
      handleSearch();
    }
  };

  const handleSearchOptions = ev => {
    setSearchOption(ev.target.value);
    // console.log(ev.target.value);
  };

  const renderResults = () => {
    if (result && result.length === 0) {
      return <div>No Results</div>;
    }
    if (result && result.length > 0) {
      return (
        <div>
          {result[0].show ? (
            <ShowsGrid data={result} />
          ) : (
            <ActorGrid data={result} />
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <MainPageLayout>
      This is Home
      <br />
      <label htmlFor="searchOptions">
        Shows
        <input
          checked={isShowsSearch}
          type="radio"
          id="showSearch"
          value="shows"
          onChange={handleSearchOptions}
        />
      </label>
      <label htmlFor="searchOptions">
        Actors
        <input
          checked={!isShowsSearch}
          type="radio"
          id="showSearch"
          value="people"
          onChange={handleSearchOptions}
        />
      </label>
      <input
        type="text"
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        placeholder="Search for something"
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
