const express = require("express");
const cityController = require("../../controllers/city-controller");

const router = express.Router();

router.post("/city", cityController.create);
router.get("/:id", cityController.destroy);
router.get("/city/:id", cityController.update);
router.get("/city", cityController.create);

module.exports = router;
