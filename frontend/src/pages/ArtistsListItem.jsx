import PropTypes from 'prop-types'
import './ArtistsListItem.css'
import { Link } from 'react-router-dom'

function ArtistsListItem({artist}) {
    
    return (
        <div>
            <div className="card artist-list-item">
            <img className='artist-list-item__image' src={`/imgs/${artist.portfolio ? "portfolio/" + artist.username + "/" + artist.portfolio[0] : artist.avatar ? "avatars/" + artist.avatar : 'avatar_placeholder.png'}`} alt={artist.portfolio ? `Trabajo de ${artist.username}` : `Avatar de ${artist.username}`} />
                <div className="card-body">
                    <h5 className="card-title">{artist.first_name && artist.last_name ? artist.first_name + " " + artist.last_name : artist.username}</h5>
                    <p className="card-text">Categorias: {artist.categories? artist.categories.join(", ") : 'El artista no tiene categorías seleccionadas.'}</p>
                    <Link to={`/artist/${artist._id}`} className="btn btn-primary">Ver Artista</Link>
                </div>
            </div>
        </div>

    )
}

ArtistsListItem.ArtistsListItem = {
    artist: PropTypes.object.isRequired,
}

export default ArtistsListItem;