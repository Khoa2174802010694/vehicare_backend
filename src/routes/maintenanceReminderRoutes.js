const express = require("express");
const router = express.Router();
const controller = require("../controllers/maintenanceReminderController");

router.get("/vehicle/:vehicleId", controller.getReminders);
router.post("/", controller.createReminder);

module.exports = router;