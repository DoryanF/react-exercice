import React from 'react'
import './carte.css'
import SuperHero from '../../models/SuperHeros'
import { Link } from 'react-router-dom'

type Heros = {
  heros: SuperHero,
}




const Carte: React.FC<Heros> = ({heros}) => {
  return (
    <Link to={`/${heros.id}`}>
      <div className='carte'>
        <h2>{heros.name}</h2>
        <div className='carteBody'>
            <img src={heros.image} alt={heros.name} />
        </div>

        <div className='cartedesc'>
            <p className='desc'>{heros.civil}</p>
            <p className='desc'>Age: {heros.age} ans</p>
            <p className='desc'>Ville: {heros.ville}</p>
        </div>
      </div>
    </Link>
    
  )
}

export default Carte