import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import servicesService from '../services/services.service.js'
import ArtistServicesItem from './ArtistServicesItem.jsx'



function ArtistServices(){
    
    const {idUser} = useParams()
    const [services, setServices] = useState([])

    useEffect(()=>{
        servicesService.getServiceByUserId(idUser)
        .then(services=>{
            setServices(services)
        })
    }, [])
    
    return (
        <div className="row gx-2 mt-3">
            {services.length != 0 ? services.map(service => <ArtistServicesItem key={service._id} service={service} />) : <p>Este artista todavía no tiene servicios cargados.</p>}
        </div>
    )
}

export default ArtistServices