"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importStar(require("fs"));
var path_1 = __importDefault(require("path"));
var supertest_1 = __importDefault(require("supertest"));
var helpers_1 = __importDefault(require("../utilities/helpers"));
var request = (0, supertest_1.default)("http://localhost:3000");
describe("TESTING GET /api/images", function () {
    describe("User selects image that doesn't exist", function () {
        it("should return status code 404", function () { return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request.get("/api/images?filename=treeeee&width=300&height=600")];
                    case 1:
                        response = _a.sent();
                        expect(response.statusCode).toBe(404);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should return error message to the user", function () { return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request.get("/api/images?filename=treeeee&width=300&height=600")];
                    case 1:
                        response = _a.sent();
                        expect(response.text).toBe("Couldn't find the image");
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe("If image is found", function () {
        it("should return status code 200", function () { return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request.get("/api/images?filename=tree&width=300&height=600")];
                    case 1:
                        response = _a.sent();
                        expect(response.statusCode).toBe(200);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should return the image to the user", function () { return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request.get("/api/images?filename=tree&width=300&height=600")];
                    case 1:
                        response = _a.sent();
                        expect(response.type).toBe("image/jpeg");
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
describe("Test for image processing", function () {
    it("Should create a new image with name of test_300_300.jpg in the root directory", function () { return __awaiter(void 0, void 0, void 0, function () {
        var originalImgPath, processedImgPath, img, rootDirListArr;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    //First delete any instance of test_300_300.jpg before every test
                    fs_1.default.exists(path_1.default.join(__dirname, "..", "..", "test_300_300.jpg"), function (exists) {
                        if (exists)
                            fs_1.default.unlinkSync(path_1.default.join(__dirname, "..", "..", "test_300_300.jpg"));
                    });
                    originalImgPath = path_1.default.join(__dirname, "..", "..", "imgs", "tree") + ".jpg";
                    processedImgPath = path_1.default.join(__dirname, "..", "..", "test_300_300") + ".jpg";
                    return [4 /*yield*/, (0, helpers_1.default)(originalImgPath, 300, 300)];
                case 1:
                    img = _a.sent();
                    (0, fs_1.writeFileSync)(processedImgPath, img);
                    rootDirListArr = fs_1.default.readdirSync(path_1.default.join(__dirname, "..", ".."));
                    expect(rootDirListArr).toContain("test_300_300.jpg");
                    return [2 /*return*/];
            }
        });
    }); });
});
