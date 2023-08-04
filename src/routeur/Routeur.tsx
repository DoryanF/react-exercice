import React from 'react'
import { RouteObject, useRoutes } from 'react-router-dom';
import HeroList from '../pages/heroList/HeroList';
import HeroDetails from '../pages/heroList/HeroDetails';
import FormulaireAjout from '../formulaireAjout/FormulaireAjout';

const Routeur = () => {
    const routes : RouteObject[] = [
        {
            path: "/",
            element: <HeroList/>
        },
        {
            path: "/:id",
            element: <HeroDetails/>
        },
        {
          path: "/ajout",
          element: <FormulaireAjout />
        }
    ]


  return (
    <div>{useRoutes(routes)}</div>
  )
}

export default Routeur