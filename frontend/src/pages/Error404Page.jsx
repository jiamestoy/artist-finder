import MainNav from "../components/MainNav"
import { SessionProvider } from "../contexts/session.context"

function Error404Page() {

    return (
      <SessionProvider>
        <MainNav/>
        <div>
            <h1 className="container-lg">Página no encontrada.</h1>
        </div>
      </SessionProvider>
  )
}

export default Error404Page