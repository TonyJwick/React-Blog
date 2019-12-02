import React from 'react';
import './App.css';
import Navigation from './Navigation';
import Content from './Content';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation/>
      </header>
      <div className="home-container">
      <Content url="index.js" title="home"/>
        </div>
    <Footer/>
    </div>
  );
}

export default App;

/*
<a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
>
*/