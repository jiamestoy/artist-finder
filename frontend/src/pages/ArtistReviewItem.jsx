
function ArtistReviewItem({review}){

    function showScore(score) {

        if (score == 5) {
            return <div>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
            </div>
        } else if (
            score == 4) {
            return <div>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9734;</span>
            </div>
        } else if (
            score == 3) {
            return <div>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9734;</span>
                <span>&#9734;</span>
            </div>
        } else if (
            score == 2) {
            return <div>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9734;</span>
                <span>&#9734;</span>
                <span>&#9734;</span>
            </div>
        } else if (
            score == 1) {
            return <div>
                <span>&#9733;</span>
                <span>&#9734;</span>
                <span>&#9734;</span>
                <span>&#9734;</span>
                <span>&#9734;</span>
            </div>
        } else if (
            score == 0) {
            return <div>
                <span>&#9734;</span>
                <span>&#9734;</span>
                <span>&#9734;</span>
                <span>&#9734;</span>
                <span>&#9734;</span>
            </div>
        }
    }

    return (
        <div className="col-lg-4 mt-2">
            <div className="card p-2">
                <a href="#"><img src="../imgs/service_placeholder.webp" alt="Servicio" className="card-img-top rounded" /></a>
                <div className="card-body p-0">
                    <a href="#" className="link-dark link-underline-opacity-0 link-hover"><p className="card-text"><strong>{review.author_username}</strong></p></a>
                        <p className="card-text mt-2">{review.comment}</p>
        
                        <div className="border-top d-flex justify-content-between align-items-center p-2">
                            {showScore(review.score)}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ArtistReviewItem