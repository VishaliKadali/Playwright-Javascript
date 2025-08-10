// ✅ Corrected interface and class implementation
interface Data {
  click(): void;
  clear(): void;
  fill(): void;
  locator(): void; // Must be implemented or marked optional
}

class BaseTest implements Data {
  click(): void {
    console.log("click");
  }

  clear(): void {
    console.log("clear");
  }

  fill(): void {
    console.log("Fill");
  }

  locator(): void {
    console.log("locator");
  }
}

// ✅ Object creation and method calls
const bt = new BaseTest();
bt.click();
bt.clear();
bt.fill();
bt.locator();