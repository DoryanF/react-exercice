import React, { useEffect, useState } from 'react'
import { heros } from '../../models/Heros';
import SuperHero from '../../models/SuperHeros';
import Carte from '../../components/Carte/Carte';
import { servicesHeros } from '../../services/ServicesHeros';

const HeroList = () => {
    const [heroes, setHeros] = useState<SuperHero[]>([]);

    useEffect(() => {
        getAllHeros()
    }, [])

    const getAllHeros = () => {
        servicesHeros.getAllHeros()
        .then((data) => setHeros(data))
    }

  return (
        <div>
            {heroes.map((hero) => (
                <Carte key={hero.id} heros={hero}/>
            ))}    
        </div>
    )
    
  
}

export default HeroList