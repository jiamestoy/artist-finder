import {useState, useEffect} from 'react'
import categoriesService from "../services/categories.service"

function CategoriesFilter({name}){

    const [category, setCategories] = useState({})

    useEffect(()=>{
        categoriesService.getCategoryByName(name)
        .then(category=>{
            setCategories(category)
        })
    }, [])

    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" name={`${category.name}`} id={`${category.name}`} />
            <label className="form-check-label" for={`${category.name}`}>{category.name}</label>
        </div>
    )
}


export default CategoriesFilter