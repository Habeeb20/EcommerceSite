require('dotenv').config();
const jwt = require("jsonwebtoken");
const userModel = require("../models/usermodel")



const requireSignIn = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader) return res.sendStatus(401);
    console.log(authHeader)
    const token = authHeader.split(' ')[1]
   
    jwt.verify(token, process.env.JWT_SECRET,(err, user) => {
        if(err)return res.sendStatus(403)
        req.user = user
        next()
    })
    
};



const verifyJWT = (req, res, next) => {
    
    const authHeader =
        req.headers.authorization || req.headers.Authorizations
    if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401)
    const token = authHeader.split(' ')[1]
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403)
        req.userId = decoded.userId
        next()
    })
}


const isAdmin = async (req, res, next ) => {
    try {
        const user = await userModel.findById(req.user._id);
        if(user.role !== 1) {
            return res.render("welcomepage"),
            console.log("unathorized")
        } else{
            next()
        }
    } catch (error) {
        console.log(error)
        
    }
};


module.exports = { requireSignIn, isAdmin, verifyJWT}