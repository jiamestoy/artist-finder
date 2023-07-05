import { Link } from 'react-router-dom'
import { useSession } from '../contexts/session.context'
import { useState } from 'react'
import './MainNav.css'

function MainNav(){
    const { onLogout, profile } = useSession()

    const [currentProfile, setProfile] = useState('')
    const profileCheck = () => {
        setProfile(profile)
    }

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <Link className="navbar-brand" to="/">
                    <img src="/imgs/logo.png" alt="Logo de Artist Finder"/>
                </Link>
                <div className="search-container">
                    <input type="text" className="search-input" placeholder="Buscar servicio, artista, formato, etc..."></input>
                    <button type="submit" className="search-button">
                        <img src="/imgs/search-icon.png" alt="Icono Buscar" />
                    </button>
                </div>
                <ul className="navbar-links">
                    <li className="nav-item">
                        <Link to="/search">Explorar</Link>
                    </li>
                    {
                    localStorage.getItem('token') ? 
                    <div className='navbar-buttons'>
                        <li><img className="message-icon" src="/imgs/message-icon.png"></img></li>
                        {
                        profile.role === 'artist' ?
                        <div className="navbar-artist">
                            <div className="orange-button">
                                <li><Link to={`/add-service/${profile._id}`}>Publicar Servicio</Link></li>
                            </div>
                            <li>
                                <Link to={`/artist/${profile._id}`}>
                                    <img className="navbar-avatar" src={`/imgs/avatars/${profile.avatar ? profile.avatar : 'avatar_placeholder.png'}`} alt={`Avatar de ${profile.username}`} />
                                </Link>
                            </li>
                        </div> :
                            <li>
                                <Link to={`/buyer/${profile._id}`}>
                                    <img className="navbar-avatar" src={`/imgs/avatars/${profile.avatar ? profile.avatar : 'avatar_placeholder.png'}`} alt={`Avatar de ${profile.username}`} />
                                </Link>
                            </li>
                        }
                        <li><Link className="nav-link" onClick={()=>{onLogout();profileCheck();}}>Cerrar Sesión</Link></li>
                    </div> : 
                    <div className='navbar-buttons'>
                        <li className="white-button">
                            <Link className="nav-link" to="/login">Iniciar Sesión</Link>
                        </li>
                        <li className="orange-button">
                            <Link className="nav-link" to="/signup">Registrarse</Link>
                        </li>
                    </div>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default MainNav;