
const mongoose = require("mongoose");
const config = require('./index');

const dbConnection = async () => {
    try {
        await mongoose.connect(config.MONGO_URI, {
			dbName: config.DB_NAME,
			user: config.DB_USER,
			pass: config.DB_PASS,
		});
        console.log("Connection to the DB has been established.")
    } catch (error) {
        console.log("Could not connect to the database. ", error.message);
    }
}


module.exports = dbConnection;