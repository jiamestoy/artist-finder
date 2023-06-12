import PropTypes from 'prop-types'

function ArtistServicesItem({service}){
    
    return (
        <div className="col-lg-4 mt-2">
            <div className="card p-2"> 
                <a href="#"><img className="card-img-top rounded" src={`../imgs/${service.img ? service.img : 'service_placeholder.webp'}`} alt={`Imagen de ${service.name}`} /></a>
                <div className="card-body p-0">
                    <a href="#" className="link-dark link-underline-opacity-0 link-hover">
                        <h4 className="card-title fs-5 fw-semibold mb-0 mt-2">{service.name}</h4>
                    </a>
                    <p className="card-text mt-2">{service.description}</p>

                    <div className="border-top d-flex justify-content-between align-items-center p-2">
                        <a href="#" className="link-dark link-underline-opacity-0 link-hover"><p className="card-text fw-bold"><span className="fw-semibold">Desde</span> ${service.min_price}</p></a>
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