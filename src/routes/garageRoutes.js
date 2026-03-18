const express = require("express");
const router = express.Router();
const controller = require("../controllers/garageController");

router.get("/", controller.getGarages);
router.get("/:id", controller.getGarage);
router.post("/", controller.createGarage);

module.exports = router;