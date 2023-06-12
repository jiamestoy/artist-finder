function ArtistSocialNetwork({social_network}){
    return (
        <li>
            <a href={`https://${social_network}`} target="_blank" className="link-offset-2 link-underline link-underline-opacity-0">Link</a>
        </li>
    )
}

export default ArtistSocialNetwork