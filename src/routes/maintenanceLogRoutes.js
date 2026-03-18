const express = require("express");
const router = express.Router();
const controller = require("../controllers/maintenanceLogController");

router.get("/vehicle/:vehicleId", controller.getLogsByVehicle);
router.post("/", controller.createLog);

module.exports = router;