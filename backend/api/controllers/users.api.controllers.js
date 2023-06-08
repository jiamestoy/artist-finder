import * as service from '../../services/users.services.js'
import * as tokenService from '../../services/token.services.js'

function getUsers(req, res) {
    const filter = req.query

    service.getArtists(filter)
        .then(function (users) {
            res.status(200).json(users)
        })

}

async function createUser(req, res) {

    return service.createUser(req.body)
    .then(()=>{
        // res.status(201).json({message: 'Cuenta creada con éxito.'})
        res.redirect("/success")
    })
    .catch((err)=>{
        res.status(400).json({error: {message: err, test: 'Error del controller'}})
    })
}

async function login(req, res){
    return service.login(req.body)
    .then(async (account)=>{
        return {account, token: await tokenService.createToken(account)}
    })
    .then((datos)=>{
        res.status(200).json(datos)
    })
    .catch((err)=>{
        res.status(400).json({error: {message: err.message}})
    })
}

async function logout(req, res){
    return tokenService.removeToken(req.headers['auth-token'])
    .then(()=>{
        res.status(200).json({message: 'Sesión cerrada con éxito'})
    })
    .catch(err => {
        res.status(400).json({error: {message: err.message}})
    })
}

export {
    createUser,
    getUsers,
    login,
    logout
}