import PropTypes from 'prop-types'
import ArtistsListItem from './ArtistsListItem.jsx'
import ServiceListItem from './ServiceListItem.jsx'
import { useState, useEffect } from 'react'
import categoriesService from '../services/categories.service.js'
import './SearchArtistsAndServices.css'

function SearchArtistsAndServices({ list, listServices }){
  const [artists, setArtists] = useState(list)
  const [services, setServices] = useState(listServices)
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categories, setCategories] = useState([])

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

  const [showArtists, setShowArtists] = useState(true);

  const handleShowArtists = () => {
    setShowArtists(true);
  };

  const handleShowServices = () => {
    setShowArtists(false);
  };
  
  const onChangeFilterCategory = (event) => {
      const selectedCategory = event.target.value;
    
      if (selectedCategories.includes(selectedCategory)) {
        setSelectedCategories(selectedCategories.filter((category) => category !== selectedCategory));
      } else {
        setSelectedCategories([...selectedCategories, selectedCategory]);
      }
    };
    
  useEffect(() => {
    categoriesService.getCategories().then(categories=>{
      setCategories(categories)
    })   

    if (selectedCategories.length === 0) {
      setArtists(list);
      setServices(listServices);
    } else {
      const artistsFilter = list.filter((artist) =>
        artist.categories && selectedCategories.some((category) => artist.categories.includes(category))
      );
      setArtists(artistsFilter);
  
      const servicesFilter = listServices.filter((service) =>
        service.categories && selectedCategories.some((category) => service.categories.includes(category))
      );
      setServices(servicesFilter);
    }
  }, [list, listServices, selectedCategories]);

  return (
    <div className="search-page-container">
      <form className="search-form">
        <h2>Filtrar</h2>
        <input
          id="filtro"
          className="search-filter-input"
          type="text"
          onChange={onChangeFilter}
        />
        <fieldset className="categories-filter">
          <legend className="text">Categorías</legend>
          <div>
            {categories.map((category) => (
              <div key={category._id}>
                <input type="checkbox" id={`category${category.name}`} name="categories" value={category.name} className="form-check-input" checked={selectedCategories.includes(category.name)} onChange={onChangeFilterCategory} />
                <label htmlFor={`category${category.name}`} className="form-check-label" >{category.name}</label>
              </div>
            ))}
          </div>
          <div className="justify-content-center">
            {categories.map((category) => (
              <div key={category._id}>
                <legend>Tipo de {category.name}</legend>
                {category.type.map((type) => (
                  <div className="form-check" key={type}>
                    <input type="checkbox" id={`subcategory${type}`} name='categories' className="form-check-input" value={type} checked={selectedCategories.includes(type)} onChange={onChangeFilterCategory} />
                    <label htmlFor={`subcategory${type}`}className="form-check-label">{type}</label>
                  </div>
                ))}
              </div>
            ))}
            <div>
              {categories.map((category) => (
                <div key={category._id}>
                  <legend>Estilo de {category.name}</legend>
                  {category.style.map((style)  => (
                    <div className="form-check" key={style}>
                      <input type="checkbox" id={`subcategory${style}`} name='categories' className="form-check-input" value={style} checked={selectedCategories.includes(style)} onChange={onChangeFilterCategory} />
                      <label htmlFor={`subcategory${style}`} className="form-check-label">{style}</label>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </fieldset>
      </form>
      <div className="search-results">

      <div className="search-artist-services-buttons">
        <button autoFocus className={`artists-button ${showArtists ? 'active' : ''}`} onClick={handleShowArtists}>
          Artistas
        </button>
        <button className={`services-button ${!showArtists ? 'active' : ''}`} onClick={handleShowServices}>
          Servicios
        </button>
      </div>

        
        {showArtists ? (
          <div className="search-result-list">
              {artists.length === 0 ? (
              <p>No hay coincidencias</p>
              ) : (
              artists.map((artist) => (
              <ArtistsListItem key={artist._id} artist={artist} />
              ))
            )}
          </div>
          ) : (
          <div className="search-result-list">
              {services.length === 0 ? (
              <p>No hay coincidencias</p>
              ) : (
              services.map((service) => (
              <ServiceListItem key={service._id} service={service} />
              ))
            )}
          </div>
        )}
      </div>

    </div>
  );    
}

SearchArtistsAndServices.propTypes = {
    list: PropTypes.array.isRequired
}

export default SearchArtistsAndServices;
