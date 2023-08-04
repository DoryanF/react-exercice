import React, { useState } from 'react'
import SuperHero from '../models/SuperHeros'
import { servicesHeros } from '../services/ServicesHeros';

const FormulaireAjout = () => {

    const [newhero, setNewHero] = useState<SuperHero>(
        {
            id: 4,
            name: "",
            image: "",
            civil: "",
            age: 0,
            ville: "",
        }
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewHero({...newhero, [e.target.name]: e.target.value});
    }

    const addNewHero = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        servicesHeros.addNewHero(newhero);
    }

  return (
    <div>
        <form onSubmit={addNewHero}>
            <label htmlFor="name">Nom: </label>
            <input type="text" name="name" id="name" value={newhero.name} onChange={handleChange}/>

            <label htmlFor="image">Lien img: </label>
            <input type="text" name="image" id="image" value={newhero.image} onChange={handleChange}/>
            
            <label htmlFor="civil">Civil :</label>
            <input type="text" name="civil" id="civil" value={newhero.civil} onChange={handleChange}/>
            
            <label htmlFor="age">Age: </label>
            <input type="text" name="age" id="age" value={newhero.age} onChange={handleChange}/>

            <label htmlFor="ville">Ville: </label>
            <input type="text" name="ville" id="ville" value={newhero.ville} onChange={handleChange}/>

            <input type="submit" value="Ajouter"/>
        </form>
    </div>
  )

}

export default FormulaireAjout