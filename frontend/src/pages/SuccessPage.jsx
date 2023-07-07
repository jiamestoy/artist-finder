import MainNav from "../components/MainNav"
import { SessionProvider } from "../contexts/session.context"
import Footer from "../components/Footer"
import './SuccessPage.css'

function SuccessPage(){
    
    return(
        <SessionProvider>
            <MainNav/>
            <main>
                <div className="success-container">
                    <img src="imgs/success.png" alt="Símbolo de correcto" className="mw-100 my-3" />
                    <h1 className="text-center">¡Cuenta creada con éxito!</h1>
                </div>
            </main>
            <Footer/>
        </SessionProvider>
    )
}

export default SuccessPage