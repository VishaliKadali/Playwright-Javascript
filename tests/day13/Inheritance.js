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
var LoginPage = /** @class */ (function () {
    function LoginPage() {
    }
    LoginPage.prototype.enterUsername = function () {
        console.log("DemoSalesManager");
    };
    LoginPage.prototype.enterPassword = function () {
        console.log("crmsfa");
    };
    LoginPage.prototype.clickLogin = function () {
        console.log("LoginButton");
    };
    return LoginPage;
}());
var welcomePage = /** @class */ (function (_super) {
    __extends(welcomePage, _super);
    function welcomePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    welcomePage.prototype.verifyUrl = function () {
        console.log("verify url");
    };
    return welcomePage;
}(LoginPage));
var inherit = new welcomePage(), _a = void 0, inherit = _a.inherit, enterUsername = _a.enterUsername;
();
