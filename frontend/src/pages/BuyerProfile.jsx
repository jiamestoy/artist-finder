import { useParams } from "react-router-dom"
import {useState, useEffect} from 'react'
import usersService from "../services/users.service"
import UserDegree from '../components/UserDegree'
import UserSocialNetwork from '../components/UserSocialNetwork'
import BuyerPurchasedServices from "../components/BuyerPurchasedServices"
import BuyerFavorites from "../components/BuyerFavorites"
import MainNav from "../components/MainNav"
import { SessionProvider } from "../contexts/session.context"
import Footer from "../components/Footer"

function BuyerProfile(){
    const [buyer, setBuyer] = useState({})
    const {idUser} = useParams()

    useEffect(()=>{
        usersService.getUserById(idUser)
        .then(buyer=>{
            setBuyer(buyer)
        })
    }, [idUser])

    return (
        <SessionProvider>
            <MainNav/>
            <main className="container-lg">
                <div className="row">
                    <div className="col-md-4 px-4 mt-4">
                        <div className="p-4 mb-4 border rounded d-flex flex-column align-items-center">
                            <img src={`/imgs/avatars/${buyer.avatar ? buyer.avatar : 'avatar_placeholder.png'}`} alt={`Avatar de ${buyer.username}`} className="img-thumbnail mb-3" />
                            <h1 className="fs-2 fw-semibold">{(buyer.first_name || buyer.last_name) != null ? buyer.first_name + ' ' + buyer.last_name : buyer.username}</h1>
                            <a href="#" className="btn btn-primary">Contactar</a>
                        </div>

                        <div className="p-4 mb-4 border rounded d-flex flex-column">
                            <div className="border-bottom">
                                <h2 className="fs-5 fw-semibold">Descripción</h2>
                                <p>{buyer.description ? buyer.description : 'Sin descripción'}</p>
                            </div>
                            <div className="mt-3">
                                <ul>
                                    <li className="d-flex justify-content-between"><span>De</span> <strong>{buyer.country ? buyer.country : 'Sin país seleccionado'}</strong></li>
                                    <li className="d-flex justify-content-between"><span>Miembro desde</span> <strong>{buyer.member_since ? buyer.member_since : 'Sin datos'}</strong></li>
                                </ul>
                                <h3 className="fs-5 fw-semibold">Idiomas</h3>
                                <p className="card-text">{buyer.languages? buyer.languages.join(", ") : 'Sin idiomas'}</p>
                                <h3 className="fs-5 fw-semibold">Educación</h3>
                                <div>
                                    {buyer.education ? buyer.education.map(degree => <UserDegree key={degree} degree={degree}/>) : <p>Sin títulos.</p>}
                                </div>
                                <h3 className="fs-5 fw-semibold">Redes Sociales</h3>
                                <div>
                                    <ul>
                                        {buyer.social_networks ? buyer.social_networks.map(social_network => <UserSocialNetwork key={social_network} social_network={social_network}/>) : <li>Sin redes sociales.</li>}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 px-4 mt-4">

                        <div className="p-4 mb-4 border rounded">
                            <h2 className="fs-4 fw-semibold">Últimos pedidos</h2>
                            {buyer.purchases ? buyer.purchases.map(purchase => <BuyerPurchasedServices key={purchase} purchase={purchase} /> ) : <p>Este usuario todavía no hizo compras.</p>}
                        </div>

                        <div className="p-4 mb-4 border rounded">
                            <h2 className="fs-4 fw-semibold">Favoritos</h2>
                            {buyer.favorites ? buyer.favorites.map(favorite => <BuyerFavorites key={favorite} favorite={favorite} /> ) : <p>Este usuario todavía no tiene servicios favoritos.</p>}
                        </div>

                    </div>
                </div>
            </main>
            <Footer/>
        </SessionProvider>
    )
}

export default BuyerProfile