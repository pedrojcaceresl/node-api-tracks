const { TracksModel } = require("../models");
const { handleSuccessResponse } = require("../helpers/handleResponse");
const { HTTP_STATUSES, HTTP_MESSAGES } = require("../constants");
const handleHttpError = require("../utils/handleHttpError");
const { matchedData } = require("express-validator");

/**
 * Get a list of items
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
	try {
		const tracks = await TracksModel.find();
		handleSuccessResponse({
			res,
			status: HTTP_STATUSES.OK,
			data: tracks,
		});
	} catch (error) {
		handleHttpError(res, "Error on getting items");
	}
};

/**
 * Get one item
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {
	try {
		req = matchedData(req);
		const { id } = req;

		const data = await TracksModel.findById(id);

		if (!data) {
			handleHttpError(res, "Item does not exist");
			return;
		}

		handleSuccessResponse({
			res,
			status: HTTP_STATUSES.OK,
			data,
			message: HTTP_MESSAGES[200],
		});
	} catch (error) {
		handleHttpError(res, "Error on getting item");
	}
};

/**
 * Create an item
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
	try {
		const cleanBody = matchedData(req);

		const track = await TracksModel.create(cleanBody);
		handleSuccessResponse({
			res,
			status: HTTP_STATUSES.OK,
			data: track,
		});
	} catch (error) {
		handleHttpError(res, "Error on creating item");
	}
};

/**
 * Update one item
 * @param {*} req
 * @param {*} res
 */
const updateItem = async (req, res) => {
	try {
		const cleanBody = matchedData(req);
		const { id } = cleanBody;

		const track = await TracksModel.findByIdAndUpdate(id, cleanBody, {
			new: true,
		});
		handleSuccessResponse({
			res,
			status: HTTP_STATUSES.OK,
			data: track,
		});
	} catch (error) {
		handleHttpError(res, "Error on updating item");
	}
};

/**
 * Get one item
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
	try {
		req = matchedData(req);
		const { id } = req;

		const data = await TracksModel.deleteById(id);

		handleSuccessResponse({
			res,
			status: HTTP_STATUSES.OK,
			data,
			message: HTTP_MESSAGES[200],
		});
	} catch (error) {
		handleHttpError(res, "Error on deleting item");
	}
};

module.exports = {
	getItems,
	getItem,
	createItem,
	updateItem,
	deleteItem,
};
