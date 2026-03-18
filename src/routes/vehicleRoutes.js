const express = require("express");
const router = express.Router();
const vehicleController = require("../controllers/vehicleController");

router.get("/", vehicleController.getAllVehicles);
router.get("/:id", vehicleController.getVehicleById);
router.get("/user/:userId", vehicleController.getVehiclesByUser);
router.post("/", vehicleController.createVehicle);

module.exports = router;