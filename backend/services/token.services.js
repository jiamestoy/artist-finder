import jwt from 'jsonwebtoken'
import { MongoClient, ObjectId } from 'mongodb';
const client = new MongoClient('mongodb://127.0.0.1:27017');
const db = client.db('ARTIST_FINDER');
const tokensCollection = db.collection("tokens")

async function createToken(account){
    const token = jwt.sign(account, 'CLAVE')

    await client.connect()

    await tokensCollection.insertOne({token, account_id: new ObjectId(account._id)})

    return token
}

async function verifyToken(token){
    try{
        const payload = jwt.verify(token, 'CLAVE')

        await client.connect()

        const exist = await tokensCollection.findOne({token, account_id: new ObjectId(payload._id)})

        if (!exist) {
            return null
        }

        return payload
    } catch(err){
        return null
    }
}

async function removeToken(token){
    await client.connect()

    await tokensCollection.deleteOne({token})
}

export {
    createToken,
    verifyToken,
    removeToken
}