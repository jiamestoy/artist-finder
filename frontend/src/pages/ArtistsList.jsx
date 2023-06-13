import PropTypes from 'prop-types'
import ArtistsListItem from './ArtistsListItem.jsx'
import { useState, useEffect } from 'react'
import CategoriesFilter from './CategoriesFilter.jsx'


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

    const onChangeFilterCategory = (event)=>{

        const filter = event.target.value;
        const isChecked = event.target.checked;

        const artistsFilter = list.filter(artist =>
            artist.categories && artist.categories.some(category =>
              isChecked ? category.toLowerCase().includes(filter) : true
            )
          );
          
        setArtists(artistsFilter);
    }

    useEffect(()=>{
        setArtists(list)
    }, [list])

    return (
        <div className='artist-list'>
            <form className='artist-list__form'>
                <input id="filtro" className="artist-list__filter form-control" type='text' onChange={onChangeFilter} />
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="filter" value="pintura" id="pintura" onChange={onChangeFilterCategory} />
                    <label className="form-check-label" htmlFor="pintura">Pintura</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="filter" value="dibujo" id="dibujo" onChange={onChangeFilterCategory} />
                    <label className="form-check-label" htmlFor="dibujo">Dibujo</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="filter" value="escultura" id="escultura" onChange={onChangeFilterCategory} />
                    <label className="form-check-label" htmlFor="escultura">Escultura</label>
                </div>
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