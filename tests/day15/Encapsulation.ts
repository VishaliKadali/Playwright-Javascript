class loginData{
    private username:string;

    constructor(username:string) {
    this.username=username
    }
    
    public get readUsername(){
        return this.username
        console.log("checked is updated in VS")
    }
}

const user=new loginData("DemoSalesManager")
console.log(user.readUsername)