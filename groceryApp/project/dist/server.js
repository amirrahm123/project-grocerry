"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var dotenv = require("dotenv");
var cookie_parser_1 = require("cookie-parser");
var cors_1 = require("cors");
var itemRoutes_1 = require("./API/item/itemRoutes");
var userRoutes_1 = require("./API/user/userRoutes");
dotenv.config();
var uri = process.env.CONNECTION_STRING + "groceryProject";
if (uri) {
    mongoose_1["default"]
        .connect(uri)
        .then(function () { return console.log("DB connected"); })["catch"](function (err) { return console.log("DB error :", err); });
}
else {
    console.log("No URI");
}
var app = express_1["default"]();
app.use(cors_1["default"]());
app.use(express_1["default"].json());
app.use(cookie_parser_1["default"]());
// app.use("/user", userRoutes);
app.use("/item", itemRoutes_1["default"]);
app.use("/user", userRoutes_1["default"]);
app.use(express_1["default"].static("./client"));
app.listen(5500, function () {
    console.log("server listen on port 5500");
});
