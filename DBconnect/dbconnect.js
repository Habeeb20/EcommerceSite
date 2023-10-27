const mongoose = require("mongoose");
const colors = require("colors");


const connectdb = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://Habeeb:Ademola1234@habeeb.pal57xa.mongodb.net/Ecommerce?retryWrites=true&w=majority")
        if(connect){
            console.log(`connected to database`.bgYellow.black)
        } else{
            console.log("error occured in the connection")
        }
        
    } catch (error) {
        console.log(`check your internet connection`.bgRed.white)
        

        
    }

}

module.exports = connectdb;
