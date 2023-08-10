"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var ItemSchema = new mongoose_1.Schema({
    name: String,
    src: String,
    type: String,
    price: Number
});
var ItemModel = mongoose_1["default"].model("Item", ItemSchema);
exports["default"] = ItemModel;
