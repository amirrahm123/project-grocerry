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
document.addEventListener("DOMContentLoaded", function () {
    navInit();
    userMsg();
    adminNavbar();
    var modalWrapper = document.querySelector("#login__Modal");
    modalWrapper.addEventListener("click", function (event) {
        if (event.target === modalWrapper) {
            closeModal();
        }
    });
    var registerModal = document.querySelector("#register__Modal");
    registerModal.addEventListener("click", function (event) {
        if (event.target === registerModal) {
            closeModal();
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    handleGetUsers();
});
function handleLoginAndCloseModal(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, handleLogin(ev)];
                case 1:
                    _a.sent(); // Pass the event parameter
                    return [4 /*yield*/, closeModal()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function showModal() {
    return __awaiter(this, void 0, void 0, function () {
        var modalWrapper;
        return __generator(this, function (_a) {
            modalWrapper = document.getElementById("login__Modal");
            modalWrapper.style.display = "flex";
            return [2 /*return*/];
        });
    });
}
function closeModal() {
    return __awaiter(this, void 0, void 0, function () {
        var loginModalWrapper, registerModalWrapper;
        return __generator(this, function (_a) {
            loginModalWrapper = document.querySelector("#login__Modal");
            registerModalWrapper = document.querySelector("#register__Modal");
            registerModalWrapper.style.display = "none";
            loginModalWrapper.style.display = "none";
            return [2 /*return*/];
        });
    });
}
function showRegisterModal() {
    return __awaiter(this, void 0, void 0, function () {
        var modalWrapper;
        return __generator(this, function (_a) {
            modalWrapper = document.querySelector("#register__Modal");
            console.log("registerModal");
            modalWrapper.style.display = "flex";
            return [2 /*return*/];
        });
    });
}
function navInit() {
    return __awaiter(this, void 0, void 0, function () {
        var id, isAdmin, navAdmin, navLogin, navRegister, navLogout;
        return __generator(this, function (_a) {
            id = localStorage.getItem("id");
            isAdmin = localStorage.getItem("isAdmin");
            if (!isAdmin) {
                navAdmin = document.querySelector("#navAdmin");
                navAdmin.style.display = "none";
            }
            if (id) {
                navLogin = document.querySelector("#navLogin");
                navRegister = document.querySelector("#navRegister");
                navLogin.style.display = "none";
                navRegister.style.display = "none";
            }
            else {
                navLogout = document.querySelector("#navLogout");
                navLogout.style.display = "none";
            }
            return [2 /*return*/];
        });
    });
}
function userMsg() {
    var id = localStorage.getItem("id");
    if (id) {
        var name = localStorage.getItem("displayName");
        var renderDiv = document.createElement("div");
        renderDiv.classList.add("userMsg");
        renderDiv.innerHTML = "<h1>Welcome back, " + name + "</h1>";
        var containerElement = document.querySelector(".userMsg__Conatiner");
        containerElement.appendChild(renderDiv);
    }
}
