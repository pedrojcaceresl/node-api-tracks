const { StorageModel } = require("../models");
const { PUBLIC_URL } = require('../config');
const { handleSuccessResponse } = require("../helpers/handleResponse");
const { HTTP_STATUSES, HTTP_MESSAGES } = require("../constants");
const handleHttpError = require("../utils/handleHttpError");


/**
 * Create one item
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
    try {
        const { file } = req;

        const fileData = {
            filename: file.filename,
			url: `${PUBLIC_URL}/${file.filename}`,
		};
        const data = await StorageModel.create(fileData);

        handleSuccessResponse({
            res,
            status: HTTP_STATUSES.CREATED,
            data,
            message: HTTP_MESSAGES[201]
        })

    } catch (error) {
        console.log(error.message)
    }

}


/**
 * Get a list of items
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
	try {
		const tracks = await StorageModel.find();
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

		const data = await StorageModel.findById(id);

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
 * Update one item
 * @param {*} req
 * @param {*} res
 */
const updateItem = async (req, res) => {
	try {
		const cleanBody = matchedData(req);
		const { id } = cleanBody;

		const track = await StorageModel.findByIdAndUpdate(id, cleanBody, {
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

		const data = await StorageModel.deleteById(id);

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
    createItem,
    getItems,
    getItem,
    updateItem,
    deleteItem
}