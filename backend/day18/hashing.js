const bcrypt = require('bcrypt')

async function main(){
    const password = "mohit123"
    const hashpassword = await bcrypt.hash(password,10)
    console.log(hashpassword)
}

main()
