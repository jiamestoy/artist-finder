import PropTypes from 'prop-types'
import ArtistsListItem from './ArtistsListItem.jsx'
import { useState, useEffect } from 'react'


function ArtistsList({list}){
    const [artists, setArtists] = useState(list)

    const onChangeFilter = (event)=>{
        const filter = event.target.value.toLowerCase()

        const filterWords = filter.toLowerCase().split(" ");

        function removeSpecialChars(string) {
          return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        }
        
        const artistsFilter = list.filter(artist =>
          filterWords.every(word =>
            (artist.categories && artist.categories.some(category => removeSpecialChars(category.toLowerCase()).includes(removeSpecialChars(word)))) ||
            (artist.username && removeSpecialChars(artist.username.toLowerCase()).includes(removeSpecialChars(word))) ||
            (artist.first_name && removeSpecialChars(artist.first_name.toLowerCase()).includes(removeSpecialChars(word))) ||
            (artist.last_name && removeSpecialChars(artist.last_name.toLowerCase()).includes(removeSpecialChars(word)))
          )
        );   
        
        setArtists(artistsFilter)
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