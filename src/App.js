// Imports
import React from 'react';

// Components
import Header from './components/header';
import Midbar from './components/midbar';
import Main from './components/main';

// CSS
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Midbar />
      <Main />
      <div className="logout">Logout</div>
    </div>
  );
};

export default App;