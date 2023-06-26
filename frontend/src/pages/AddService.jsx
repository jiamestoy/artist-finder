import {useState, useEffect} from 'react'
import './SignupPage.css'
import { useNavigate } from 'react-router-dom'
import servicesService from '../services/services.service'
import categoriesService from '../services/categories.service'
import MainNav from '../components/MainNav'
import { SessionProvider } from '../contexts/session.context'
import { useParams } from "react-router-dom"

function AddService(){

    const {idUser} = useParams()

    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')
    const [nameIsValid, setNameIsValid] = useState('')

    const [description, setDescription] = useState('')
    const [descriptionError, setDescriptionError] = useState('')
    const [descriptionlIsValid, setDescriptionIsValid] = useState('')

    const [minPrice, setMinPrice] = useState('')
    const [minPriceError, setMinPriceError] = useState('')
    const [minPriceIsValid, setMinPriceIsValid] = useState('')

    const [categories, setCategories] = useState([])
    const [categoriesError, setCategoriesError] = useState('')

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

    const [categoriesOptions, setCategoriesOptions] = useState([])

    useEffect(()=>{
        categoriesService.getCategories().then(categoriesOptions=>{
            setCategoriesOptions(categoriesOptions)
        })    
    }, [])

    const [error, setError] = useState('')

    const navigate = useNavigate()

    const onChangeName = (event) =>{
        setName(event.target.value)
        setError('')
        if (event.target.value.length == 0) {
            setNameIsValid(false)
            setNameError('Debe ingresar un nombre de servicio.')
        } else {
            setNameIsValid(true)
            setNameError('')
        }
    }

    const onChangeDescription = (event) =>{
        setDescription(event.target.value)
        setError('')
        if (event.target.value.length == 0){
            setDescriptionIsValid(false)
            setDescriptionError('Debe ingresar una descripción del servicio.')
        } else {
            setDescriptionIsValid(true)
            setDescriptionError('')
        }
    }

    const onChangeMinPrice = (event) =>{
        setMinPrice(event.target.value)
        setError('')

        if (event.target.value <= 0) {
            setMinPriceIsValid(false)
            setMinPriceError('El precio debe ser igual o mayor a 0.')
        } else {
            setMinPriceIsValid(true)
            setMinPriceError('')
        }
    }

    const onChangeCategories = (event) => {

        const selectedCategory = event.target.value
        setSelectedCategory(selectedCategory)

        setCategories ([selectedCategory])
        setCategoriesError('')
        setError('')
    };

    const onChangeSubcategories = (event) => {
        const checkboxValue = event.target.value;
        const isChecked = event.target.checked;
      
        if (isChecked) {
          setCategories((prevCategories) => [...prevCategories, checkboxValue]);
          setSelectedCheckboxes([...selectedCheckboxes, checkboxValue]);
        } else {
          setCategories((prevCategories) =>
            prevCategories.filter((value) => value !== checkboxValue)
          );
          setSelectedCheckboxes(
            selectedCheckboxes.filter((value) => value !== checkboxValue)
          );
        }
    };


    const onSubmit = (event) =>{
        if (nameIsValid && descriptionlIsValid && minPriceIsValid && categories != '') {
            event.preventDefault()

            const artist_id = idUser
            const min_price = minPrice

            servicesService.createService({name, description, min_price, categories, artist_id})
            .then(()=>{
                navigate('/success-service', {replace: true})
            }).catch(e=>{
                setError(e.error.message)
                console.log("Error al crear el servicio", e.error.message)
            })
        } else {
            event.preventDefault()

            if (categories == '') {
                event.preventDefault()
                setCategoriesError('Seleccione una de las opciones.')
            } else {
                if (name == ''){
                    setNameError('Debe ingresar un nombre de servicio.')
                } else if (description == '') {
                    setDescriptionError('Debe ingresar una descripción del servicio.')
                } else if (minPrice <= 0) {
                    setMinPriceError('El precio debe ser igual o mayor a 0..')
                }
                setError('Verifique todos los campos.')
            } 
        }
    }

    return(
        <SessionProvider>
            <MainNav/>
            <div className="container w-75 my-3 p-3 border rounded d-flex flex-column">
                <h1 className="mb-3 align-self-center">Agregar un Servicio Nuevo</h1>
                <form className="d-flex flex-column" id="add-service-form" noValidate onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre del Servicio:</label>
                        <input type="text" id="name" name="name" className='form-control' required onChange={onChangeName} value={name} />
                        <div className='register-error'>{nameError}</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Descripción del Servicio:</label>
                        <textarea id="description" name="description" className='form-control' required onChange={onChangeDescription} value={description}></textarea>
                        <div className='register-error'>{descriptionError}</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="minPrice" className="form-label m-0">Precio Mínimo:</label>
                        <input type="number" min="0" id="minPrice" name="minPrice" className='form-control' required onChange={onChangeMinPrice} value={minPrice} />
                        <div className='register-error'>{minPriceError}</div>
                    </div>
                    <fieldset className="mb-3" id="radios">
                        <legend className="text-center">Categoría:</legend>
                        <div className="d-flex justify-content-center">
                            {categoriesOptions.map((category) => (
                            <div className="mx-3" key={category._id}>
                                <div className="form-check">
                                <input type="radio" id={`category${category.name}`} name="categories" value={category.name} className="form-check-input" required onChange={onChangeCategories} />
                                <label htmlFor={`category${category.name}`} className="form-check-label">{category.name}</label>
                                </div>
                            </div>
                            ))}
                        </div>
                        {selectedCategory ? (
                        <div className="justify-content-center">
                            <div>
                                <legend className="text-center">Materiales:</legend>
                                {categoriesOptions.map((category) => (
                                <div className="d-flex justify-content-center" key={category._id}>
                                    {selectedCategory === category.name && category.type.map((type) => (
                                    <div className="form-check" key={type}>
                                    <input type="checkbox" id={`subcategory${type}`} name={type} className="form-check-input" value={type} onChange={onChangeSubcategories} />
                                    <label htmlFor={`subcategory${type}`} className="form-check-label">{type}</label>
                                    </div>
                                ))}
                                </div>
                            ))}
                            </div>

                            <div>
                                <legend className="text-center">Estilos:</legend>
                                {categoriesOptions.map((category) => (
                                <div className="d-flex justify-content-center" key={category._id}>
                                    {selectedCategory === category.name && category.style.map((style) => (
                                    <div className="form-check" key={style}>
                                        <input type="checkbox" id={`subcategory${style}`} name={style} className="form-check-input" value={style} onChange={onChangeSubcategories} />
                                        <label htmlFor={`subcategory${style}`}  className="form-check-label">{style}</label>
                                    </div>
                                ))}
                                </div>
                            ))}
                            </div>
                        </div>
                        ) : null}
                        <div className="register-error text-center">{categoriesError}</div>
                    </fieldset>

                    <div className='register-error text-center mb-3'>{error}</div>
                    <button type="submit" className="register-button align-self-center w-50" id="register-button">Crear Servicio</button>
                </form>
            </div>
        </SessionProvider>
    )
}

export default AddService