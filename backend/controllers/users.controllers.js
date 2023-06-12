import * as services from '../services/users.services.js';
import * as reviewsServices from '../services/reviews.services.js';
import * as servicesServices from '../services/services.services.js';
import * as views from '../views/users.views.js';

function getHome(req, res) {
    res.send(views.createPage('Home', 'home'))
}

function getArtists(req, res) {
    services.getUsers()
        .then(function(users){
        
            res.send(views.createPage('Bucar Artista', 'artists', users))
        })
}

async function getArtistProfile(req, res) {
    const idArtist = req.params.idArtist
    const user = await services.getUserById(idArtist)

    if (user) {
        const reviews = await reviewsServices.getReviews(idArtist)
        const userServices = await servicesServices.getServices(idArtist)
        res.send(views.createPage(`Perfil de ${user.username}`, 'artist-profile', user, reviews, userServices))
    }
}

function getBuyers(req, res) {
    services.getUsers()
    .then(function(users){
    
        res.send(views.createPage('Compradores', 'buyers', users))
    })
}

async function getBuyerProfile(req, res) {
    const idBuyer = req.params.idBuyer
    const user = await services.getUserById(idBuyer)

    if (user) {
        res.send(views.createPage(`Perfil de ${user.username}`, 'buyer-profile', user))
    }
}

function getLogin(req, res) {
    res.send(views.createPage('Iniciar Sesión', 'login'))
}

function getSignup(req, res) {
    res.send(views.createPage('Registrarse', 'signup'))
}

function createNewUserSuccessPage(req, res) {
    res.send(views.createPage('Cuenta creada exitosamente', 'success'))
}

export {
    getHome,
    getArtists,
    getArtistProfile,
    getBuyers,
    getBuyerProfile,
    getLogin,
    getSignup,
    createNewUserSuccessPage
}