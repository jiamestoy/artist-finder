import { MongoClient, ObjectId } from 'mongodb';
import bcrypt from 'bcrypt'

const client = new MongoClient('mongodb://127.0.0.1:27017');
const db = client.db('ARTIST_FINDER');

async function getUsers(role) {
    
    await client.connect();
    return db.collection('users').find({ role: role }).toArray();
}

async function getUserById(idUser) {
    await client.connect();
    return db.collection('users').findOne({ _id: new ObjectId(idUser) });
}

async function createUser(user){

    await client.connect()

    const userExist = await db.collection('users').findOne({ username: user.username });

    if (userExist){
        throw new Error('La cuenta ya existe.')
    }

    const newUser = {...user}

    const salt = await bcrypt.genSalt(10);

    newUser.password = await bcrypt.hash(user.password, salt);

    await db.collection('users').insertOne(newUser);
}

async function login(account){
    await client.connect()

    const accountExist = await db.collection('users').findOne({username: account.username})

    if (!accountExist){
        throw new Error('La cuenta no existe')
    }

    const isMatch = await bcrypt.compare(account.password, accountExist.password)

    if(!isMatch){
        throw new Error('Password incorrecto')
    }

    return {...accountExist, password: undefined}
}

async function getCurrentUser(idUser) {
    await client.connect()

    const user = await db.collection('users').findOne({_id: new ObjectId(idUser)})

    if (!user) {
        throw new Error('No hay usuario con sesión iniciada.')
    }

    return user
}

export {
    getUsers,
    getUserById,
    createUser,
    login,
    getCurrentUser,
}