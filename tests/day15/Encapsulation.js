var loginData = /** @class */ (function () {
    function loginData(username) {
        this.username = username;
    }
    Object.defineProperty(loginData.prototype, "readUsername", {
        get: function () {
            return this.username;
        },
        enumerable: false,
        configurable: true
    });
    return loginData;
}());
var user = new loginData("DemoSalesManager");
console.log(user.readUsername);
