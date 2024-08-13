import './Player.css'

function Player(props) {
    const { id, firstName, lastName, hobbies, jerseyNumber } = props.player

    const hobbiesList = hobbies.length > 0 
        ? hobbies.map((hobby,index) => <li key={index}>{hobby}</li>)
        : <p>No hobbies</p>

    return (
        <div key={id} className='player'>
            <h2>{firstName} {lastName} #{jerseyNumber}</h2>
            <ul>{hobbiesList}</ul>
        </div>
    )
}

export default Player

