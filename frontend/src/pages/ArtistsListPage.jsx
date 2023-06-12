import { useState, useEffect } from "react"
import ArtistsList from './ArtistsList'
import usersService from '../services/users.service'



function ArtistsListPage(){
    const [artists, setArtists] = useState([])

    useEffect(()=>{
        usersService.getArtists().then(artists=>{
            setArtists(artists)
        })    
    }, [])

    return (
        <div>
            <h1 className="container-lg">Buscar Artista</h1>
            <ArtistsList list={artists} />
        </div>
    )
}

export default ArtistsListPage