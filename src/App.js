import logo from './logo.svg';
import './App.css';
import AppBar from './NavBar';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutMe from './AboutMe/AboutMe';
import WorkLife from './WorkLife/WorkLife';
import Home from './Home/Home';
import RandomMusic from './Random/RandomMusic';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <AppBar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/about-me" element={<AboutMe/>}/> */}
        <Route exact path="/work-life" element={<WorkLife/>}/>
        <Route exact path="/random-music" element={<RandomMusic/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
