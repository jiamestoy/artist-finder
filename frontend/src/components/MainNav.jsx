import { Link } from 'react-router-dom'
import { useSession } from '../contexts/session.context'
import { useState } from 'react'

function MainNav(){
    const { onLogout, profile } = useSession()

    const [currentProfile, setProfile] = useState('')
    const profileCheck = () => {
        setProfile(profile)
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="/imgs/logo.png" alt="Logo de Artist Finder"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/artists">Buscar Artista</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/buyers">Compradores</Link>
                    </li>
                    {
                    localStorage.getItem('token') ? 
                    <li><Link className="nav-link" onClick={()=>{onLogout();profileCheck();}}>Cerrar Sesión ({profile.username})</Link></li> : 
                    <div className='d-flex'>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Iniciar Sesión</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">Registrarse</Link>
                        </li>
                    </div>
                    }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default MainNav;