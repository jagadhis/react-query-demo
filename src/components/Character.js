import React, { useState, useEffect } from 'react'

function Character() {
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
        <div>Character</div>
    )
}

export default Character