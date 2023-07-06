import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import servicesReviews from '../services/reviews.service.js'
import ArtistReviewItem from './ArtistReviewItem.jsx'



function ArtistsReviews({ onAverageScore }){
    
    const {idUser} = useParams()
    const [reviews, setReviews] = useState([])

    function calculateAverageScore(reviews) {

        let partialScore = 0;

        reviews.forEach((review) => {
            partialScore += review.score;
        });
    
        let finalScore = partialScore / reviews.length;

        return finalScore;
    }

    useEffect(() => {
        const averageScore = calculateAverageScore(reviews);
        onAverageScore(averageScore);
    }, [reviews, onAverageScore]);


    useEffect(()=>{
        servicesReviews.getReviewsByUserId(idUser)
        .then(reviews=>{
            setReviews(reviews.reviews)
        }).catch(review=>{
            return (
                setReviews([])
            )            
        })
    }, [])

    return (
        <div className="reviews-container">
            {reviews.length != 0 ? reviews.map(review => <ArtistReviewItem key={review.author_id} review={review} />) : <p>Este artista todavía no fue calificado.</p>}
        </div>
    )
}

export default ArtistsReviews