import './ArtistPortfolioItem.css'

function ArtistPortfolioItem({picture, username}){
        
    return (
        <img className="portfolio-img" src={`/imgs/portfolio/${username}/${picture}`} />
    )
}

export default ArtistPortfolioItem