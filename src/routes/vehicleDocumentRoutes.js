const express = require("express");
const router = express.Router();
const controller = require("../controllers/vehicleDocumentController");

router.get("/vehicle/:vehicleId", controller.getByVehicle);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;