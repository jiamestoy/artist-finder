import { useState, useEffect } from "react"
import ArtistsList from './ArtistsList'
import usersService from '../services/users.service'
import MainNav from "../components/MainNav"
import { SessionProvider } from "../contexts/session.context"



function ArtistsListPage(){
    const [artists, setArtists] = useState([])

    useEffect(()=>{
        usersService.getArtists().then(artists=>{
            setArtists(artists)
        })    
    }, [])

    return (
        <SessionProvider>
            <MainNav/>
            <div>
                <h1 className="container-lg">Buscar Artista</h1>
                <ArtistsList list={artists} />
            </div>
        </SessionProvider>
    )
}

export default ArtistsListPage