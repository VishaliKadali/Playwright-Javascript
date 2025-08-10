"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
var login = /** @class */ (function () {
    function login() {
        this.user = 'dilip';
        this.pass = 'crmsfa';
        this.logval = 67;
    }
    login.prototype.log = function () {
        console.log('Protected method');
    };
    login.prototype.errorLog = function () {
        console.log('Public Value');
    };
    login.prototype.getData = function () {
        console.log("".concat(this.user, " ").concat(this.pass, " ").concat(this.logval));
    };
    return login;
}());
exports.login = login;
