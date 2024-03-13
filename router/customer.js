const express = require("express");
const {createCustomer,fetchCustomer,updateCustomer} = require("../controller/customer");
const router = express.Router();
router.post("/create",createCustomer);
router.get("/fetch",fetchCustomer);
router.post("/update/:id",updateCustomer);
module.exports = router;