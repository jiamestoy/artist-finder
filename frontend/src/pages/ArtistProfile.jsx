import { useParams } from "react-router-dom"
import {useState, useEffect} from 'react'
import usersService from "../services/users.service"
import ArtistServices from './ArtistServices'
import ArtistPortfolio from './ArtistPortfolio'
import ArtistReviews from './ArtistReviews'
import UserDegree from './UserDegree'
import UserSocialNetwork from './UserSocialNetwork'
import MainNav from "../components/MainNav"
import { SessionProvider } from "../contexts/session.context"

function ArtistProfile(){
    const [artist, setArtist] = useState({})
    const {idUser} = useParams()

    useEffect(()=>{
        usersService.getUserById(idUser)
        .then(artist=>{
            setArtist(artist)
        })
    }, [idUser])

    return (
        <SessionProvider>
            <MainNav/>
            <main className="container-lg">
                <div className="row">
                    <div className="col-md-4 px-4 mt-4">
                        <div className="p-4 mb-4 border rounded d-flex flex-column align-items-center">
                            <img src={`/imgs/avatars/${artist.avatar ? artist.avatar : 'avatar_placeholder.png'}`} alt={`Avatar de ${artist.username}`} className="img-thumbnail mb-3" />
                            <h1 className="fs-2 fw-semibold">{(artist.first_name || artist.last_name) != null ? artist.first_name + ' ' + artist.last_name : artist.username}</h1>
                            <p className="card-text">Categorias: {artist.categories? artist.categories.join(", ") : 'Sin categorías'}</p>
                            <div className="d-flex justify-content-between align-items-center p-2">
                                <div className="d-flex flex-column">
                                    <a className="card-text text-dark text-decoration-none" href={`/user/${artist._id}/#reviews"`}>Calificaciones: </a> 
                                </div>
                            </div>
                            <a href="#" className="btn btn-primary">Contactar</a>
                        </div>

                        <div className="p-4 mb-4 border rounded d-flex flex-column">
                            <div className="border-bottom">
                                <h2 className="fs-5 fw-semibold">Descripción</h2>
                                <p>{artist.description ? artist.description : 'Sin descripción'}</p>
                            </div>
                            <div className="mt-3">
                                <ul>
                                    <li className="d-flex justify-content-between"><span>De</span> <strong>{artist.country ? artist.country : 'Sin país seleccionado'}</strong></li>
                                    <li className="d-flex justify-content-between"><span>Miembro desde</span> <strong>{artist.member_since ? artist.member_since : 'Sin datos'}</strong></li>
                                </ul>
                                <h3 className="fs-5 fw-semibold">Idiomas</h3>
                                <p className="card-text">{artist.languages? artist.languages.join(", ") : 'Sin idiomas'}</p>
                                <h3 className="fs-5 fw-semibold">Educación</h3>
                                <div>
                                    {artist.education ? artist.education.map(degree => <UserDegree key={degree} degree={degree}/>) : <p>Sin títulos.</p>}
                                </div>
                                <h3 className="fs-5 fw-semibold">Redes Sociales</h3>
                                <div>
                                    <ul>
                                        {artist.social_networks ? artist.social_networks.map(social_network => <UserSocialNetwork key={social_network} social_network={social_network}/>) : <li>Sin redes sociales.</li>}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 px-4 mt-4">

                        <div className="p-4 mb-4 border rounded">
                            <h2 className="fs-4 fw-semibold">Servicios</h2>
                            <ArtistServices />
                        </div>

                        <div className="p-4 mb-4 border rounded">
                            <h2 className="fs-4 fw-semibold">Portfolio</h2>
                            {artist.portfolio ? <ArtistPortfolio key={artist._id} portfolio={artist.portfolio} username={artist.username}  /> : <p>Este artista todavía no cargó su portfolio.</p>}
                        </div>

                        <div className="p-4 mb-4 border rounded" id="reviews">
                            <h2 className="fs-4 fw-semibold" id="calificaciones">Calificaciones</h2>
                            <ArtistReviews />
                        </div>

                    </div>
                </div>
            </main>
        </SessionProvider>
    )
}

export default ArtistProfile