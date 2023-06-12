import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb://127.0.0.1:27017');
const db = client.db('ARTIST_FINDER');


async function getReviews(idUser) {

    await client.connect()
    
    return db.collection('reviews').findOne({ artist_id: idUser })
}

export {
    getReviews,
}