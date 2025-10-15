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
import { BlogService } from "@/service/BlogService";
import { NextResponse } from "next/server";
var BlogController = /** @class */ (function () {
    function BlogController() {
        this.blogService = new BlogService();
    }
    BlogController.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var blogs, blogsToSend, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.blogService.getAll()];
                    case 1:
                        blogs = _a.sent();
                        blogsToSend = blogs.map(function (blog) { return (__assign(__assign({}, blog), { categories: blog.categories.map(function (category) { return ({
                                id: category.id,
                                name: category.name,
                            }); }) })); });
                        return [2 /*return*/, NextResponse.json(blogsToSend)];
                    case 2:
                        error_1 = _a.sent();
                        console.error("Error fetching blogs:", error_1);
                        return [2 /*return*/, new NextResponse(JSON.stringify({ error: "Failed to fetch blogs" }), { status: 500 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BlogController.prototype.getById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var blog, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.blogService.getById(id)];
                    case 1:
                        blog = _a.sent();
                        if (!blog) {
                            return [2 /*return*/, new NextResponse(JSON.stringify({ error: "Blog not found" }), {
                                    status: 404,
                                })];
                        }
                        return [2 /*return*/, NextResponse.json(blog)];
                    case 2:
                        error_2 = _a.sent();
                        console.error("Error fetching blog with id ".concat(id, ":"), error_2);
                        return [2 /*return*/, new NextResponse(JSON.stringify({ error: "Failed to fetch blog" }), { status: 500 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BlogController.prototype.getBySlug = function (slug) {
        return __awaiter(this, void 0, void 0, function () {
            var blog, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.blogService.getBySlug(slug)];
                    case 1:
                        blog = _a.sent();
                        if (!blog) {
                            return [2 /*return*/, new NextResponse(JSON.stringify({ error: "Blog not found" }), {
                                    status: 404,
                                })];
                        }
                        return [2 /*return*/, NextResponse.json(blog)];
                    case 2:
                        error_3 = _a.sent();
                        console.error("Error fetching blog with slug ".concat(slug, ":"), error_3);
                        return [2 /*return*/, new NextResponse(JSON.stringify({ error: "Failed to fetch blog" }), { status: 500 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BlogController.prototype.create = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var body, newBlog, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, request.json()];
                    case 1:
                        body = _a.sent();
                        return [4 /*yield*/, this.blogService.create(body)];
                    case 2:
                        newBlog = _a.sent();
                        return [2 /*return*/, new NextResponse(JSON.stringify(newBlog), { status: 201 })];
                    case 3:
                        error_4 = _a.sent();
                        console.error("Error creating blog:", error_4);
                        return [2 /*return*/, new NextResponse(JSON.stringify({ error: "Failed to create blog" }), { status: 500 })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    BlogController.prototype.update = function (id, request) {
        return __awaiter(this, void 0, void 0, function () {
            var body, updatedBlog, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, request.json()];
                    case 1:
                        body = _a.sent();
                        return [4 /*yield*/, this.blogService.update(id, body)];
                    case 2:
                        updatedBlog = _a.sent();
                        return [2 /*return*/, NextResponse.json(updatedBlog)];
                    case 3:
                        error_5 = _a.sent();
                        console.error("Error updating blog with id ".concat(id, ":"), error_5);
                        return [2 /*return*/, new NextResponse(JSON.stringify({ error: "Failed to update blog" }), { status: 500 })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    BlogController.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.blogService.delete(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new NextResponse(null, { status: 204 })];
                    case 2:
                        error_6 = _a.sent();
                        console.error("Error deleting blog with id ".concat(id, ":"), error_6);
                        return [2 /*return*/, new NextResponse(JSON.stringify({ error: "Failed to delete blog" }), { status: 500 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return BlogController;
}());
export { BlogController };
