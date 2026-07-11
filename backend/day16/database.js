const mongoose = require('mongoose')
async function main(){
    await mongoose.connect("mongodb+srv://mohit_db_user:mohit12345@cluster0.ihluqut.mongodb.net/bookstore")
    const newschema = new mongoose.Schema(
        {
            name:String
        }
    );
    const user = mongoose.model('user',newschema)
    const user1 = new user({name:"mohitagrawal"})
    await user1.save();
    // we can create this collection and object in one line 
    // await user.create({name:"mohit"})
    // if the collection are more than one then we can use insertmany
    // await user.insertMany([{name:"mohit"},{name:"agrawal"}])
    const data = await user.find({})
    console.log(data)
}

module.exports = main;