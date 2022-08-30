import React, { useState } from 'react'
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

    const [page, setPage] = useState(40);
    const fetchCharacters = async ({ queryKey }) => {
        await new Promise(resolve => setTimeout(resolve, 1000))
        return axios
            .get(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`)
            .then(res => res.data.results)
    };


    const { data, status, isPreviousData, isLoading, isError } = useQuery(["characters", page], fetchCharacters, {
        keepPreviousData: true,
    });

    console.log(data)
    console.log(isPreviousData)
    // useEffect(() => {
    //     fetchCharacters();
    // }, [])

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error</div>
    }
    return (
        <div>
            {data?.map(data => {
                return (
                    <div >
                        <Character character={data} />

                    </div>
                )
            }


            )}
            <div>
                <button disabled={page === 1} onClick={() => setPage((old) => old - 1)}>Previous</button>
                <button disabled={page === 40} onClick={() => setPage((old) => old + 1)}>Next</button>
            </div>

        </div>
    )
}

export default Characters;