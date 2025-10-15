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
import { Blog } from "../entity/Blog";
import { getDBConnection } from "@/lib/db";
var BlogRepository = /** @class */ (function () {
    function BlogRepository() {
    }
    BlogRepository.prototype.getRepository = function () {
        return __awaiter(this, void 0, void 0, function () {
            var connection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getDBConnection()];
                    case 1:
                        connection = _a.sent();
                        return [2 /*return*/, connection.getRepository(Blog)];
                }
            });
        });
    };
    BlogRepository.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getRepository()];
                    case 1:
                        repository = _a.sent();
                        return [2 /*return*/, repository.find({
                                relations: ["categories"],
                                order: {
                                    date: "DESC",
                                },
                            })];
                    case 2:
                        error_1 = _a.sent();
                        console.error("Error getting all blogs:", error_1);
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BlogRepository.prototype.getById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getRepository()];
                    case 1:
                        repository = _a.sent();
                        return [2 /*return*/, repository.findOne({ where: { id: id }, relations: ["categories"] })];
                    case 2:
                        error_2 = _a.sent();
                        console.error("Error getting blog by id ".concat(id, ":"), error_2);
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BlogRepository.prototype.getBySlug = function (slug) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getRepository()];
                    case 1:
                        repository = _a.sent();
                        return [2 /*return*/, repository.findOne({ where: { slug: slug }, relations: ["categories"] })];
                    case 2:
                        error_3 = _a.sent();
                        console.error("Error getting blog by slug ".concat(slug, ":"), error_3);
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BlogRepository.prototype.create = function (blogData) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, newBlog, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getRepository()];
                    case 1:
                        repository = _a.sent();
                        newBlog = repository.create(blogData);
                        return [2 /*return*/, repository.save(newBlog)];
                    case 2:
                        error_4 = _a.sent();
                        console.error("Error creating blog:", error_4);
                        throw error_4;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BlogRepository.prototype.update = function (id, blogData) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getRepository()];
                    case 1:
                        repository = _a.sent();
                        return [4 /*yield*/, repository.update(id, blogData)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, this.getById(id)];
                    case 3:
                        error_5 = _a.sent();
                        console.error("Error updating blog with id ".concat(id, ":"), error_5);
                        throw error_5;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    BlogRepository.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getRepository()];
                    case 1:
                        repository = _a.sent();
                        return [2 /*return*/, repository.delete(id)];
                    case 2:
                        error_6 = _a.sent();
                        console.error("Error deleting blog with id ".concat(id, ":"), error_6);
                        throw error_6;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return BlogRepository;
}());
export { BlogRepository };
