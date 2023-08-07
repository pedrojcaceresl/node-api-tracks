const { check } = require("express-validator");
const validateResults = require("./handleValidationResult");


const validatorsCreateItem = [
	check("name")
		.notEmpty()
		.withMessage("Name is required")
		.isString()
		.withMessage("Name must be a string"),
	check("album")
		.notEmpty()
		.withMessage("Album is required")
		.isString()
		.withMessage("Album must be a string"),
	check("cover")
		.notEmpty()
		.withMessage("Cover is required")
		.isURL()
		.withMessage("Cover must be a valid URL"),
	check("artist.name")
		.notEmpty()
		.withMessage("Artist name is required")
		.isString()
		.withMessage("Artist name must be a string"),
	check("artist.nickname")
		.notEmpty()
		.withMessage("Artist nickname is required")
		.isString()
		.withMessage("Artist nickname must be a string"),
	check("artist.nationality")
		.notEmpty()
		.withMessage("Artist nationality is required")
		.isString()
		.withMessage("Artist nationality must be a string"),
	check("duration.start")
		.notEmpty()
		.withMessage("Duration start is required")
		.isNumeric()
		.withMessage("Duration start must be a number"),
	check("duration.end")
		.notEmpty()
		.withMessage("Duration end is required")
		.isNumeric()
		.withMessage("Duration end must be a number"),
	check("mediaId").optional().isMongoId().withMessage("Invalid media ID"),
	validateResults,
];

const validatorsGetItem = [
	check("id")
		.exists()
		.notEmpty()
		.isMongoId(),
	validateResults,
];



module.exports = {
	validatorsCreateItem,
	validatorsGetItem,
};