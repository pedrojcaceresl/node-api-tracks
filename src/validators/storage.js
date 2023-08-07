const { check } = require("express-validator");
const validateResults = require("./handleValidationResult");


const validatorsGetItem = [
	check("id")
		.exists()
		.notEmpty()
		.isMongoId(),
	validateResults,
];



module.exports = {
	validatorsGetItem,
};