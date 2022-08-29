import React, { useState, useEffect } from 'react'

function Characters() {
    const [characters, setCharacters] = useState([])
    const fetchCharacters = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character")
        const data = await response.json();
        console.log(data);
        setCharacters(data)
    }

    useEffect(() => {
        fetchCharacters();
    }, [])
    return (
        <div>
            {characters.results.map((character)=>(
                <div>{character.name}</div>
            ))}
        </div>
    )
}

export default Characters;