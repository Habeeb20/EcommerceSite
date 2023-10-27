const connectdb = require("./DBconnect/dbconnect");
connectdb();
const express = require("express");
const bodyPaser = require("body-parser");
const jwt = require("jsonwebtoken")
const morgan = require("morgan")
require('dotenv/config');
const cors = require("cors");
const categoryRoute = require("./routes/categoryRoute");
const productRoute = require("./routes/productRoute");
const client = require("./routes/userRoute");
const authJwt =require("./middlewares/jwt")



const app = express()
// app.use(authJwt({secret: "test"}));

app.set("view engine", "ejs")
app.use(cors());
app.use(express.static("public"))
app.options('*', cors);
app.use(express.json())
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));




// app.use('/', categoryRoute)
// app.use(`${api}/products`, productRoute)
app.use("/", client)
// app.use(`${api}/orders`, ordersRoutes)



const port = process.env.PORT || 2222;



app.get("/", (req, res) => {
    res.render("welcomepage")
});

app.get("/welcomepage", (req, res) => {
    res.render("welcomepage")
})

app.get("/wears", (req, res) => {
    res.render("wears")
})

app.get("/watches", (req, res) => {
    res.render("watches")
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`.bgGreen.black)
})
