// src/app/api/posts/route.js
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
import mysql from 'mysql2/promise';
import { NextResponse } from 'next/server';
export function GET() {
    return __awaiter(this, void 0, void 0, function () {
        var connection, query, posts, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, mysql.createConnection({
                            host: process.env.DB_HOST,
                            user: process.env.DB_USER,
                            password: process.env.DB_PASSWORD,
                            database: process.env.DB_NAME,
                        })];
                case 1:
                    connection = _a.sent();
                    query = "\n      SELECT \n        p.ID,\n        p.post_title,\n        p.post_content,\n        p.post_excerpt,\n        p.post_date,\n        p.post_name,\n        image_meta.meta_value AS featured_image_url\n      FROM \n        wpsw_posts AS p\n      LEFT JOIN \n        wpsw_postmeta AS thumb_meta ON p.ID = thumb_meta.post_id AND thumb_meta.meta_key = '_thumbnail_id'\n      LEFT JOIN \n        wpsw_postmeta AS image_meta ON thumb_meta.meta_value = image_meta.post_id AND image_meta.meta_key = '_wp_attached_file'\n      WHERE \n        p.post_type = 'post' \n        AND p.post_status = 'publish'\n      ORDER BY \n        p.post_date DESC;\n    ";
                    return [4 /*yield*/, connection.query(query)];
                case 2:
                    posts = (_a.sent())[0];
                    return [4 /*yield*/, connection.end()];
                case 3:
                    _a.sent();
                    return [2 /*return*/, NextResponse.json({ success: true, data: posts })];
                case 4:
                    error_1 = _a.sent();
                    console.error("DATABASE API ERROR:", error_1);
                    return [2 /*return*/, NextResponse.json({ success: false, error: "Internal Server Error. Check server logs for details." }, { status: 500 })];
                case 5: return [2 /*return*/];
            }
        });
    });
}
