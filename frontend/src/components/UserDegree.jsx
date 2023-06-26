function ArtistDegree({degree}){
    return (
        <ul>
            <li><strong>{degree.degree}</strong></li>
            <li>{degree.institution}</li>
            <li>{degree.date}</li>
        </ul>
    )
}

export default ArtistDegree