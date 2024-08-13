import { useState } from 'react'
import Welcome from './components/Welcome'
import PlayerList from './components/PlayerList'
import Favorites from './components/Favorites'
import './App.css'

function App() {
  const [ favorites, setFavorites ] = useState(["Jackie Robinson"])
  return (
    <>
      <Welcome />
      <PlayerList />
      <Favorites myFavoritePlayers={favorites}/>
    </>
  )
}

export default App
