import PropTypes from 'prop-types'
import './ArtistServicesItem.css'

function ArtistServicesItem({service}){
    
    return (
        <div >
            <div className="artist-card"> 
                <a href="#"><img className="service-img" src={`../imgs/${service.img ? service.img : 'service_placeholder.jpg'}`} alt={`Imagen de ${service.name}`} /></a>
                <div className="card-body">
                    <a href="#"><h4>{service.name}</h4></a>
                    <p>{service.description}</p>

                    <div className="border-top d-flex justify-content-between align-items-center p-2">
                        <p className="price-tag">A PARTIR DE <span className="price">${service.min_price}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

ArtistServicesItem.ArtistServicesItem = {
    service: PropTypes.object.isRequired,
}

export default ArtistServicesItem