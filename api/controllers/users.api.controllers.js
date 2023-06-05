import * as service from '../../services/users.services.js'

async function createUser(req, res) {

    return service.createUser(req.body)
    .then(()=>{
        // res.status(201).json({message: 'Cuenta creada con éxito.'})
        res.redirect("/success")
    })
    .catch((err)=>{
        res.status(400).json({error: err})
    })
}

export {
    createUser,
}