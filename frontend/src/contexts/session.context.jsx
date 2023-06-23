import usersService from "../services/users.service.js"
import authService from "../services/auth.service.js"
import { createContext, useCallback, useContext, useEffect, useState } from "react"

const SessionContext = createContext()

function useProfile(){
    const { profile } = useContext(SessionContext)
    return profile
}

function useOnLogout(){
    const { onLogout } = useContext(SessionContext)
    return onLogout
}

function useSession(){
    const { profile, onLogout } = useContext(SessionContext)
    return { profile, onLogout }
}

function SessionProvider({children}){
    const [profile, setProfile] = useState({})

    const onLogout = useCallback(() =>{
        authService.logout()
        localStorage.removeItem('token')
    }, [])

    if (localStorage.getItem('token')) {
        useEffect(() => {
            usersService.getCurrent()
            .then(profile => setProfile(profile))
        }, [])
    }

    return (
        <SessionContext.Provider value={{profile, onLogout}}>
            {children}
        </SessionContext.Provider>
    )
}

export {
    useProfile,
    useOnLogout,
    useSession,
    SessionProvider
}