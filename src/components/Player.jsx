function Player({ player }){
    const { id, firstName, lastName, hobbies, jerseyNumber } = player
    // const player = props.player
    // console.log(props.player)
    const hobbiesList = hobbies.map( hobby => <li key={id}>{hobby}</li>)
    return (
        <div key={id}>
            <h2>{firstName} {lastName}</h2>
            <ul>{hobbiesList}</ul>
        </div>
    )
}

export default Player