import { Link } from "react-router-dom"

function BuyersList({buyer}){

    return (
        <div className='buyers-list'>
            <ul className='buyers-list__list'>
                <li><Link to={`/buyer/${buyer._id}`}>{buyer.username}</Link></li>
            </ul>
        </div>
    )
}

export default BuyersList