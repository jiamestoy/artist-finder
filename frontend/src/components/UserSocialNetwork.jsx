function ArtistSocialNetwork({social_network}){


const socialNetworkName = social_network.replace(/^https?:\/\/(?:www\.)?([^/?#]+).*$/, '$1').split('.com')[0].charAt(0).toUpperCase() + social_network.split('.com')[0].slice(1);

    return (
        <li>
            <a href={`https://${social_network}`} target="_blank" className="link-offset-2 link-underline link-underline-opacity-0">{socialNetworkName}</a>
        </li>
    )
}

export default ArtistSocialNetwork