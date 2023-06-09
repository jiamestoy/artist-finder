import { useEffect, useState } from 'react';
import BuyersList from './BuyersList'
import usersService from '../services/users.service'
import MainNav from './MainNav';
import { SessionProvider } from '../contexts/session.context';
import Footer from './Footer';

function ShowBuyersList() {

  const [buyers, setBuyers] = useState([])

  useEffect(()=>{
      usersService.getBueyers().then(buyers=>{
        setBuyers(buyers)
      })    
  }, [])
  
    return (
      <SessionProvider>
        <MainNav/>
        <div>
            <h1 className="container-lg">Compradores</h1>
            {buyers.map(buyer => <BuyersList key={buyer._id} buyer={buyer} />)}
        </div>
        <Footer/>
      </SessionProvider>
    )
}

export default ShowBuyersList