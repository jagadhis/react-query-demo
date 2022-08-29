import React from 'react'
import {useQuery} from "react-query";

//Commented Code Fetched Without Using React-Query

function Characters() {

    // const [characters, setCharacters] = useState([])
    const fetchCharacters = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character")
     return response.json();
        //console.log(data);
        // setCharacters(data.results)
    }

    const {data,status} = useQuery("characters",fetchCharacters)
   

    // useEffect(() => {
    //     fetchCharacters();
    // }, [])

    if(status === "Loading" ){
        return <div>Loading...</div>
    }

    if(status === "error"){
        return <div>Error</div>
    }
    return (
       <div>
      {data.results.map((character)=>{
        return (
            <div>{character.name}</div>
        )
      })}
         
       </div>
    )
}

export default Characters;