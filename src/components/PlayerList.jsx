import Player from './Player'

const alexHobbies = ["dancing", "making YouTube videos", "fishing"];
const joseHobbies = ["travel", "eating burgers", "skiiing"];
const framerberHobbies = ["hunting wabbits", "Sunshine Kids volunteer", "grilling"];
const yordanHobbies = []
const jeremyHobbies = []

const playerData = [
  { id: 1, firstName: "Alex", lastName: "Bregman", hobbies: alexHobbies, jerseyNumber: 2 },
  { id: 4, firstName: "Yordan", lastName: "Alvarez", hobbies: yordanHobbies, jerseyNumber: 44 },
  { id: 3, firstName: "Jose", lastName: "Altuve", hobbies: joseHobbies, jerseyNumber: 27 },
  { id: 5, firstName: "Framber", lastName: "Valdez", hobbies: framerberHobbies, jerseyNumber: 59 },  
  { id: 2, firstName: "Jeremy", lastName: "Pena", hobbies: jeremyHobbies, jerseyNumber: 3 },
]

function PlayerList(){
    const players = playerData.map(player => <Player key={player.id} player={player} />)

    return (
        <>
          {players}
        </>
    )

}

export default PlayerList