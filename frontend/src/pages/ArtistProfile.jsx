import { useParams } from "react-router-dom"
import {useState, useEffect} from 'react'
import usersService from "../services/users.service"
import ArtistServices from '../components/ArtistServices'
import ArtistPortfolio from '../components/ArtistPortfolio'
import ArtistReviews from '../components/ArtistReviews'
import UserDegree from '../components/UserDegree'
import UserSocialNetwork from '../components/UserSocialNetwork'
import MainNav from "../components/MainNav"
import { SessionProvider } from "../contexts/session.context"
import Footer from "../components/Footer"
import './ArtistProfile.css'

function ArtistProfile(){
    const [artist, setArtist] = useState({})
    const {idUser} = useParams()

    const [averageScore, setAverageScore] = useState();

    const handleAverageScore = (score) => {
        setAverageScore(score);
    };

    useEffect(()=>{
        usersService.getUserById(idUser)
        .then(artist=>{
            setArtist(artist)
        })
    }, [idUser])

    return (
        <SessionProvider>
            <MainNav/>
            <main>
                <div className="container">
                    <div>
                        <div className="avatar-name-container">
                            <img className="profile-avatar" src={`/imgs/avatars/${artist.avatar ? artist.avatar : 'avatar_placeholder.png'}`} alt={`Avatar de ${artist.username}`} />
                            <h1>{(artist.first_name || artist.last_name) != null ? artist.first_name + ' ' + artist.last_name : artist.username}</h1>
                            <p>@{artist.username}</p>
                            <p>Categorias: {artist.categories? artist.categories.join(", ") : 'Sin categorías'}</p>
                            <a className="rating" href="#reviews">Calificaciones: {isNaN(averageScore) ? 'Sin calificaciones' : `${averageScore} \u2605`} </a> 
                            <a href="#" className="contact-button">Contactar</a>
                        </div>

                        <div className="artist-details">
                            <div className="description">
                                <h2>Descripción</h2>
                                <p>{artist.description ? artist.description : 'Sin descripción'}</p>
                            </div>
                            <div>
                                <ul>
                                    <li className="space-between"><span>De</span> <strong>{artist.country ? artist.country : 'Sin país seleccionado'}</strong></li>
                                    <li className="space-between"><span>Miembro desde</span> <strong>{artist.member_since ? artist.member_since : 'Sin datos'}</strong></li>
                                </ul>
                                <h3>Idiomas</h3>
                                <p>{artist.languages? artist.languages.join(", ") : 'Sin idiomas'}</p>
                                <h3>Educación</h3>
                                <div>
                                    {artist.education ? artist.education.map(degree => <UserDegree key={degree} degree={degree}/>) : <p>Sin títulos.</p>}
                                </div>
                                <h3>Redes Sociales</h3>
                                <div>
                                    <ul>
                                        {artist.social_networks ? artist.social_networks.map(social_network => <UserSocialNetwork key={social_network} social_network={social_network}/>) : <li>Sin redes sociales.</li>}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                        <div className="additional-containers">
                            <h2>Servicios</h2>
                            <ArtistServices />
                        </div>

                        <div className="additional-containers">
                            <h2>Portfolio</h2>
                            {artist.portfolio ? <ArtistPortfolio key={artist._id} portfolio={artist.portfolio} username={artist.username}  /> : <p>Este artista todavía no cargó su portfolio.</p>}
                        </div>

                        <div className="additional-containers" id="reviews">
                            <h2>Calificaciones</h2>
                            <ArtistReviews onAverageScore={handleAverageScore} />
                        </div>

                    </div>
                </div>
            </main>
            <Footer/>
        </SessionProvider>
    )
}

export default ArtistProfile