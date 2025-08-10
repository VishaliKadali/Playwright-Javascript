class loginData{
    private username:string;

    constructor(username:string) {
    this.username=username
    }
    
    public get readUsername(){
        return this.username
    }
}

const user=new loginData("DemoSalesManager")
console.log(user.readUsername)