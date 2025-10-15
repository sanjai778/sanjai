// src/app/blogs/[slug]/page.js
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
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
function getPost(slug) {
    return __awaiter(this, void 0, void 0, function () {
        var response, post, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/blogs/".concat(slug), { next: { revalidate: 60 } })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        return [2 /*return*/, null];
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    post = _a.sent();
                    return [2 /*return*/, post];
                case 3:
                    err_1 = _a.sent();
                    console.error(err_1);
                    return [2 /*return*/, null];
                case 4: return [2 /*return*/];
            }
        });
    });
}
export default function SinglePostPage(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var slug, post, imageUrl;
        var params = _b.params;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    slug = params.slug;
                    return [4 /*yield*/, getPost(slug)];
                case 1:
                    post = _c.sent();
                    if (!post) {
                        notFound();
                    }
                    imageUrl = post.featuredImage;
                    return [2 /*return*/, (<>
      <Header />
      <main style={{ maxWidth: '800px', margin: '2rem auto', padding: '20px', fontFamily: 'sans-serif', position: 'relative', zIndex: 1 }}>
        <article>
          <Link href="/blogs" style={{ color: '#0070f3', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
            &larr; Back to All Posts
          </Link>
          
          <h1 style={{ fontSize: '2.5em', marginBottom: '0.5rem' }}>{post.title}</h1>
          
          {post.date && (<p style={{ fontStyle: 'italic', color: '#555', marginTop: 0 }}>
              Published on: {new Date(post.date).toLocaleDateString('en-US', {
                                    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'
                                })}
            </p>)}
          
          {imageUrl && (<img src={imageUrl} alt={post.title || 'Blog post image'} style={{ width: '100%', height: 'auto', borderRadius: '8px', margin: '20px 0' }}/>)}
          
          <div style={{ lineHeight: '1.7', fontSize: '1.1em' }} dangerouslySetInnerHTML={{ __html: post.content || '' }}/>
        </article>
      </main>
      <Footer />
    </>)];
            }
        });
    });
}
