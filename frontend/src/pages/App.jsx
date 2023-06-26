import MainNav from "../components/MainNav"
import { SessionProvider } from "../contexts/session.context"
import Footer from "../components/Footer"

function App() {

    return (
      <SessionProvider>
        <MainNav/>
        <div>
            <h1 className="container-lg">Home</h1>
        </div>
        <Footer/>
      </SessionProvider>
  )
}

export default App