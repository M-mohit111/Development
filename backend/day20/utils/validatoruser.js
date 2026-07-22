const validator = require("validator")

function validateuser(data) {
    // so this is the normal method to get data from the user and send to database
        // await User.create(req.body)
        // res.send("data have arrived and saved in userdata")
    
        // but at database we have lookup every to sorted out thing which are exptra and unnecessary
        // so avoid that we sortout thing at api level 
        // like when we can data verify and send message from here only
    
        const mandatoryfeild = ["fistname","email","age","password"]
    
        const isallow = mandatoryfeild.every((k)=>Object.keys(data).includes(k))
    
        if(!isallow){
            throw new Error("feild missing")
        }

        if(!validator.isEmail(data.email)){
            throw new Error("Invalid email")
        }

        if(!validator.isStrongPassword(data.password)){
            throw new Error("weak password")
        }
}

module.exports = validateuser