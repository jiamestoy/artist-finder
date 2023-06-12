import PropTypes from 'prop-types'
import './ArtistsListItem.css'

function ArtistsListItem({artist}) {

    return (
        <div>
            <div className="card artist-list-item">
            <img className='artist-list-item__image' src={`/imgs/avatars/${artist.avatar ? artist.avatar : 'avatar_placeholder.png'}`} alt={`Avatar de ${artist.username}`} />
                <div className="card-body">
                    <h5 className="card-title">{artist.username}</h5>
                    <p className="card-text">Categorias: {artist.categories? artist.categories.join(", ") : 'El artista no tiene categorías seleccionadas.'}</p>
                    <a href={`/user/${artist._id}`} className="btn btn-primary">VER ARTISTA</a>
                </div>
            </div>
        </div>

    )
}

ArtistsListItem.ArtistsListItem = {
    artist: PropTypes.object.isRequired,
}

export default ArtistsListItem;