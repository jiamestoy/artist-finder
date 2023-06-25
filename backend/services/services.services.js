import { MongoClient, ObjectId } from 'mongodb';

const client = new MongoClient('mongodb://127.0.0.1:27017');
const db = client.db('ARTIST_FINDER');

async function getServices() {
    
    await client.connect()

    const userServices = await db.collection('services').find().toArray();

    return userServices
}


async function getServicesById(idService) {
    
    await client.connect()

    const userServices = db.collection('services').findOne({ _id: new ObjectId(idService) });

    return userServices
}

async function getServicesByUserId(idUser) {

    await client.connect()

    const userServices = db.collection('services').find({ artist_id: idUser }).toArray(function(err, result) {
        if (err) throw err;
        db.close();
      });

    return userServices
}

async function createService(service) {

    await client.connect()

    await db.collection('services').insertOne(service)
}

export {
    getServices,
    getServicesById,
    getServicesByUserId,
    createService
}