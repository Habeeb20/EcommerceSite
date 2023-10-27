require("dotenv").config;
const User = require("../models/usermodel");
const JWT = require("jsonwebtoken");
const color = require("colors");
const bcrypt = require("bcrypt");
const {
  comparePassword,
  hashedPassword,
} = require("./../helpers/authHelper.js");

const welcome = async (req, res) => {
  try {
    res.render("welcomepage");
  } catch (error) {
    console.log(error);
  }
};

const welcomepage1 = async (req, res) => {
  try {
    res.render("welcomepage1");
  } catch (error) {
    console.log(error);
  }
};
const signup = async (req, res) => {
  try {
    res.render("signup");
  } catch (error) {
    console.log(error);
  }
};

const postsignup = async (req, res) => {
  const { name, email, phone, address, password, country } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.render("login", {
        message: "the credentials already exist, please login",
      });
    }
    const hashPassword = await hashedPassword(password);
    const user = new User({
      name,
      email,
      phone,
      address,
      password: hashPassword,
      country,
    });
    const savedUser = await user.save();
    if (savedUser) {
      console.log(savedUser);
      res.render("login");
    }
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    res.render("login");
  } catch (error) {
    console.log(error);
  }
};

const postlogin = async (req, res) => {
  let jwtSecretKey = process.env.JWT_SECRET;
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      console.log(error);
      res.redirect("/signup", {
        message: "email or password is not registered",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      console.log(`email does not exist`.bgRed.white);
      res.render("login", { message: "your password is incorrect" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      console.log("password does not match the saved password");
      res.render("login", { message: "your password is incorrect" });
    }

    const token = JWT.sign({ _id: user._id, email }, jwtSecretKey, {
      expiresIn: "7d",
    });
    user.token = token;

    if (token) {
      console.log("successful");
      res.render("welcomepage", {name:user.name, _id:user._id, token:token})
      // res.render("welcomepage1",{name:user.name,_id:user._id, token:token, message:"successfully logged in"})
      return res.status(200).json({
        message: "welcome",
        token: token,
      });
     
    }
  } catch (error) {
    console.log(error);
  }
};

const getCart = async (req, res) => {
  try {
    res.render("cart", {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      country: req.body.country,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  signup,
  postsignup,
  welcome,
  welcomepage1,
  login,
  postlogin,
  getCart,
};
