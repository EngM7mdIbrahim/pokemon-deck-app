import React from 'react'
import List from './List'

export default function Main() {
  return (
    <div className="main-container">
        <nav>
            <img src={require('../assets/header-logo.png')} alt="Header Logo" />
        </nav>
        <h1>All Pokemons</h1>
        <List></List>
    </div>
  )
}
