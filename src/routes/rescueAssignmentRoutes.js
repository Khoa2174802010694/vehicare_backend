const express = require("express");
const router = express.Router();
const controller = require("../controllers/rescueAssignmentController");

router.get("/", controller.getAssignments);
router.post("/", controller.createAssignment);

module.exports = router;