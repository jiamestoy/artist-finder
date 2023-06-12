function ArtistPortfolioItem({picture, username}){
        
    return (
        <div className="col-md-6 col-lg-4 col-xl-3">
            <figure>
                <img src={`/imgs/portfolio/${username}/${picture}`} className="img-thumbnail grayscale" />
            </figure>
        </div>
    )
}

export default ArtistPortfolioItem