import React from 'react';

import 'bootstrap-css-only';
import './App.css';

import Header from './components/Header';
import Converter from './components/Converter';

function App() {
  return (
    <div className="App">
        <Header/>
        <Converter/>
    </div>
  );
}

export default App;
