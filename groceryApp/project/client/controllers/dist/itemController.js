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
var _this = this;
var handleGetItems = function () { return __awaiter(_this, void 0, void 0, function () {
    var res, resJson, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch("http://localhost:5500/item/get-item", {
                        method: "GET"
                    })];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2:
                resJson = _a.sent();
                return [2 /*return*/, resJson];
            case 3:
                error_1 = _a.sent();
                console.error("Error fetching users:", error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
document.addEventListener("DOMContentLoaded", function () {
    var searchButton = document.getElementById("searchButton");
    var searchInput = document.getElementById("searchInput");
    var filterType = document.getElementById("filterType");
    searchButton.addEventListener("click", function () {
        var searchTerm = searchInput === null || searchInput === void 0 ? void 0 : searchInput.value;
        var selectedType = filterType === null || filterType === void 0 ? void 0 : filterType.value;
        var itemContainer = document.getElementById("item__Container");
        itemContainer.innerHTML = "";
        getAndRenderItems(searchTerm, selectedType);
    });
    getAndRenderItems("", "all");
});
function getAndRenderItems(searchTerm, selectedType) {
    return __awaiter(this, void 0, void 0, function () {
        var items, filteredItems, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, handleGetItems()];
                case 1:
                    items = _a.sent();
                    filteredItems = items.filter(function (item) {
                        var nameMatch;
                        var typeMatch;
                        if (searchTerm) {
                            nameMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
                        }
                        else
                            nameMatch = true;
                        if (selectedType) {
                            typeMatch = selectedType === "all" || item.type === selectedType;
                        }
                        else
                            typeMatch = true;
                        return nameMatch && typeMatch;
                    });
                    filteredItems.forEach(function (item) {
                        return renderItem(item._id, item.name, item.src, item.type, item.price);
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error("Error fetching and rendering items:", error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleAddItem() {
    return __awaiter(this, void 0, void 0, function () {
        var nameInput, srcInput, typeSelect, priceInput, newItem, res, resJson, error_3, errorMessage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nameInput = document.querySelector("#name__Input");
                    srcInput = document.getElementById("src__Input");
                    typeSelect = document.getElementById("type__Input");
                    priceInput = document.getElementById("price__Input");
                    newItem = {
                        name: nameInput.value,
                        src: srcInput.value,
                        type: typeSelect.value,
                        price: parseFloat(priceInput.value)
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 8]);
                    return [4 /*yield*/, fetch("http://localhost:5500/item/add-item", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(newItem)
                        })];
                case 2:
                    res = _a.sent();
                    if (!res.ok) return [3 /*break*/, 4];
                    console.log("Item added successfully!");
                    return [4 /*yield*/, res.json()];
                case 3:
                    resJson = _a.sent();
                    console.log(resJson);
                    renderItem(resJson._id, newItem.name, newItem.src, newItem.type, newItem.price);
                    return [3 /*break*/, 5];
                case 4:
                    console.log("Failed to add Item.");
                    _a.label = 5;
                case 5: return [3 /*break*/, 8];
                case 6:
                    error_3 = _a.sent();
                    console.error("Error adding Item:", error_3);
                    return [4 /*yield*/, error_3.json()];
                case 7:
                    errorMessage = _a.sent();
                    console.log(errorMessage);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
function renderItem(itemId, name, src, type, price) {
    return __awaiter(this, void 0, void 0, function () {
        var itemContainer, renderDiv, cartImg, isAdmin;
        return __generator(this, function (_a) {
            //Render Item
            console.log({ itemId: itemId, name: name, src: src, type: type, price: price });
            itemContainer = document.getElementById("item__Container");
            renderDiv = document.createElement("div");
            renderDiv.id = itemId;
            cartImg = "./shopping-cart-empty-side-view.png";
            isAdmin = localStorage.getItem("isAdmin") === "true";
            renderDiv.innerHTML = "  \n  <img onclick=\"addToCart('" + itemId + "')\" class=\"cart__Icon \"src=\"" + cartImg + "\" alt=\"Item Image\">\n  <img class=\"item__Image \"src=\"" + src + "\" alt=\"Item Image\"  style=\"max-width: 100px; max-height: 100px;\">\n  \n  \n  <h1>" + name + "</h1> \n        <h1>Type: " + type + "</h1> \n        <h1>Price: " + price + "$</h1> \n  \n        " + (isAdmin
                ? "<button onclick=\"handleDeleteItem('" + itemId + "')\">Delete</button>\n              <button onclick=\"showUpdateModal('" + itemId + "')\">Update</button>\n            "
                : "") + "\n  \n        ";
            renderDiv.classList.add("renderDiv");
            itemContainer.appendChild(renderDiv);
            return [2 /*return*/];
        });
    });
}
var handleDeleteItem = function (itemId) { return __awaiter(_this, void 0, void 0, function () {
    var res, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, fetch("http://localhost:5500/item/delete-item/" + itemId, {
                        method: "DELETE"
                    })];
            case 1:
                res = _a.sent();
                if (res.ok) {
                    console.log("Item deleted successfully!");
                    location.reload();
                }
                else {
                    console.log("Failed to delete item.");
                }
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                console.error("Error deleting item:", error_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
function addToCart(itemId) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, res, error_5, errorMessage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userId = localStorage.getItem("id");
                    if (!userId)
                        return [2 /*return*/, alert("please login first.")];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, fetch("http://localhost:5500/item/addToCart", {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ itemId: itemId, userId: userId })
                        })];
                case 2:
                    res = _a.sent();
                    if (res.ok) {
                        alert("Item added successfully to the cart!");
                    }
                    return [3 /*break*/, 5];
                case 3:
                    error_5 = _a.sent();
                    return [4 /*yield*/, error_5.json()];
                case 4:
                    errorMessage = _a.sent();
                    console.log(errorMessage);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
var renderCart = function () { return __awaiter(_this, void 0, void 0, function () {
    var res, users, user_1, itemsRes, items, filteredItems, itemContainer_1, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                return [4 /*yield*/, fetch("http://localhost:5500/user/get-user", {
                        method: "GET"
                    })];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2:
                users = _a.sent();
                user_1 = users.filter(function (u) { return u._id == localStorage.getItem("id"); })[0];
                console.log("user: ", user_1);
                return [4 /*yield*/, fetch("http://localhost:5500/item/get-item", {
                        method: "GET"
                    })];
            case 3:
                itemsRes = _a.sent();
                return [4 /*yield*/, itemsRes.json()];
            case 4:
                items = _a.sent();
                filteredItems = items.filter(function (item) { var _a; return (_a = user_1.cart) === null || _a === void 0 ? void 0 : _a.includes(item._id); });
                console.log("filteredItems", filteredItems);
                itemContainer_1 = document.querySelector(".cart");
                //render to screen
                filteredItems === null || filteredItems === void 0 ? void 0 : filteredItems.map(function (item) {
                    var renderDiv = document.createElement("div");
                    renderDiv.id = item._id;
                    renderDiv.innerHTML = "\n            <h1>" + item.name + "</h1> \n            <h1>Type: " + item.type + "</h1> \n            <h1>Price: " + item.price + "</h1> \n            <img class=\"item__Image \"src=\"" + item.src + "\" alt=\"Item Image\"  style=\"max-width: 100px; max-height: 100px;\"> \n          ";
                    renderDiv.classList.add("renderDiv");
                    itemContainer_1.appendChild(renderDiv);
                });
                return [3 /*break*/, 6];
            case 5:
                error_6 = _a.sent();
                console.error(error_6);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
var handleUpdateItem = function (itemId) { return __awaiter(_this, void 0, void 0, function () {
    var name, src, type, price, items, res, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                name = document.querySelector("#updateName__Input");
                src = document.querySelector("#updateSrc__Input");
                type = document.querySelector("#updateType__Input");
                price = document.querySelector("#updatePrice__Input");
                items = {
                    name: name.value,
                    src: src.value,
                    type: type.value,
                    price: parseFloat(price.value)
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, fetch("http://localhost:5500/item/update-item/" + itemId, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(items)
                    })];
            case 2:
                res = _a.sent();
                if (res.ok) {
                    console.log("Item updated successfully!");
                    location.reload();
                }
                else {
                    console.log("Failed to update item.");
                }
                return [3 /*break*/, 4];
            case 3:
                error_7 = _a.sent();
                console.error("Error updating item:", error_7);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
function showUpdateModal(itemId) {
    var modalWrapper = document.querySelector(".updateModal__Wrapper");
    modalWrapper.style.display = "flex";
    var submitUpdateBtn = document.querySelector("#submitUpdateBtn");
    submitUpdateBtn.onclick = function () {
        handleUpdateItem(itemId);
        modalWrapper.style.display = "none";
    };
}
function handleRemoveFromCart(itemId) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, res, error_8, errorMessage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userId = localStorage.getItem("id");
                    if (!userId)
                        return [2 /*return*/, alert("Please login first.")];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, fetch("http://localhost:5500/item/removeFromCart", {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ itemId: itemId, userId: userId })
                        })];
                case 2:
                    res = _a.sent();
                    if (res.ok) {
                        alert("Item removed successfully from the cart!");
                        location.reload();
                    }
                    else {
                        console.log("Failed to remove item from cart.");
                    }
                    return [3 /*break*/, 5];
                case 3:
                    error_8 = _a.sent();
                    return [4 /*yield*/, error_8.json()];
                case 4:
                    errorMessage = _a.sent();
                    console.log(errorMessage);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
