import React from 'react';
import './App.css';
import Header from './components/Headers/Header';
import SideBar from './components/Body/SideBar';
import Feed from './components/Body/Feed/Feed';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="div app__body">
        <SideBar />
        <Feed />
        {/* Widgets */ }
      </div>
    </div>
  );
}

export default App;
