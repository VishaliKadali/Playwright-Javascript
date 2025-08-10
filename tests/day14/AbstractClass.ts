abstract class Login{
    launchBrowser(){
        console.log("Implemnetation methods")
    }

    abstract loadurl():void

    //we cannot create object to it
    //new normal class and extends abstract class and
}

class Base extends Login{
    loadurl():void{
        console.log("Implement in Normal class")
    }

    user(){
        console.log("Enter the username")
    }
}

const obj=new Base()
obj.launchBrowser()
obj.loadurl()
obj.user()