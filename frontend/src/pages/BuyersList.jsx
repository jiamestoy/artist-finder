function BuyersList({buyer}){

    return (
        <div className='buyers-list'>
            <ul className='buyers-list__list'>
                <li><a href={`/user/${buyer._id}`}>{buyer.username}</a></li>
            </ul>
        </div>
    )
}

export default BuyersList