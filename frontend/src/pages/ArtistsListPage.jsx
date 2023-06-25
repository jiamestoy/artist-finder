import { useState, useEffect } from "react"
import ArtistsList from './ArtistsList'
import usersService from '../services/users.service'
import servicesService from "../services/services.service"
import MainNav from "../components/MainNav"
import { SessionProvider } from "../contexts/session.context"



function ArtistsListPage(){
    const [artists, setArtists] = useState([])
    const [services, setServices] = useState([])

    useEffect(()=>{

        usersService.getArtists().then(artists=>{
            setArtists(artists)
        })

        servicesService.getServices().then(services=>{
            setServices(services)
        })

    }, [])

    return (
        <SessionProvider>
            <MainNav/>
            <div>
                <h1 className="container-lg">Buscar</h1>
                <ArtistsList list={artists} listServices={services} />
            </div>
        </SessionProvider>
    )
}

export default ArtistsListPage