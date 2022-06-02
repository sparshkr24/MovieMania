import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Starred from './Pages/Starred';
import Show from './Pages/Show';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/starred" element= {<Starred />} />
        <Route exact path="/show/:id" element={<Show />} />
      </Routes>
    </div>
  );
}

export default App;
