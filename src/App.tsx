import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Carte from './components/Carte/Carte';
import Footer from './components/Footer/Footer';
import SuperHero from './models/SuperHeros';
import HeroList from './pages/heroList/HeroList';

const heros: SuperHero[] = [
  {
    id: 1,
    name: "Batman",
    image: "https://www.superherodb.com/gallery2/075/395/39568.webp",
    civil: "Bruce Wayne",
    age: 35,
    ville: "Gothan City"
  },
  {
    id: 2,
    name: "Superman",
    image: "https://www.superherodb.com/gallery2/075/475/47594.webp",
    civil: "Clark Kent",
    age: 28,
    ville: "Metropolis"
  },
  {
    id: 3,
    name: "Green Lantern",
    image: "https://www.superherodb.com/gallery2/075/181/18105.webp",
    civil: "Hal Jordan",
    age: 30,
    ville: "Coast City"
  },
]


function App() {
  return (
    <>
      <Header/>
      {/* {
        heros.map((hero) => (
          <Carte key={hero.id} heros={hero}/>
        ))
      } */}
      <HeroList/>
      <Footer/>
    </>
  );
}

export default App;
