import PropTypes from 'prop-types'
import './ArtistListItem.css'

function ArtistListItem({artist}) {

    return (


        <li>
            <div className="card artist-list-item">
            <img className='artist-list-item__image' src={`http://localhost:1234/imgs/avatars/${artist.avatar ? artist.avatar : 'avatar_placeholder.png'}`} alt={`Avatar de ${artist.username}`} />
                <div className="card-body">
                    <h5 className="card-title">{artist.username}</h5>
                    <p className="card-text">Categorias: {artist.categories? artist.categories.join(", ") : 'El artista no tiene categorías seleccionadas.'}</p>
                    <a href={`http://localhost:1234/artists/${artist._id}`} className="btn btn-primary">VER ARTISTA</a>
                </div>
            </div>
        </li>

    )
}

ArtistListItem.ArtistListItem = {
    artist: PropTypes.object.isRequired,
}

export default ArtistListItem;


/*
        <li className="artist-list-item">
        <img className='artist-list-item__image' src={`http://localhost:1234/imgs/avatars/${artist.avatar ? artist.avatar : 'avatar_placeholder.png'}`} />
        <div className='artist-list-item-item__details'>
            <h3 className='artist-list-item-item__name'>{artist.username}</h3>
            <p>Categorias: {artist.categories? artist.categories.join(", ") : 'El artista no tiene categorías seleccionadas'}</p>
            <div className='artist-list-item__actions'>
                <a className='artist-list-item__view' href={`http://localhost:1234/artists/${artist._id}`}>Ver Artista</a>
            </div>
        </div>
        </li>
        
        
        
        
        
        <li className="artist-list-item">
            <div className="card mb-3" style="max-width: 540px;">
                <div className="row g-0">
                    <div className="col-md-4">
                        <a href={`http://localhost:1234/artists/${artist._id}`}><img src={`http://localhost:1234/imgs/avatars/${artist.avatar ? artist.avatar : 'avatar_placeholder.png'}`} alt={`Avatar de ${artist.username}`} /></a>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">
                                <a href={`http://localhost:1234/artists/${artist._id}`} className="card-text text-dark text-decoration-none">${user.username}</a>
                            </h5>
                            <p className="card-text">Categorias: {artist.categories? artist.categories.join(", ") : 'El artista no tiene categorías seleccionadas'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </li>*/