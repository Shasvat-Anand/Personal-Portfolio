import React from 'react';
import './App.css'
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/About';
import Skill from './components/skill/Skill';
import Services from './components/Services/Services';

function App() {
 

  return (
    <>
    <Header/>
    <main className='main'>
    <Home />
    <About />
    <Skill/>
    <Services/>
    </main>
    </>
  )
}

export default App
