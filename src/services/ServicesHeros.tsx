import SuperHero from "../models/SuperHeros"

class ServicesHeros{

    getAllHeros = () => {
        return fetch("http://localhost:3000/heros")
        .then((response) => response.json())
        .catch((err) => console.error(err))
    }

    getHero = (id: string) => {
        return fetch(`http://localhost:3000/heros/${id}`)
        .then((response) => response.json())
        .catch((err) => console.error(err))

    }

    addNewHero = (newHero: SuperHero) => {
        return fetch(`http://localhost:3000/heros`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newHero)
        })
        .then((response) => response.json())
        .catch((err) => console.error(err))
    }
}

export const servicesHeros = new ServicesHeros();