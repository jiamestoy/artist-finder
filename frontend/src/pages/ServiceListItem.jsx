import PropTypes from 'prop-types'
import './ArtistsListItem.css'
import { Link } from 'react-router-dom'

function ServiceListItem({service}) {
    
    return (
        <div>
            <div className="card artist-list-item">
            <img className="artist" src={`../imgs/${service.img ? service.img : 'service_placeholder.webp'}`} alt={`Imagen de ${service.name}`} />
                <div className="card-body">
                    <h5 className="card-title">{service.name}</h5>
                    <p className="card-text">Desde: ${service.min_price}</p>
                    <p className="card-text">Categorias: {service.categories.join(", ")}</p>
                    <Link to={`/artist/${service.artist_id}`} className="btn btn-primary">Ver Artista</Link>
                </div>
            </div>
        </div>

    )
}

ServiceListItem.ServiceListItem = {
    artist: PropTypes.object.isRequired,
}

export default ServiceListItem;