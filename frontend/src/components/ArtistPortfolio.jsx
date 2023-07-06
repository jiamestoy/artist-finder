import ArtistPortfolioItem from './ArtistPortfolioItem'
import './ArtistPortfolio.css'

function ArtistPortfolio({portfolio, username}){
    return (
        <div className="portfolio-container">
            {portfolio.map(picture => <ArtistPortfolioItem key={picture} username={username} picture={picture} />)}
        </div>
    )
}

export default ArtistPortfolio