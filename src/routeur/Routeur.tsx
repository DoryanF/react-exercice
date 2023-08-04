import React from 'react'
import { RouteObject, useRoutes } from 'react-router-dom';
import HeroList from '../pages/heroList/HeroList';
import Carte from '../components/Carte/Carte';
import { heros } from '../models/Heros';
import TestUseParams from '../components/testUseParams/TestUseParams';
import HeroDetails from '../pages/heroList/HeroDetails';

const Routeur = () => {
    const routes : RouteObject[] = [
        {
            path: "/",
            element: <HeroList/>
        },
        {
            path: "/:id",
            element: <HeroDetails/>
        }
    ]


  return (
    <div>{useRoutes(routes)}</div>
  )
}

export default Routeur