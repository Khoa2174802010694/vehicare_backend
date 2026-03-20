const express = require("express");
const router = express.Router();
const trafficLawController = require("../controllers/trafficLawController");

router.get("/", trafficLawController.getAllTrafficLaws);
router.post("/", trafficLawController.createTrafficLaw);

module.exports = router;