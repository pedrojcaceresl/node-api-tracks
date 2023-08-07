const { Router } = require("express");
const { getItems, getItem, updateItem, deleteItem, createItem } = require("../controllers/tracks.controller");
const { validatorsCreateItem, validatorsGetItem } = require("../validators/tracks");
const router = Router();


router.get("/", getItems);
router.get("/:id", validatorsGetItem, getItem);
router.post("/", validatorsCreateItem, createItem);
router.put("/:id", [validatorsCreateItem, validatorsGetItem], updateItem);
router.delete("/:id", validatorsGetItem, deleteItem);




module.exports = router;