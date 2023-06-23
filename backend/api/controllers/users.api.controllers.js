import * as service from '../../services/users.services.js'
import * as tokenService from '../../services/token.services.js'


function getUsers(req, res) {

    const role = req.params.role

    service.getUsers(role)
        .then(function (users) {
            res.status(200).json(users)
        })

}

function getUsersById(req, res) {
    
    const idUser = req.params.idUser

    service.getUserById(idUser)
        .then(function (user) {
            res.status(200).json(user)
        })
}

async function createUser(req, res) {

    return service.createUser(req.body)
    .then(()=>{
        res.status(201).json({message: 'Cuenta creada con éxito.'})
        // res.redirect("/success")
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

async function getCurrentUser(req, res) {
    return service.getCurrentUser(req.account?._id)
        .then((user) => {
            res.status(200).json(user)
        })
        .catch((err) => {
            res.status(400).json({error: {message: err.message}})
        })
}

export {
    createUser,
    getUsers,
    getUsersById,
    login,
    logout,
    getCurrentUser
}