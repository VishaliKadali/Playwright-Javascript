var BaseTest = /** @class */ (function () {
    function BaseTest() {
    }
    BaseTest.prototype.click = function () {
        console.log("click");
    };
    BaseTest.prototype.clear = function () {
        console.log("clear");
    };
    BaseTest.prototype.fill = function () {
        console.log("Fill");
    };
    BaseTest.prototype.locator = function () {
        console.log("locator");
    };
    return BaseTest;
}());
// ✅ Object creation and method calls
var bt = new BaseTest();
bt.click();
bt.clear();
bt.fill();
bt.locator();
