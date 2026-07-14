const bcrypt = require('bcrypt')
async function main(){
    const password = "mohit123"
    console.time("hash")
    // const hashpassword = await bcrypt.hash(password,10)\
// or
    const salt = await bcrypt.genSalt(10)
    const hashpassword = await bcrypt.hash(password,salt)

    console.timeEnd("hash")

    console.log(salt)
    console.log(hashpassword)
}
main()