"use client";
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
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import styles from './BlogSlider.module.css';
var BlogSection = function () {
    var _a = useState([]), posts = _a[0], setPosts = _a[1];
    var _b = useState(false), isMounted = _b[0], setIsMounted = _b[1];
    useEffect(function () {
        var fetchPosts = function () { return __awaiter(void 0, void 0, void 0, function () {
            var res, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch('/api/blogs')];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 2:
                        data = _a.sent();
                        setPosts(data);
                        return [2 /*return*/];
                }
            });
        }); };
        fetchPosts();
        setIsMounted(true);
    }, []);
    var getStrapiMedia = function (url) {
        if (url.startsWith("https://onfra.io/wp-content")) {
            return url.replace("https://onfra.io/wp-content", "");
        }
        if (url.startsWith("https://ifelsetechno.com/demo/visitdesk-wp/wp-content")) {
            return url.replace("https://ifelsetechno.com/demo/visitdesk-wp/wp-content", "");
        }
        if (url.startsWith("http")) {
            return url;
        }
        return "/".concat(url.startsWith("/") ? url.substring(1) : url);
    };
    return (<section className={styles.blogSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.tagline}>Blog</h2>
          <h3 className={styles.title}>Interesting Articles</h3>
        </div>
      </div>
      
      <div className={styles.blogSwiperWrapper}>
        {isMounted && (<Swiper modules={[Pagination, Mousewheel, Autoplay, EffectFade]} effect={'fade'} loop={true} direction={'vertical'} pagination={{ clickable: true, el: '.swiper-pagination-custom' }} spaceBetween={30} slidesPerView={1} mousewheel={true} autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }} speed={800} className={styles.swiperInstance}>
            {posts.slice(0, 5).map(function (post, index) { return (<SwiperSlide key={index} className={styles.swiperSlide}>
                <div className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <Image src={getStrapiMedia(post.featuredImage)} alt={post.title} width={350} height={200} className={styles.postImage}/>
                  </div>
                  <div className={styles.contentWrapper}>
                    <span className={styles.postDate}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <h3 className={styles.postTitle}>{post.title}</h3>
                    <p className={styles.postExcerpt} dangerouslySetInnerHTML={{ __html: post.content }}></p>
                    <Link href={"/blogs/".concat(post.slug)} className="btn btn-outline-primary">Read More</Link>
                  </div>
                </div>
              </SwiperSlide>); })}
          </Swiper>)}
        <div className="swiper-pagination-custom"></div>
      </div>
    </section>);
};
export default BlogSection;
