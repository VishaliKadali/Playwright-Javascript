import {Page} from '@playwright/test'

export abstract class playwrightWrapper{
    page:Page

    constructor(page:Page){
        this.page=page
    }

    async clearandType(locator:string,data:string){
        try{
        const ele=this.page.locator(locator)
        await ele.clear()
        await ele.fill(data)
        }
        catch(error){
            console.error('Error in clear and type method: ${error}');
        }
        
    }

    async typeValue(locator:string,data:string){
        try{
            await this.page.locator(locator).fill(data)
        } catch(error){
            console.error(`Error in type value method: ${error}`);
        }
    }
}
