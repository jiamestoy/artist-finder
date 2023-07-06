import PropTypes from 'prop-types'
import './ArtistsListItem.css'
import { Link } from 'react-router-dom'

function ServiceListItem({service}) {
    
    return (

        <Link to={`/artist/${service.artist_id}`}>
        <div className="artist-card">
            <img className='artwork-img' src={`../imgs/${service.img ? service.img : 'service_placeholder.webp'}`} alt={`Imagen de ${service.name}`} />
            <div>
                <h4>{service.name}</h4>
                <p className="card-text">Categorias: {service.categories.join(", ")}</p>
                <p className="price-tag">A PARTIR DE <span className="price">${service.min_price}</span></p>
            </div>
        </div>
        </Link>

    )
}

ServiceListItem.ServiceListItem = {
    artist: PropTypes.object.isRequired,
}

export default ServiceListItem;