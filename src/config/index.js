

require("dotenv").config();

const config = {
	PORT: process.env.PORT || 3000,
	MONGO_URI: process.env.MONGO_URI,
	DB_NAME: process.env.DB_NAME,
	DB_USER: process.env.DB_USER,
	DB_PASS: process.env.DB_PASS,
	PUBLIC_URL: process.env.PUBLIC_URL,
};


module.exports = config;
