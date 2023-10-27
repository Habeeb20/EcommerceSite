const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    email: {
        type:String,
        required: true
    },
    password: {
        type:String,
        reuired: true
    },
    phone:{
        type:String,
        required:true

    },
    isAdmin: {
        type: Boolean,
        default: false,

    },

    address: {
        type: String,
        default:""
    },

    country:{
        type: String,
        default:""
    }
});


module.exports= mongoose.model('User', userSchema);
