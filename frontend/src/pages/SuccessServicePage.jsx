import MainNav from "../components/MainNav"
import { SessionProvider } from "../contexts/session.context"
import Footer from "../components/Footer"

function SuccessServicePage(){
    
    return(
        <SessionProvider>
            <MainNav/>
            <main className="container-lg">
                <div className="d-flex flex-column align-items-center">
                    <img src="imgs/success.png" alt="Símbolo de correcto" className="mw-100 my-3" />
                    <h1 className="text-center">¡Servicio creado con éxito!</h1>
                </div>
            </main>
            <Footer/>
        </SessionProvider>
    )
}

export default SuccessServicePage