// app/blogs/page.js
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
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogList from '../components/BlogList'; // Import the new client component
// --- Data Fetching on the Server ---
function getCategories() {
    return __awaiter(this, void 0, void 0, function () {
        var response, categories, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('http://localhost:3000/api/categories', { next: { revalidate: 60 } })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to fetch categories.');
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    categories = _a.sent();
                    return [2 /*return*/, categories];
                case 3:
                    err_1 = _a.sent();
                    console.error(err_1);
                    return [2 /*return*/, []];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getPosts() {
    return __awaiter(this, void 0, void 0, function () {
        var response, posts, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('http://localhost:3000/api/blogs', { next: { revalidate: 60 } })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to fetch posts.');
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    posts = _a.sent();
                    // Ensure no duplicates before returning
                    return [2 /*return*/, Array.from(new Map(posts.map(function (post) { return [post.id, post]; })).values())];
                case 3:
                    err_2 = _a.sent();
                    console.error(err_2);
                    return [2 /*return*/, []]; // Return an empty array on error so the page doesn't crash
                case 4: return [2 /*return*/];
            }
        });
    });
}
// --- The Main Page (Server Component) ---
export default function BlogsPage() {
    return __awaiter(this, void 0, void 0, function () {
        var posts, categories;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getPosts()];
                case 1:
                    posts = _a.sent();
                    return [4 /*yield*/, getCategories()];
                case 2:
                    categories = _a.sent();
                    return [2 /*return*/, (<>
      <Header />
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.5em', marginBottom: '40px' }}>
          Explore Tips On Workspace Efficiency And Visitor Management
        </h1>
        
        {/* Render the interactive component, passing the static data as a prop */}
        <BlogList posts={posts} categories={categories}/>
        
      </main>
      <Footer />
    </>)];
            }
        });
    });
}
