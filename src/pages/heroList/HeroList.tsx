import React, { useEffect, useState } from 'react'
import { heros } from '../../models/Heros';
import SuperHero from '../../models/SuperHeros';
import Carte from '../../components/Carte/Carte';
import { useParams, Link } from 'react-router-dom'

const HeroList = () => {
    const [heroes, setHeros] = useState<SuperHero[]>([]);

    useEffect(() => {
        setHeros(heros);
    }, [])


  return (
        <div>
            {heroes.map((hero) => (
                <Carte key={hero.id} heros={hero}/>
            ))}    
        </div>
    )
    
  
}

export default HeroList