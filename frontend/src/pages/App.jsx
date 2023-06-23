import MainNav from "../components/MainNav"
import { SessionProvider } from "../contexts/session.context"

function App() {

    return (
      <SessionProvider>
        <MainNav/>
        <div>
            <h1 className="container-lg">Home</h1>
        </div>
      </SessionProvider>
  )
}

export default App