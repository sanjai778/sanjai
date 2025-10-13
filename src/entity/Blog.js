"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = void 0;
var typeorm_1 = require("typeorm");
var Category_1 = require("./Category");
var Blog = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _categories_decorators;
    var _categories_initializers = [];
    var _categories_extraInitializers = [];
    var _date_decorators;
    var _date_initializers = [];
    var _date_extraInitializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _lastModified_decorators;
    var _lastModified_initializers = [];
    var _lastModified_extraInitializers = [];
    var _postType_decorators;
    var _postType_initializers = [];
    var _postType_extraInitializers = [];
    var _slug_decorators;
    var _slug_initializers = [];
    var _slug_extraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _title_extraInitializers = [];
    var _content_decorators;
    var _content_initializers = [];
    var _content_extraInitializers = [];
    var _featuredImage_decorators;
    var _featuredImage_initializers = [];
    var _featuredImage_extraInitializers = [];
    var Blog = _classThis = /** @class */ (function () {
        function Blog_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.categories = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _categories_initializers, void 0));
            this.date = (__runInitializers(this, _categories_extraInitializers), __runInitializers(this, _date_initializers, void 0));
            this.status = (__runInitializers(this, _date_extraInitializers), __runInitializers(this, _status_initializers, void 0));
            this.createdAt = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
            this.lastModified = (__runInitializers(this, _createdAt_extraInitializers), __runInitializers(this, _lastModified_initializers, void 0));
            this.postType = (__runInitializers(this, _lastModified_extraInitializers), __runInitializers(this, _postType_initializers, void 0));
            this.slug = (__runInitializers(this, _postType_extraInitializers), __runInitializers(this, _slug_initializers, void 0));
            this.title = (__runInitializers(this, _slug_extraInitializers), __runInitializers(this, _title_initializers, void 0));
            this.content = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _content_initializers, void 0));
            this.featuredImage = (__runInitializers(this, _content_extraInitializers), __runInitializers(this, _featuredImage_initializers, void 0));
            __runInitializers(this, _featuredImage_extraInitializers);
        }
        return Blog_1;
    }());
    __setFunctionName(_classThis, "Blog");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _categories_decorators = [(0, typeorm_1.ManyToMany)(function () { return Category_1.Category; }, function (category) { return category.blogs; }), (0, typeorm_1.JoinTable)()];
        _date_decorators = [(0, typeorm_1.Column)()];
        _status_decorators = [(0, typeorm_1.Column)()];
        _createdAt_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _lastModified_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _postType_decorators = [(0, typeorm_1.Column)()];
        _slug_decorators = [(0, typeorm_1.Column)()];
        _title_decorators = [(0, typeorm_1.Column)()];
        _content_decorators = [(0, typeorm_1.Column)("text")];
        _featuredImage_decorators = [(0, typeorm_1.Column)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _categories_decorators, { kind: "field", name: "categories", static: false, private: false, access: { has: function (obj) { return "categories" in obj; }, get: function (obj) { return obj.categories; }, set: function (obj, value) { obj.categories = value; } }, metadata: _metadata }, _categories_initializers, _categories_extraInitializers);
        __esDecorate(null, null, _date_decorators, { kind: "field", name: "date", static: false, private: false, access: { has: function (obj) { return "date" in obj; }, get: function (obj) { return obj.date; }, set: function (obj, value) { obj.date = value; } }, metadata: _metadata }, _date_initializers, _date_extraInitializers);
        __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, null, _lastModified_decorators, { kind: "field", name: "lastModified", static: false, private: false, access: { has: function (obj) { return "lastModified" in obj; }, get: function (obj) { return obj.lastModified; }, set: function (obj, value) { obj.lastModified = value; } }, metadata: _metadata }, _lastModified_initializers, _lastModified_extraInitializers);
        __esDecorate(null, null, _postType_decorators, { kind: "field", name: "postType", static: false, private: false, access: { has: function (obj) { return "postType" in obj; }, get: function (obj) { return obj.postType; }, set: function (obj, value) { obj.postType = value; } }, metadata: _metadata }, _postType_initializers, _postType_extraInitializers);
        __esDecorate(null, null, _slug_decorators, { kind: "field", name: "slug", static: false, private: false, access: { has: function (obj) { return "slug" in obj; }, get: function (obj) { return obj.slug; }, set: function (obj, value) { obj.slug = value; } }, metadata: _metadata }, _slug_initializers, _slug_extraInitializers);
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, null, _content_decorators, { kind: "field", name: "content", static: false, private: false, access: { has: function (obj) { return "content" in obj; }, get: function (obj) { return obj.content; }, set: function (obj, value) { obj.content = value; } }, metadata: _metadata }, _content_initializers, _content_extraInitializers);
        __esDecorate(null, null, _featuredImage_decorators, { kind: "field", name: "featuredImage", static: false, private: false, access: { has: function (obj) { return "featuredImage" in obj; }, get: function (obj) { return obj.featuredImage; }, set: function (obj, value) { obj.featuredImage = value; } }, metadata: _metadata }, _featuredImage_initializers, _featuredImage_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Blog = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Blog = _classThis;
}();
exports.Blog = Blog;
