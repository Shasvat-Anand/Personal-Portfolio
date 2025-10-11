import React from 'react';
import './App.css'
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/About';
import Skill from './components/skill/Skill';

function App() {
 

  return (
    <>
    <Header/>
    <main className='main'>
    <Home />
    <About />
    <Skill/>
    </main>
    </>
  )
}

export default App
