require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose")
const path = require("path")
const connectDB = require("./utils/connectDB")

const errorHandler = require("./middlewares/errorHandler");
const notFound = require("./middlewares/notFound");
const cookies = require("cookie-parser");
const xssSanitize = require("./middlewares/xss");
const { limiter } = require("./middlewares/limiter");
const cors = require("cors");

app.use(cors({
    origin: true,
    credentials: true //Allows cookies to be sent and received
}));

app.use(limiter);
app.use(express.json()); //for json data
app.use(express.urlencoded({ extended: true })); // for files
app.use(require("morgan")("dev"));
app.use(cookies());
app.use(xssSanitize);
app.use(express.static("public"));

app.use("/uploads", express.static(path.join(__dirname, "../uploads")))

app.get("/api/health", (req, res) => res.status(200).json("API is Healthy"));

app.use(errorHandler);
app.use(notFound);


 connectDB();



