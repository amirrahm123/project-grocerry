"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var itemControls_1 = require("./itemControls");
router.get("/get-item", itemControls_1.getItem);
router.post("/add-item", itemControls_1.addItem);
exports["default"] = router;
