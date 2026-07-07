const {MongoClient}=require('mongodb')
const uri = "mongodb+srv://mohit_db_user:mohit12345@cluster0.ihluqut.mongodb.net/";
const client = new MongoClient(uri);
const dbName = 'first';
async function main() {
    await client.connect();
    console.log("connection sucessfully connected")
    const db = client.db(dbName)
    const collection = db.collection('user');
    const find = await collection.find({}).toArray();
    console.log('Found document=>',find);
    return 'done.';
}
main()
    .then(console.log)
    .catch(console.error)
    .finally(()=>client.close());