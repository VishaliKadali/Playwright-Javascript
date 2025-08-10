"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Browser = void 0;
var Browser = /** @class */ (function () {
    function Browser() {
    }
    Browser.prototype.browserName = function () {
        console.log("Browser Name: chrome");
    };
    Browser.prototype.browserVersion = function () {
        console.log("Browser Version: 134");
    };
    return Browser;
}());
exports.Browser = Browser;
var BrowserDetails = /** @class */ (function (_super) {
    __extends(BrowserDetails, _super);
    function BrowserDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrowserDetails.prototype.browserDetails = function () {
        console.log("Browser Details:chrome 110.010 windows 11");
    };
    return BrowserDetails;
}(Browser));
var browser = new BrowserDetails();
browser.browserName();
browser.browserVersion();
browser.browserDetails();
