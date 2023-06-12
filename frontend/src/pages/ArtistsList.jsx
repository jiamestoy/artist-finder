import PropTypes from 'prop-types'
import ArtistsListItem from './ArtistsListItem.jsx'
import { useState, useEffect } from 'react'


function ArtistsList({list}){
    const [artists, setArtists] = useState(list)

    const onChangeFilter = (event)=>{
        const filter = event.target.value.toLowerCase()
        const artistsFiler = list.filter(artist => artist.categories && artist.categories.some(category => category.toLowerCase().includes(filter)) || artist.username.toLowerCase().includes(filter))
        setArtists(artistsFiler)
    }

    useEffect(()=>{
        setArtists(list)
    }, [list])

    return (
        <div className='artist-list'>
            <form className='artist-list__form'>
            <input id="filtro" className="artist-list__filter form-control" type='text' onChange={onChangeFilter} />
            </form>
            <div className='artist-list__list'>
                {artists.map(artist => <ArtistsListItem key={artist._id} artist={artist} />)}
            </div>
        </div>
    )
}

ArtistsList.propTypes = {
    list: PropTypes.array.isRequired
}

export default ArtistsList