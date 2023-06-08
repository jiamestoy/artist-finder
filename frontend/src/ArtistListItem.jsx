import PropTypes from 'prop-types'
import './ArtistListItem.css'

function ArtistListItem({artist}) {

    return (


        <div>
            <div className="card artist-list-item">
            <img className='artist-list-item__image' src={`http://localhost:1234/imgs/avatars/${artist.avatar ? artist.avatar : 'avatar_placeholder.png'}`} alt={`Avatar de ${artist.username}`} />
                <div className="card-body">
                    <h5 className="card-title">{artist.username}</h5>
                    <p className="card-text">Categorias: {artist.categories? artist.categories.join(", ") : 'El artista no tiene categorías seleccionadas.'}</p>
                    <a href={`http://localhost:1234/artists/${artist._id}`} className="btn btn-primary">VER ARTISTA</a>
                </div>
            </div>
        </div>

    )
}

ArtistListItem.ArtistListItem = {
    artist: PropTypes.object.isRequired,
}

export default ArtistListItem;