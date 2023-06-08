import {useEffect, useState} from 'react'
import './LoginPage.css'
import { useNavigate } from 'react-router-dom'
import authService from '../services/auth.service.js'

function LoginPage(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const onChangeUsername = (event) =>{
        setUsername(event.target.value)
    }

    const onChangePassword = (event) =>{
        setPassword(event.target.value)
    }

    useEffect(()=>{
        authService.logout()
        localStorage.removeItem('token')
    }, [])

    const onSubmit = (event) =>{
        event.preventDefault()

        authService.login({username, password})
        .then(({token, account})=>{
            console.log("Sesion iniciada", {token, account})
            
            localStorage.setItem('token', token)

            navigate('/artists', {replace: true})
        })
        .catch(e=>{
            console.log("Error al iniciar sesion", error)
            setError(e.error.message)
        })
    }

    return(
        <div className='login-page'>
            <div className="container w-50 my-3 p-3 border rounded d-flex flex-column">
                <h1 className="mb-3 align-self-center">Login</h1>
                <form className="d-flex flex-column" id="login-form" novalidate onSubmit={onSubmit}>
                    <div className="mb-3">
                    <label for="username" className="form-label">Nombre de Usuario:</label>
                    <input type="text" id="username" name="username" className="form-control" required onChange={onChangeUsername} value={username}/>
                    <div className="invalid-feedback" id="username-feedback"></div>
                    </div>
                    <div className="mb-3">
                    <label for="password" className="form-label">Password:</label>
                    <input type="password" id="password" name="password" className="form-control" required onChange={onChangePassword} value={password}/>
                    <div className="invalid-feedback" id="password-feedback"></div>
                    </div>
                    <a href="#">¿Olvidaste tu contraseña?</a>
                    <p className='login-error'>{error}</p>
                    <button type="submit" className="login-button align-self-center w-50" id="login-button">Iniciar Sesión</button>
            </form>
            </div>
        </div>
    )
}

export default LoginPage