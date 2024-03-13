const express = require("express");
const {createRider,fetchRider,updateRider,deleteRider} = require("../controller/rider");
const router = express.Router();
router.post("/create",createRider);
router.get("/fetch",fetchRider);
router.post("/update/:id",updateRider);
module.exports = router;