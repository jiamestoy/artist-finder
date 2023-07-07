import { useState, useEffect } from "react"
import servicesService from '../services/services.service.js'

function BuyerPurchasedServices({purchase}){

    const [servicePurchased, setServices] = useState([])

    useEffect(()=>{
        servicesService.getServiceById(purchase)
        .then(servicePurchased=>{
            setServices(servicePurchased)
        })
    }, [])
    
    return (
        <div className="row gx-2 mt-3">
            <div className="col-lg-6 mt-2">
                <div className="card p-2">
                    <div className="row">
                        <div className="col-4 d-flex align-items-center">
                            <a href="#">
                                <img className="card-img" src={`../imgs/${servicePurchased.img ? servicePurchased.img : 'service_placeholder.jpg'}`} alt={`Imagen de ${servicePurchased.name}`} />
                            </a>
                        </div>
                        <div className="col-8">
                            <div className="card-body p-0">
                                <a className="link-dark link-underline-opacity-0" href="#">
                                    <h3 className="card-title fs-5 mb-0">{servicePurchased.name}</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyerPurchasedServices
