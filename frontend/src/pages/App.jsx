import MainNav from "../components/MainNav"
import { SessionProvider } from "../contexts/session.context"
import Footer from "../components/Footer"

function App() {

    return (
      <SessionProvider>
        <MainNav/>
        <main className="container-lg">
          <div>
              <h1 className="container-lg">Home</h1>
          </div>
        </main>
        <Footer/>
      </SessionProvider>
  )
}

export default App