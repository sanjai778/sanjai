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
import { useState, useEffect } from 'react';
import styles from './FaqSection.module.css';
var AccordionItem = function (_a) {
    var faq = _a.faq, isOpen = _a.isOpen, onClick = _a.onClick;
    return (<div className={"".concat(styles.card, " ").concat(isOpen ? styles.open : '')}>
      <div className={styles.cardHeader}>
        <button className={styles.button} onClick={onClick} aria-expanded={isOpen}>
          <span className={styles.iconWrapper}>
            <i className={"bx ".concat(isOpen ? 'bxs-check-circle' : 'bx-chevron-up-circle')}></i>
          </span>
          {faq.Question}
        </button>
      </div>
      <div className={"".concat(styles.contentWrapper, " ").concat(isOpen ? styles.open : '')}>
        <div className={styles.cardBody}>
          {faq.Answer}
        </div>
      </div>
    </div>);
};
var FaqSection = function () {
    var _a = useState([]), faqs = _a[0], setFaqs = _a[1];
    var _b = useState(0), openIndex = _b[0], setOpenIndex = _b[1]; // First item is open by default
    useEffect(function () {
        var fetchFaqs = function () { return __awaiter(void 0, void 0, void 0, function () {
            var res, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch('/api/faqs')];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 2:
                        data = _a.sent();
                        setFaqs(data);
                        return [2 /*return*/];
                }
            });
        }); };
        fetchFaqs();
    }, []);
    var handleToggle = function (index) {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (<section className={styles.faqSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.tagline}>FAQs</h2>
          <h3 className={styles.title}>Here are some of the basic types of questions from our customers</h3>
        </div>
        <div className={styles.accordion}>
          {faqs.map(function (faq, index) { return (<AccordionItem key={index} faq={faq} isOpen={openIndex === index} onClick={function () { return handleToggle(index); }}/>); })}
        </div>
      </div>
    </section>);
};
export default FaqSection;
