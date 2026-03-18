const express = require("express");
const router = express.Router();
const controller = require("../controllers/rescueProviderController");

router.get("/", controller.getProviders);
router.post("/", controller.createProvider);

module.exports = router;