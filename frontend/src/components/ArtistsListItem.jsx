import PropTypes from 'prop-types'
import './ArtistsListItem.css'
import { Link } from 'react-router-dom'

function ArtistsListItem({artist}) {
    
    return (
        <Link to={`/artist/${artist._id}`}>
            <div className="artist-card">
                <img className='artwork-img' src={`/imgs/${artist.portfolio ? "portfolio/" + artist.username + "/" + artist.portfolio[0] : 'service_placeholder.webp'}`} alt={`Trabajo de ${artist.username}`} />
                <div className='avatar-nombre-container'>
                    <img className='avatar-img' src={`/imgs/${artist.avatar ? "avatars/" + artist.avatar : 'avatar_placeholder.png'}`} alt={`Avatar de ${artist.username}`} />
                    <h4>{artist.first_name && artist.last_name ? artist.first_name + " " + artist.last_name : artist.username}</h4>
                </div>
                <div>
                    <p className="card-text">Categorias: {artist.categories? artist.categories.join(", ") : 'El artista no tiene categorías seleccionadas.'}</p>
                </div>
            </div>
        </Link>
    )
}

ArtistsListItem.ArtistsListItem = {
    artist: PropTypes.object.isRequired,
}

export default ArtistsListItem;