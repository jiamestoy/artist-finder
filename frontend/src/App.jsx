import ArtistList from "./ArtistList";
import { useEffect, useState } from 'react';

function App() {

  const [artists, setArtists] = useState([])

  useEffect(()=> {
    fetch('http://localhost:1234/api/users')
    .then(response => response.json())
    .then(data=> {
      setArtists(data)
    })
  }, [])
    return (
        <div>
            <h1 className="container-lg">Buscar Artista</h1>
            <ArtistList list={artists} />
        </div>
    )
}

export default App