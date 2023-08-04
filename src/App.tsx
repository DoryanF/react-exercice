import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Routeur from './routeur/Routeur';




function App() {
  return (
    <>
      <Header/>
        <Routeur/>
      <Footer/>
    </>
  );
}

export default App;
