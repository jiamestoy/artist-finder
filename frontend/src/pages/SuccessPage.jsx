import MainNav from "../components/MainNav"
import { SessionProvider } from "../contexts/session.context"
import Footer from "../components/Footer"

function SuccessPage(){
    
    return(
        <SessionProvider>
            <MainNav/>
            <div className="d-flex flex-column align-items-center">
                <img src="imgs/success.png" alt="Símbolo de correcto" className="mw-100 my-3" />
                <h1 className="text-center">¡Cuenta creada con éxito!</h1>
            </div>
            <Footer/>
        </SessionProvider>
    )
}

export default SuccessPage