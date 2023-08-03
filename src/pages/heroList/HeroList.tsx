import React, { useEffect, useState } from 'react'
import { heros } from '../../models/Heros';

const HeroList = () => {
    const [hero, setHero] = useState([]);

    useEffect(() => {
        heros.map(her => {
            console.log(her);
        })
    })


  return (
    <div>HeroList</div>
  )
}

export default HeroList