import {useEffect, useState} from 'react'
import './LoginPage.css'
import { useNavigate } from 'react-router-dom'
import authService from '../services/auth.service.js'
import MainNav from '../components/MainNav'
import { SessionProvider } from '../contexts/session.context'
import Footer from '../components/Footer'

function LoginPage(){
    const [username, setUsername] = useState('')
    const [usernameIsValid, setUsernameIsValid] = useState(false)
    const [usernameError, setUsernameError] = useState('')

    const [password, setPassword] = useState('')
    const [passwordIsValid, setPasswordIsValid] = useState(false)
    const [passwordError, setPasswordError] = useState('')

    const [error, setError] = useState('')

    const navigate = useNavigate()

    const onChangeUsername = (event) =>{
        setUsername(event.target.value)
        setUsernameIsValid(true)
        setUsernameError('')
        if (event.target.value == ''){
            setUsernameIsValid(false)
            setUsernameError('Debe ingresar su usuario.')
        }
    }

    const onChangePassword = (event) =>{
        setPassword(event.target.value)
        setPasswordIsValid(true)
        setPasswordError('')
        if (event.target.value == ''){
            setPasswordIsValid(false)
            setPasswordError('Debe ingresar su contraseña.')
        }
    }

    useEffect(()=>{
        authService.logout()
        localStorage.removeItem('token')
    }, [])

    const onSubmit = (event) =>{
        if(!usernameIsValid || !passwordIsValid) {
            event.preventDefault()
            setError('Verifique los campos.')
            if(username == '') {
                setUsernameError('Debe ingresar su usuario.')
            }
            if(password == ''){
                setPasswordError('Debe ingresar su contraseña.')
            }
        } else {
            event.preventDefault()
    
            authService.login({username, password})
            .then(({token, account})=>{
                console.log("Sesion iniciada", {token, account})
                
                localStorage.setItem('token', token)
    
                navigate('/', {replace: true})
            })
            .catch(e=>{
                console.log("Error al iniciar sesion", error)
                setError(e.error.message)
            })
        }
    }

    return(
        <SessionProvider>
            <MainNav/>
            <main className="login-page-content">
                <div>
                    <h1>Login</h1>
                    <form className="d-flex flex-column" id="login-form" noValidate onSubmit={onSubmit}>
                        <div className="input-container">
                            <label htmlFor="username" className="form-label">Nombre de Usuario:</label>
                            <input type="text" id="username" name="username" className="form-control" required onChange={onChangeUsername} value={username}/>
                        <div className="login-error">{usernameError}</div>
                        </div>
                        <div className="input-container">
                            <label htmlFor="password" className="form-label">Password:</label>
                            <input type="password" id="password" name="password" className="form-control" required onChange={onChangePassword} value={password}/>
                        <div className="login-error">{passwordError}</div>
                        </div>
                        <div className="forgot-password-container">
                            <a className="forgot-password-link" href="#">¿Olvidaste tu contraseña?</a>
                        </div>
                        <p className='login-error'>{error}</p>
                        <button type="submit" className="login-button align-self-center w-50" id="login-button">Iniciar Sesión</button>
                    </form>
                </div>
            </main>
            <Footer/>
        </SessionProvider>
    )
}

export default LoginPage