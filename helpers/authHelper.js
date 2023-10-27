const bcrypt = require("bcrypt");


const harhedSalt = 10;

const hashedPassword = async (password) => {
    const hash =  await bcrypt.hash(password, harhedSalt)
    if(hash){
        return hash
    }
}

const comparePassword = async(password) => {
    const compare = await bcrypt.compare(password, hashedPassword)
    return compare
};


module.exports = {
    hashedPassword,
    comparePassword
}