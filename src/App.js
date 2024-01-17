import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import './App.css';
import WordWatch from './components/WordWatch';
const history = createMemoryHistory();
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="watch/" element={<WordWatch />} />
        <Route exact path="watch/:lang" element={<WordWatch />} />
      </Routes>
   </Router>
  );
}

export default App;
