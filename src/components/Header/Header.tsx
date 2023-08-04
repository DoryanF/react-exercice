import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Link to={"/"}>
      <h1>Mes Super Héros</h1>
    </Link>
  )
}

export default Header