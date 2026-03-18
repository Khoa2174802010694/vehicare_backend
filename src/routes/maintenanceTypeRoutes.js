const express = require("express");
const router = express.Router();
const controller = require("../controllers/maintenanceTypeController");

router.get("/", controller.getAllTypes);
router.post("/", controller.createType);

module.exports = router;