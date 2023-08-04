import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Carte from './components/Carte/Carte';
import Footer from './components/Footer/Footer';
import SuperHero from './models/SuperHeros';
import HeroList from './pages/heroList/HeroList';




function App() {
  return (
    <>
      <Header/>
      <HeroList/>
      <Footer/>
    </>
  );
}

export default App;
