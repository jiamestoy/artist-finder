import {useState} from 'react'
import './SignupPage.css'
import { useNavigate } from 'react-router-dom'
import usersService from '../services/users.service.js'

function SignupPage(){
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordCheck, setpasswordCheck] = useState('')
    const [role, setRole] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const onChangeUsername = (event) =>{
        setUsername(event.target.value)
    }

    const onChangeEmail = (event) =>{
        setEmail(event.target.value)
    }

    const onChangeRole = (event) =>{
        setRole(event.target.value)
    }

    const onChangePassword = (event) =>{
        setPassword(event.target.value)
    }

    const onChangePasswordCheck = (event) =>{
        setpasswordCheck(event.target.value)
    }
    
    const onSubmit = (event) =>{
        event.preventDefault()

        usersService.createUser({username, email, password, passwordCheck, role})
        .then(()=>{
            navigate('/success', {replace: true})
        }).catch(e=>{
            console.log("Error al registrarse", error)
            setError(e.error.message)
        })
    }

    return(
        <div className="container w-50 my-3 p-3 border rounded d-flex flex-column">
            <h1 className="mb-3 align-self-center">Registrarse</h1>
            <form action="/api/users" method="post" encType="application/x-www-form-urlencoded" className="d-flex flex-column" id="register-form" noValidate onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Nombre de Usuario:</label>
                    <input type="text" id="username" name="username" className="form-control" required onChange={onChangeUsername} value={username} />
                    <div className="invalid-feedback" id="username-feedback"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" id="email" name="email" className="form-control" required onChange={onChangeEmail} value={email} />
                    <div className="invalid-feedback" id="email-feedback"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label m-0">Contraseña:</label>
                    <input type="password" id="password" name="password" className="form-control" required title="Debe contener al menos una letra minúscula, una letra mayúscula, un número y 8 caracteres o más." onChange={onChangePassword} value={password} />
                    <div className="invalid-feedback" id="password-feedback"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Confirmar Contraseña:</label>
                    <input type="password" id="passwordCheck" name="passwordCheck" className="form-control" required onChange={onChangePasswordCheck} />
                    <div className="invalid-feedback" id="confirm-password-feedback"></div>
                </div>
                <fieldset className="mb-3" id="radios">
                    <legend className="text-center">¿Quieres ofrecer tus servicios?</legend>
                    <div className="d-flex justify-content-center">
                        <div className="mx-3">
                            <input type="radio" name="role" value="artist" className="form-check-input" required onChange={onChangeRole }/>
                            <label htmlFor="userArtist" className="form-check-label">Sí, soy artista</label>
                        </div>
                        <div className="mx-3">
                            <input type="radio" name="role" value="buyer" className="form-check-input" onChange={onChangeRole} />
                            <label htmlFor="userBuyer" className="form-check-label">No, sólo quiero comprar</label>
                        </div>
                    </div>
                    <div className="invalid-feedback" id="radio-feedback"></div>
                </fieldset><button type="submit" className="register-button align-self-center w-50" id="register-button">Crear Cuenta</button>
            </form>
        </div>
    )
}

export default SignupPage