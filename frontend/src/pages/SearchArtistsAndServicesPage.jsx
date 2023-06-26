import { useState, useEffect } from "react"
import SearchArtistsAndServices from '../components/SearchArtistsAndServices'
import usersService from '../services/users.service'
import servicesService from "../services/services.service"
import MainNav from "../components/MainNav"
import { SessionProvider } from "../contexts/session.context"
import Footer from "../components/Footer"



function SearchArtistsAndServicesPage(){
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
            <main className="container-lg">
                <div>
                    <h1 className="container-lg">Buscar</h1>
                    <SearchArtistsAndServices list={artists} listServices={services} />
                </div>
            </main>
            <Footer/>
        </SessionProvider>
    )
}

export default SearchArtistsAndServicesPage