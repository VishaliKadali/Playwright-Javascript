class loginData{
    private username:string;

    constructor(username:string) {
    this.username=username
    }
    
    public get readUsername(){
        return this.username
        console.log("Updated in Github")
    }
}

const user=new loginData("DemoSalesManager")
console.log(user.readUsername)
