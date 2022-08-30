import React from 'react'
import { useQuery } from "react-query";
import axios from 'axios'
import Character from './Character';

//Commented Code Fetched Without Using React-Query

function Characters() {

    // const [characters, setCharacters] = useState([])
    // const fetchCharacters = async () => {
    //     const response = await fetch("https://rickandmortyapi.com/api/character")
    //         return response.json();
    //     //console.log(data);
    //     // setCharacters(data.results)
    // }
    // const fetchCharacters = async() => {
    //             await new Promise(resolve => setTimeout(resolve,1000))
    //             return axios
    //             .get('https://rickandmortyapi.com/api/character')
    //             .then(res => res.data.results)
    //           }



    const { data, status } = useQuery("characters", async () => {
        await new Promise(resolve => setTimeout(resolve, 1000))
        return axios
            .get('https://rickandmortyapi.com/api/character')
            .then(res => res.data.results)
    });

    console.log(data)
    console.log(status)
    // useEffect(() => {
    //     fetchCharacters();
    // }, [])

    if (status === "Loading") {
        return <div>Loading...</div>
    }

    if (status === "error") {
        return <div>Error</div>
    }
    return (
        <div>
            {data?.map(data => {
                return (
                    <div>
                    <Character character={data} />
                        
                    </div>
                )
            }
          

            )}

        </div>
    )
}

export default Characters;