import { useEffect, useState } from 'react';
import BuyersList from './BuyersList'
import usersService from '../services/users.service'

function ShowBuyersList() {

  const [buyers, setBuyers] = useState([])

  useEffect(()=>{
      usersService.getBueyers().then(buyers=>{
        setBuyers(buyers)
      })    
  }, [])
  
    return (
        <div>
            <h1 className="container-lg">Compradores</h1>
            {buyers.map(buyer => <BuyersList key={buyer._id} buyer={buyer} />)}
        </div>
    )
}

export default ShowBuyersList