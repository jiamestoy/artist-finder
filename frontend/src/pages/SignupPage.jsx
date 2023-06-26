import {useState} from 'react'
import './SignupPage.css'
import { useNavigate } from 'react-router-dom'
import usersService from '../services/users.service.js'
import authService from '../services/auth.service'
import MainNav from '../components/MainNav'
import { SessionProvider } from '../contexts/session.context'
import Footer from '../components/Footer'

function SignupPage(){
    const [username, setUsername] = useState('')
    const [usernameError, setUsernameError] = useState('')
    const [usernameIsValid, setUsernameIsValid] = useState('')

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [emailIsValid, setEmailIsValid] = useState('')

    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [passwordIsValid, setPasswordIsValid] = useState('')

    const [passwordCheck, setpasswordCheck] = useState('')
    const [passwordCheckError, setPasswordCheckError] = useState('')
    const [passwordCheckIsValid, setPasswordCheckIsValid] = useState('')

    const [role, setRole] = useState('')
    const [roleError, setRoleError] = useState('')

    const [error, setError] = useState('')

    const navigate = useNavigate()

    const onChangeUsername = (event) =>{
        setUsername(event.target.value)
        setError('')
        if (event.target.value.length == 0) {
            setUsernameIsValid(false)
            setUsernameError('Debe ingresar un nombre de usuario.')
        } else if (event.target.value.length < 4) {
            setUsernameIsValid(false)
            setUsernameError('El nombre de usuario debe contener un mínimo de 4 caracteres.')
        } else {
            setUsernameIsValid(true)
            setUsernameError('')
        }
    }

    const onChangeEmail = (event) =>{
        setEmail(event.target.value)
        setError('')
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (event.target.value.length == 0){
            setEmailIsValid(false)
            setEmailError('Debe ingresar una dirección de email.')
        } else if (!event.target.value.match(emailRegex)) {
            setEmailIsValid(false)
            setEmailError('Ingrese una dirección de email válida.')
        } else {
            setEmailIsValid(true)
            setEmailError('')
        }
    }

    const onChangePassword = (event) =>{
        setPassword(event.target.value)
        setPasswordCheckIsValid(false)
        setError('')
        const minusculas = /[a-z]/g;
        const mayusculas = /[A-Z]/g;
        const numeros = /[0-9]/g;

        if (event.target.value.length == 0) {
            setPasswordIsValid(false)
            setPasswordError('Debe ingresar una contraseña.')
        } else if (event.target.value.length < 8) {
            setPasswordIsValid(false)
            setPasswordError('La contraseña debe contener un mínimo de 8 caracteres.')
        } else if (!event.target.value.match(minusculas)) {
            setPasswordIsValid(false)
            setPasswordError('La contraseña debe contener al menos una letra minúscula.')
        } else if (!event.target.value.match(mayusculas)) {
            setPasswordIsValid(false)
            setPasswordError('La contraseña debe contener al menos una letra mayúscula.')
        } else if (!event.target.value.match(numeros)) {
            setPasswordIsValid(false)
            setPasswordError('La contraseña debe contener al menos un número.')
        } else {
            setPasswordIsValid(true)
            setPasswordError('')
        }
    }

    const onChangePasswordCheck = (event) =>{
        setpasswordCheck(event.target.value)
        setError('')
        if (event.target.value.length == 0){
            setPasswordCheckIsValid(false)
            setPasswordCheckError('Debe ingresar su contraseña nuevamente.')
        } else if (event.target.value != password) {
            setPasswordCheckIsValid(false)
            setPasswordCheckError('Las contraseñas debe coincidir.')
        } else {
            setPasswordCheckIsValid(true)
            setPasswordCheckError('')
        }
    }

    
    const onChangeRole = (event) =>{
        setRole(event.target.value)
        setRoleError('')
        setError('')
    }

    const onSubmit = (event) =>{
        if (usernameIsValid && emailIsValid && passwordIsValid && passwordCheckIsValid && role != '') {
            event.preventDefault()
            
            usersService.createUser({username, email, password, role})
            .then(()=>{
                authService.login({username, password})
                .then(({token, account}) => {
                    console.log("Sesion iniciada", {token, account})
                    localStorage.setItem('token', token)
                    navigate('/success', {replace: true})
                })
            }).catch(e=>{
                setError(e.error.message)
                console.log("Error al registrarse:", e.error.message)
            })
        } else {
            event.preventDefault()

            if (role == '') {
                event.preventDefault()
                setRoleError('Seleccione una de las opciones.')
            } else {
                if (username == ''){
                    setUsernameError('Debe ingresar un nombre de usuario.')
                } else if (email == '') {
                    setEmailError('Debe ingresar una dirección de email.')
                } else if (password == '') {
                    setPasswordError('Debe ingresar una contraseña.')
                } else if (passwordCheck == '') {
                    setPasswordCheckError('Debe ingresar su contraseña nuevamente.')
                } else if (passwordCheck != password) {
                    setPasswordCheckError('Las contraseñas debe coincidir.')
                }
                setError('Verifique todos los campos.')
            } 
        }
    }

    return(
        <SessionProvider>
            <MainNav/>
            <main className="container-lg">
                <div className="container w-50 my-3 p-3 border rounded d-flex flex-column">
                    <h1 className="mb-3 align-self-center">Registrarse</h1>
                    <form className="d-flex flex-column" id="register-form" noValidate onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Nombre de Usuario:</label>
                            <input type="text" id="username" name="username" className='form-control' required onChange={onChangeUsername} value={username} />
                            <div className='register-error'>{usernameError}</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" id="email" name="email" className='form-control' required onChange={onChangeEmail} value={email} />
                            <div className='register-error'>{emailError}</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label m-0">Contraseña:</label>
                            <input type="password" id="password" name="password" className='form-control' required title="Debe contener al menos una letra minúscula, una letra mayúscula, un número y 8 caracteres o más." onChange={onChangePassword} value={password} />
                            <div className='register-error'>{passwordError}</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Confirmar Contraseña:</label>
                            <input type="password" id="passwordCheck" name="passwordCheck" className='form-control' required onChange={onChangePasswordCheck} value={passwordCheck}/>
                            <div className='register-error'>{passwordCheckError}</div>
                        </div>
                        <fieldset className="mb-3" id="radios">
                            <legend className="text-center">¿Quieres ofrecer tus servicios?</legend>
                            <div className="d-flex justify-content-center">
                                <div className="mx-3">
                                    <input type="radio" id="userArtist" name="role" value="artist" className="form-check-input" required onChange={onChangeRole}/>
                                    <label htmlFor="userArtist" className="form-check-label">Sí, soy artista</label>
                                </div>
                                <div className="mx-3">
                                    <input type="radio" id="userBuyer" name="role" value="buyer" className="form-check-input" onChange={onChangeRole} />
                                    <label htmlFor="userBuyer" className="form-check-label">No, sólo quiero comprar</label>
                                </div>
                            </div>
                            <div className='register-error text-center'>{roleError}</div>
                        </fieldset>
                        <div className='register-error text-center mb-3'>{error}</div>
                        <button type="submit" className="register-button align-self-center w-50" id="register-button">Crear Cuenta</button>
                    </form>
                </div>
            </main>
            <Footer/>
        </SessionProvider>
    )
}

export default SignupPage