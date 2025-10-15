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
import Image from 'next/image';
import styles from './NewsletterModal.module.css';
var NewsletterModal = function () {
    var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var _b = useState(false), isLoading = _b[0], setIsLoading = _b[1];
    var _c = useState(false), isSuccess = _c[0], setIsSuccess = _c[1];
    var _d = useState(""), email = _d[0], setEmail = _d[1];
    // Effect to trigger modal after a delay, only once per session/week
    useEffect(function () {
        var shouldShowPopup = function () {
            var lastShown = localStorage.getItem('newsletterPopupShown');
            if (!lastShown)
                return true;
            var oneWeek = 7 * 24 * 60 * 60 * 1000;
            return (new Date().getTime() - new Date(lastShown).getTime()) > oneWeek;
        };
        var timer = setTimeout(function () {
            if (shouldShowPopup()) {
                setIsOpen(true);
                localStorage.setItem('newsletterPopupShown', new Date().toISOString());
            }
        }, 10000); // 10 second delay
        return function () { return clearTimeout(timer); };
    }, []);
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setIsLoading(true);
                    // Simulate API call
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1500); })];
                case 1:
                    // Simulate API call
                    _a.sent();
                    console.log("Subscribing with email:", email);
                    setIsLoading(false);
                    setIsSuccess(true);
                    setEmail("");
                    return [2 /*return*/];
            }
        });
    }); };
    var closeModal = function () {
        setIsOpen(false);
        // Reset success state after a delay to allow fade out
        setTimeout(function () { return setIsSuccess(false); }, 500);
    };
    if (!isOpen)
        return null;
    return (<div className={styles.modalOverlay} onClick={closeModal}>
      <div className={styles.modalContent} onClick={function (e) { return e.stopPropagation(); }}>
        <button className={styles.closeButton} onClick={closeModal}>&times;</button>
        <div className={styles.modalBody}>
          <div className={styles.imageColumn}>
            <Image src="/images/newsletter.png" alt="Newsletter" width={300} height={300}/>
          </div>
          <div className={styles.formColumn}>
            <h4>Subscribe to our <span className={styles.highlight}>newsletter</span></h4>
            
            {!isSuccess ? (<>
                <p>Stay in the loop! Subscribe for updates, features, and exclusive offers.</p>
                <form onSubmit={handleSubmit}>
                  <input type="email" placeholder="Enter your email" value={email} onChange={function (e) { return setEmail(e.target.value); }} required/>
                  <button type="submit" disabled={isLoading} className="btn btn-primary">
                    {isLoading ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </form>
              </>) : (<div className={styles.successMessage}>
                <p>Thank you for subscribing! We will get back to you shortly.</p>
              </div>)}
          </div>
        </div>
      </div>
    </div>);
};
export default NewsletterModal;
