
const express = require("express");
const app = express();
const cors = require("cors");
const dbConnection = require("./src/config/db.config");
const corsOptions = require('./src/config/cors');



app.use(express.json())
.use(cors(corsOptions))
.use("/v1/api", require("./src/routes"))
.use(express.static(__dirname + "/src/storage/"));

dbConnection();

module.exports = app;