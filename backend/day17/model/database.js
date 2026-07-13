const mongoose = require('mongoose') 
async function main() {
    await mongoose.connect("mongodb+srv://mohit_db_user:mohit12345@cluster0.ihluqut.mongodb.net/instagram")
}
module.exports = main