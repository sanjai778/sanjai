"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var Blog_1 = require("./src/entity/Blog");
var Category_1 = require("./src/entity/Category");
function transferData() {
    return __awaiter(this, void 0, void 0, function () {
        var sourceConnection, destinationConnection, posts, _i, posts_1, post, thumbnailIdMeta, featuredImageUrl, thumbnailId, guidMeta, categoryData, categories, _a, categoryData_1, cat, category, transferredPost;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, typeorm_1.createConnection)("onfraio")];
                case 1:
                    sourceConnection = _b.sent();
                    return [4 /*yield*/, (0, typeorm_1.createConnection)("default")];
                case 2:
                    destinationConnection = _b.sent();
                    return [4 /*yield*/, sourceConnection.query("SELECT * FROM wpsw_posts WHERE post_type = 'post' AND post_status = 'publish'")];
                case 3:
                    posts = _b.sent();
                    _i = 0, posts_1 = posts;
                    _b.label = 4;
                case 4:
                    if (!(_i < posts_1.length)) return [3 /*break*/, 17];
                    post = posts_1[_i];
                    return [4 /*yield*/, sourceConnection.query("SELECT meta_value FROM wpsw_postmeta WHERE post_id = ? AND meta_key = '_thumbnail_id'", [post.ID])];
                case 5:
                    thumbnailIdMeta = _b.sent();
                    featuredImageUrl = '';
                    if (!(thumbnailIdMeta.length > 0)) return [3 /*break*/, 7];
                    thumbnailId = thumbnailIdMeta[0].meta_value;
                    return [4 /*yield*/, sourceConnection.query("SELECT guid FROM wpsw_posts WHERE ID = ?", [thumbnailId])];
                case 6:
                    guidMeta = _b.sent();
                    if (guidMeta.length > 0) {
                        featuredImageUrl = guidMeta[0].guid;
                    }
                    _b.label = 7;
                case 7: return [4 /*yield*/, sourceConnection.query("\n      SELECT t.name FROM wpsw_terms t\n      INNER JOIN wpsw_term_taxonomy tt ON t.term_id = tt.term_id\n      INNER JOIN wpsw_term_relationships tr ON tt.term_taxonomy_id = tr.term_taxonomy_id\n      WHERE tt.taxonomy = 'category' AND tr.object_id = ?\n    ", [post.ID])];
                case 8:
                    categoryData = _b.sent();
                    categories = [];
                    _a = 0, categoryData_1 = categoryData;
                    _b.label = 9;
                case 9:
                    if (!(_a < categoryData_1.length)) return [3 /*break*/, 14];
                    cat = categoryData_1[_a];
                    return [4 /*yield*/, destinationConnection.getRepository(Category_1.Category).findOne({ where: { name: cat.name } })];
                case 10:
                    category = _b.sent();
                    if (!!category) return [3 /*break*/, 12];
                    category = new Category_1.Category();
                    category.name = cat.name;
                    return [4 /*yield*/, destinationConnection.getRepository(Category_1.Category).save(category)];
                case 11:
                    _b.sent();
                    _b.label = 12;
                case 12:
                    categories.push(category);
                    _b.label = 13;
                case 13:
                    _a++;
                    return [3 /*break*/, 9];
                case 14:
                    transferredPost = new Blog_1.Blog();
                    transferredPost.title = post.post_title;
                    transferredPost.content = post.post_content;
                    transferredPost.date = post.post_date;
                    transferredPost.status = post.post_status;
                    transferredPost.createdAt = post.post_date.toISOString().slice(0, 19).replace('T', ' ') === '0000-00-00 00:00:00' ? null : post.post_date;
                    transferredPost.lastModified = post.post_modified.toISOString().slice(0, 19).replace('T', ' ') === '0000-00-00 00:00:00' ? null : post.post_modified;
                    transferredPost.postType = post.post_type;
                    transferredPost.slug = post.post_name;
                    transferredPost.categories = categories;
                    transferredPost.featuredImage = featuredImageUrl;
                    return [4 /*yield*/, destinationConnection.getRepository(Blog_1.Blog).save(transferredPost)];
                case 15:
                    _b.sent();
                    _b.label = 16;
                case 16:
                    _i++;
                    return [3 /*break*/, 4];
                case 17:
                    console.log("Data transfer complete!");
                    return [4 /*yield*/, sourceConnection.close()];
                case 18:
                    _b.sent();
                    return [4 /*yield*/, destinationConnection.close()];
                case 19:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
transferData().catch(function (error) { return console.error(error); });
