const { Router } = require("express");
const uploadMiddlware = require("../utils/handleStorage.util");
const {
	createItem,
	getItem,
	updateItem,
	deleteItem,
    getItems,
} = require("../controllers/storage.controller");
const { validatorsGetItem } = require("../validators/storage");
const router = Router();

/**
 * Get items list
 */
router.get("/", getItems);
/**
 * Get item
 */
router.get("/:id", validatorsGetItem, getItem);
/**
 * Update item
 */
router.put("/:id", validatorsGetItem, updateItem);
/**
 * Delete item
 */
router.delete("/:id", validatorsGetItem, deleteItem);
/**
 * Create Item
 */router.post("/", uploadMiddlware.single("myFile"), createItem);

module.exports = router;
