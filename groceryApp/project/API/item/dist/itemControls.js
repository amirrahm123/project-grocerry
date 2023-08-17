"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.updateItemQuantity = exports.handleRemoveFromCart = exports.addToCart = exports.updateItem = exports.deleteItem = exports.addItem = exports.getItem = void 0;
var userModel_1 = require("../user/userModel");
var itemModel_1 = require("./itemModel");
exports.getItem = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, itemModel_1["default"].find()];
            case 1:
                data = _a.sent();
                console.log(res.json(data));
                return [2 /*return*/, res.json(data)];
            case 2:
                error_1 = _a.sent();
                return [2 /*return*/, error_1];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addItem = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, src, type, price, newItem, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name = _a.name, src = _a.src, type = _a.type, price = _a.price;
                newItem = new itemModel_1["default"]({
                    name: name,
                    src: src,
                    type: type,
                    price: price
                });
                return [4 /*yield*/, newItem.save()];
            case 1:
                _b.sent();
                res.json({ message: "Item added successfully" });
                return [3 /*break*/, 3];
            case 2:
                err_1 = _b.sent();
                return [2 /*return*/, res.json({ message: "error" })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteItem = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var itemId, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                itemId = req.params.itemId;
                return [4 /*yield*/, itemModel_1["default"].findByIdAndRemove(itemId)];
            case 1:
                _a.sent();
                res.send("Item Deleted Successfully").status(200);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                return [2 /*return*/, res.send("Internal Server Error").status(500)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateItem = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var itemId, _a, name, src, price, type, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                itemId = req.params.itemId;
                _a = req.body, name = _a.name, src = _a.src, price = _a.price, type = _a.type;
                return [4 /*yield*/, itemModel_1["default"].updateOne({ _id: itemId }, { name: name, src: src, price: price, type: type })];
            case 1:
                _b.sent();
                res.send("Item edited Successfully").status(200);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _b.sent();
                return [2 /*return*/, res.send("Internal Server Error").status(500)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addToCart = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, itemId, userId, selectedUser, cart, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, itemId = _a.itemId, userId = _a.userId;
                return [4 /*yield*/, userModel_1["default"].findById(userId)];
            case 1:
                selectedUser = _b.sent();
                if (!selectedUser)
                    return [2 /*return*/, res.send("permission denied").status(403)];
                cart = selectedUser.cart || [];
                //update the user cart
                return [4 /*yield*/, userModel_1["default"].updateOne({ _id: userId }, { cart: __spreadArrays(cart, [{ id: itemId, quantity: 1 }]) })];
            case 2:
                //update the user cart
                _b.sent();
                res.send("user updated successfuly").status(200);
                return [3 /*break*/, 4];
            case 3:
                err_2 = _b.sent();
                res.send("Internal server error").status(500);
                console.log(err_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.handleRemoveFromCart = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, itemId_1, userId, selectedUser, updatedcart, err_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, itemId_1 = _a.itemId, userId = _a.userId;
                return [4 /*yield*/, userModel_1["default"].findById(userId)];
            case 1:
                selectedUser = _b.sent();
                if (!selectedUser)
                    return [2 /*return*/, res.send("permission denied").status(403)];
                updatedcart = selectedUser.cart.filter(function (cartItem) { return cartItem.id !== itemId_1; });
                return [4 /*yield*/, userModel_1["default"].updateOne({ _id: userId }, { cart: updatedcart })];
            case 2:
                _b.sent();
                res.send("Item removed from cart successfully").status(200);
                return [3 /*break*/, 4];
            case 3:
                err_3 = _b.sent();
                res.send("Internal server error").status(500);
                console.log(err_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updateItemQuantity = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, itemId_2, userId, quantity_1, selectedUser, updatedcart, err_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, itemId_2 = _a.itemId, userId = _a.userId, quantity_1 = _a.quantity;
                return [4 /*yield*/, userModel_1["default"].findById(userId)];
            case 1:
                selectedUser = _b.sent();
                if (!selectedUser)
                    return [2 /*return*/, res.send("permission denied").status(403)];
                updatedcart = selectedUser.cart.map(function (cartItem) {
                    if (cartItem.id === itemId_2)
                        return __assign(__assign({}, cartItem), { quantity: quantity_1 });
                    return cartItem;
                });
                return [4 /*yield*/, userModel_1["default"].updateOne({ _id: userId }, { cart: updatedcart })];
            case 2:
                _b.sent();
                res.send("Item removed from cart successfully").status(200);
                return [3 /*break*/, 4];
            case 3:
                err_4 = _b.sent();
                res.send("Internal server error").status(500);
                console.log(err_4);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
