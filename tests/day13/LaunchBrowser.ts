import {Browser} from './Browser'

class LaunchBrowser extends Browser{
    launchBrowser(){
        console.log("Launching Chrome browser")
    }
}
const launchFunc=new LaunchBrowser()
launchFunc.launchBrowser()
launchFunc.browserName()
launchFunc.browserVersion()