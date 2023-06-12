import ArtistPortfolioItem from './ArtistPortfolioItem'

function ArtistPortfolio({portfolio, username}){
    return (
        <div className="row gx-2 mt-3">
            <div className="container-fluid">
                <div className="row">
                    {portfolio.map(picture => <ArtistPortfolioItem key={picture} username={username} picture={picture} />)}
                </div>
            </div>
        </div>
    )
}

export default ArtistPortfolio