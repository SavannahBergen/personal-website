import logo from './logo.svg';
import './App.css';
import AppBar from './NavBar';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutMe from './AboutMe/AboutMe';
import WorkLife from './WorkLife/WorkLife';
import Home from './Home/Home';
import RandomMusic from './Random/RandomMusic';
import Resume from './WorkLife/Resume';

function App() {
  return (
    <BrowserRouter basename={'/personal-website'}>
    <div className="App">
      <AppBar/>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        {/* <Route path="/about-me" element={<AboutMe/>}/> */}
        <Route exact path="/education" element={<WorkLife/>}/>
        <Route exact path="/random-music" element={<RandomMusic/>}/>
        <Route exact path="/work" element={<Resume/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
