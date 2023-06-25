import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb://127.0.0.1:27017');
const db = client.db('ARTIST_FINDER');

async function getCategories() {
    
    await client.connect()

    const userServices = db.collection('categories').find().toArray();

    return userServices
}

export {
    getCategories,
}