import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import servicesReviews from '../services/reviews.service.js'
import ArtistReviewItem from './ArtistReviewItem'



function ArtistsReviews(){
    
    const {idUser} = useParams()
    const [reviews, setReviews] = useState([])

    useEffect(()=>{
        servicesReviews.getReviewsByUserId(idUser)
        .then(reviews=>{
            setReviews(reviews.reviews)
        }).catch(review=>{
            return (
                setReviews()
            )            
        })
    }, [])

    return (
        <div className="row gx-2 mt-3">
            {reviews != null ? reviews.map(review => <ArtistReviewItem key={review.author_id} review={review} />) : <p>Este artista todavía no fue calificado.</p>}
        </div>
    )
}

export default ArtistsReviews