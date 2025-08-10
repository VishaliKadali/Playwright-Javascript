export class Browser{

    browserName(){
        console.log("Browser Name: chrome")
    }

    browserVersion(){
        console.log("Browser Version: 134")
    }
}

class BrowserDetails extends Browser{
    browserDetails(){
        console.log("Browser Details:chrome 110.010 windows 11")
    }
}

const browser=new BrowserDetails();
browser.browserName()
browser.browserVersion()
browser.browserDetails()