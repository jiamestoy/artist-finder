import { useState, useEffect } from "react"
import servicesService from '../services/services.service.js'

function BuyerFavorites({favorite}){
       
    const [favoriteService, setServices] = useState([])

    useEffect(()=>{
        servicesService.getServiceById(favorite)
        .then(favoriteService=>{
            setServices(favoriteService)
        })
    }, [])

    return (
        <div className="row gx-2 mt-3">
            <div className="col-lg-4 mt-2">
                <div className="card p-2"> 
                    <a href="#"><img className="card-img-top rounded" src={`../imgs/${favoriteService.img ? favoriteService.img : 'service_placeholder.jpg'}`} alt={`Imagen de ${favoriteService.name}`} /></a>
                    <div className="card-body p-0">
                        <a href="#" className="link-dark link-underline-opacity-0 link-hover">
                            <h4 className="card-title fs-5 fw-semibold mb-0 mt-2">{favoriteService.name}</h4>
                        </a>
                        <p className="card-text mt-2">{favoriteService.description}</p>

                        <div className="border-top d-flex justify-content-between align-items-center p-2">
                            <a href="#" className="link-dark link-underline-opacity-0 link-hover"><p className="card-text fw-bold"><span className="fw-semibold">Desde</span> ${favoriteService.min_price}</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyerFavorites