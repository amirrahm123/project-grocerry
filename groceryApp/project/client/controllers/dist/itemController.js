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
var getAndRenderItems = function () { return __awaiter(_this, void 0, void 0, function () {
    var items;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, handleGetItems()];
            case 1:
                items = _a.sent();
                items.map(function (item) {
                    return renderItem(item._id, item.name, item.src, item.type, item.price);
                });
                return [2 /*return*/];
        }
    });
}); };
function handleAddItem() {
    return __awaiter(this, void 0, void 0, function () {
        var nameInput, srcInput, typeSelect, priceInput, newItem, res, resJson, error_2, errorMessage;
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
                    error_2 = _a.sent();
                    console.error("Error adding Item:", error_2);
                    return [4 /*yield*/, error_2.json()];
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
        var itemContainer, renderDiv, cartImg;
        return __generator(this, function (_a) {
            //Render Item
            console.log({ itemId: itemId, name: name, src: src, type: type, price: price });
            itemContainer = document.getElementById("item__Container");
            renderDiv = document.createElement("div");
            renderDiv.id = itemId;
            cartImg = "./shopping-cart-empty-side-view.png";
            renderDiv.innerHTML = "<img class=\"cart__Icon \"src=\"" + cartImg + "\" alt=\"Item Image\"> ;\n  <h1>" + name + "</h1> \n        <h1>Type: " + type + "</h1> \n        <h1>Price: " + price + "</h1> \n        <img class=\"item__Image \"src=\"" + src + "\" alt=\"Item Image\"  style=\"max-width: 100px; max-height: 100px;\"> \n      ";
            renderDiv.classList.add("renderDiv");
            itemContainer.appendChild(renderDiv);
            return [2 /*return*/];
        });
    });
}
