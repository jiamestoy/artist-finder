import PropTypes from 'prop-types'
import ArtistsListItem from './ArtistsListItem.jsx'
import ServiceListItem from './ServiceListItem.jsx'
import { useState, useEffect } from 'react'
import categoriesService from '../services/categories.service'


function ArtistsList({ list, listServices }){
    const [artists, setArtists] = useState(list)
    const [services, setServices] = useState(listServices)
    const [selectedCategories, setSelectedCategories] = useState([]);

    const [categories, setCategories] = useState([])
    useEffect(()=>{
        categoriesService.getCategories().then(categories=>{
            setCategories(categories)
        })    
    }, [])

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

        const servicesFilter = listServices.filter(service =>
            filterWords.every(word =>
              (service.categories && service.categories.some(category => removeSpecialChars(category.toLowerCase()).includes(removeSpecialChars(word)))) ||
              (service.name && removeSpecialChars(service.name.toLowerCase()).includes(removeSpecialChars(word)))
            )
          );   
          
        setServices(servicesFilter)
    }

    
    const onChangeFilterCategory = (event) => {
        const selectedCategory = event.target.value;
      
        if (selectedCategories.includes(selectedCategory)) {
          setSelectedCategories(selectedCategories.filter((category) => category !== selectedCategory));
        } else {
          setSelectedCategories([...selectedCategories, selectedCategory]);
        }
    };


    useEffect(()=>{
        setArtists(list)
        setServices(listServices)
    }, [list, listServices])

    useEffect(() => {
        if (selectedCategories.length === 0) {
          setArtists(list);
        } else {
          const artistsFilter = list.filter((artist) =>
            artist.categories && selectedCategories.some((category) => artist.categories.includes(category))
          );
          setArtists(artistsFilter);
        }
    }, [list, selectedCategories]);

    return (
        <div className='artist-list'>
            <form className='artist-list__form'>
                <input id="filtro" className="artist-list__filter form-control" type='text' onChange={onChangeFilter} />
                <fieldset className="mb-3" id="radios">
                    <legend className="text">Elegí la categoría:</legend>
                    <div className="d-flex ">
                        {categories.map((category) => (
                            <div className="mx-3" key={category._id}>
                                <input type="checkbox" id={`category${category.name}`} name="categories" value={category.name} className="form-check-input" checked={selectedCategories.includes(category.name)} onChange={onChangeFilterCategory} />
                                <label htmlFor={`category${category.name}`} className="form-check-label"> {category.name} </label>
                            </div>
                        ))}
                    </div>
                </fieldset>
            </form>
            <div className="d-flex justify-content-center">
                <div className='artist-list__list'>
                    <h2>Artistas</h2>
                    {artists.map(artist => <ArtistsListItem key={artist._id} artist={artist} />)}
                </div>
                <div className='artist-list__list'>
                    <h2>Servicios</h2>
                    {services.map(service => <ServiceListItem key={service._id} service={service} />)}
                </div>
            </div>
        </div>
    )
}

ArtistsList.propTypes = {
    list: PropTypes.array.isRequired
}

export default ArtistsList;
