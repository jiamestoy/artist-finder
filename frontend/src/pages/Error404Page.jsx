import MainNav from "../components/MainNav"
import { SessionProvider } from "../contexts/session.context"
import Footer from "../components/Footer"

function Error404Page() {

    return (
      <SessionProvider>
        <MainNav/>
        <main className="container-lg">
          <div>
            <h1 className="container-lg">Página no encontrada.</h1>
          </div>
        </main>
        <Footer/>
      </SessionProvider>
  )
}

export default Error404Page