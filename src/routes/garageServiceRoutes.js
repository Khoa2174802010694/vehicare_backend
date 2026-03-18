const express = require("express");
const router = express.Router();
const controller = require("../controllers/garageServiceController");

router.get("/garage/:garageId", controller.getServices);
router.post("/", controller.createService);

module.exports = router;