import React, { useEffect, useState } from 'react'
import SuperHero from '../../models/SuperHeros'
import { useParams } from 'react-router-dom'
import { heros } from '../../models/Heros'
import { Link } from 'react-router-dom'

const HeroDetails = () => {
    const [hero, setHero] = useState<SuperHero>();

    const { id } = useParams<{id: string}>();

    useEffect(() => {
        if(id)
        {
            heros.forEach((her) => {
                if (her.id === +id)
                {
                    setHero(her);
                }
            })
        }
    })
  return (
    <div className='carte'>
        <h2>{hero?.name}</h2>
        <div className='carteBody'>
            <img src={hero?.image} alt={hero?.name} />
        </div>

        <div className='cartedesc'>
            <p className='desc'>{hero?.civil}</p>
            <p className='desc'>Age: {hero?.age} ans</p>
            <p className='desc'>Ville: {hero?.ville}</p>
        </div>
    </div>
  )
}

export default HeroDetails