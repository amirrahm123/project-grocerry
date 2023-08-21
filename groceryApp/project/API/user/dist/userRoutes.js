"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userControls_1 = require("./userControls");
var router = express_1["default"].Router();
router.get("/get-user", userControls_1.getUser);
router.post("/add-user", userControls_1.addUser);
router.post("/login-user", userControls_1.login);
exports["default"] = router;
