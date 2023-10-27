const express = require("express");
require('dotenv').config()
const client = express();
const bodyParser = require("body-parser");
client.use(bodyParser.json());
client.use(bodyParser.urlencoded({extended:true}));
const C_controller =require("../controllers/userController");

const { isAdmin, requireSignIn, verifyJWT } =require("../middlewares/authMiddleware");

client.set("view engine", "ejs")

client.get("/", C_controller.welcome);
client.get('/welcomepage1', C_controller.welcomepage1);

// client.get("/shoes", C_controller.shoes);
client.get("/signup", C_controller.signup);
client.post("/signup", C_controller.postsignup);
// client.post("/forgot-password", forgotPasswordController);
client.get("/login", C_controller.login);
client.post("/login",  C_controller.postlogin);
client.get("/cart", requireSignIn,  C_controller.getCart);
// client.get("/delete/:id", requireSignIn, C_controller.delete)
// client.get("/edit/:id", requireSignIn, C_controller.edit)
// client.post("/edit/:id", C_controller.postEdit)


module.exports= client;