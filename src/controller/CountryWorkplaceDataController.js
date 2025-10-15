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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
import { CountryWorkplaceDataService } from "../service/CountryWorkplaceDataService";
import { NextResponse } from "next/server";
var CountryWorkplaceDataController = /** @class */ (function () {
    function CountryWorkplaceDataController() {
        this.countryWorkplaceDataService = new CountryWorkplaceDataService();
    }
    CountryWorkplaceDataController.prototype.getAllCountryWorkplaceData = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var countryWorkplaceData, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.countryWorkplaceDataService.getAllCountryWorkplaceData()];
                    case 1:
                        countryWorkplaceData = _a.sent();
                        return [2 /*return*/, NextResponse.json(countryWorkplaceData)];
                    case 2:
                        error_1 = _a.sent();
                        console.error("Error fetching country workplace data:", error_1);
                        return [2 /*return*/, NextResponse.json({ error: 'Failed to fetch country workplace data' }, { status: 500 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CountryWorkplaceDataController.prototype.getCountryWorkplaceDataById = function (req_1, _a) {
        return __awaiter(this, arguments, void 0, function (req, _b) {
            var id, countryWorkplaceData, error_2;
            var params = _b.params;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        id = parseInt(params.id, 10);
                        return [4 /*yield*/, this.countryWorkplaceDataService.getCountryWorkplaceDataById(id)];
                    case 1:
                        countryWorkplaceData = _c.sent();
                        if (countryWorkplaceData) {
                            return [2 /*return*/, NextResponse.json(countryWorkplaceData)];
                        }
                        else {
                            return [2 /*return*/, NextResponse.json({ error: 'Country workplace data not found' }, { status: 404 })];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _c.sent();
                        console.error("Error fetching country workplace data with id ".concat(params.id, ":"), error_2);
                        return [2 /*return*/, NextResponse.json({ error: 'Failed to fetch country workplace data' }, { status: 500 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CountryWorkplaceDataController.prototype.createCountryWorkplaceData = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var body, newCountryWorkplaceData, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, req.json()];
                    case 1:
                        body = _a.sent();
                        return [4 /*yield*/, this.countryWorkplaceDataService.createCountryWorkplaceData(body)];
                    case 2:
                        newCountryWorkplaceData = _a.sent();
                        return [2 /*return*/, NextResponse.json(newCountryWorkplaceData, { status: 201 })];
                    case 3:
                        error_3 = _a.sent();
                        console.error("Error creating country workplace data:", error_3);
                        return [2 /*return*/, NextResponse.json({ error: 'Failed to create country workplace data' }, { status: 500 })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CountryWorkplaceDataController.prototype.updateCountryWorkplaceData = function (req_1, _a) {
        return __awaiter(this, arguments, void 0, function (req, _b) {
            var id, body, updatedCountryWorkplaceData, error_4;
            var params = _b.params;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        id = parseInt(params.id, 10);
                        return [4 /*yield*/, req.json()];
                    case 1:
                        body = _c.sent();
                        return [4 /*yield*/, this.countryWorkplaceDataService.updateCountryWorkplaceData(id, body)];
                    case 2:
                        updatedCountryWorkplaceData = _c.sent();
                        if (updatedCountryWorkplaceData) {
                            return [2 /*return*/, NextResponse.json(updatedCountryWorkplaceData)];
                        }
                        else {
                            return [2 /*return*/, NextResponse.json({ error: 'Country workplace data not found' }, { status: 404 })];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_4 = _c.sent();
                        console.error("Error updating country workplace data with id ".concat(params.id, ":"), error_4);
                        return [2 /*return*/, NextResponse.json({ error: 'Failed to update country workplace data' }, { status: 500 })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CountryWorkplaceDataController.prototype.deleteCountryWorkplaceData = function (req_1, _a) {
        return __awaiter(this, arguments, void 0, function (req, _b) {
            var id, success, error_5;
            var params = _b.params;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        id = parseInt(params.id, 10);
                        return [4 /*yield*/, this.countryWorkplaceDataService.deleteCountryWorkplaceData(id)];
                    case 1:
                        success = _c.sent();
                        if (success) {
                            return [2 /*return*/, NextResponse.json({ message: 'Country workplace data deleted successfully' })];
                        }
                        else {
                            return [2 /*return*/, NextResponse.json({ error: 'Country workplace data not found' }, { status: 404 })];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _c.sent();
                        console.error("Error deleting country workplace data with id ".concat(params.id, ":"), error_5);
                        return [2 /*return*/, NextResponse.json({ error: 'Failed to delete country workplace data' }, { status: 500 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return CountryWorkplaceDataController;
}());
export { CountryWorkplaceDataController };
