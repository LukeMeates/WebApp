export async function GET(req, res) {

    // Make a note we are on
    // the api. This goes to the console.
    console.log("in the api page - getProducts")

    // =================================================
    const { MongoClient } = require('mongodb');
    
    const url = 'mongodb+srv://b00135198:TI6bnJky5m1uoPup@b00135198.nrnkbdc.mongodb.net/?retryWrites=true&w=majority';
    
    const client = new MongoClient(url);
    
    const dbName = 'app'; // database name
    
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('products'); // collection name
    
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

//==========================================================




    // at the end of the process we need to send something back.
    return Response.json(findResult)
}