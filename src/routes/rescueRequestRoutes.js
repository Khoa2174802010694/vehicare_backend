const express = require("express");
const router = express.Router();
const controller = require("../controllers/rescueRequestController");

router.get("/", controller.getRequests);
router.post("/", controller.createRequest);

module.exports = router;