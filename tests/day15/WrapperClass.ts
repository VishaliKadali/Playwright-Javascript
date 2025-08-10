import {Page} from '@playwright/test'

export abstract class playwrightWrapper{
    page:Page

    constructor(page:Page){
        this.page=page
    }

    async clearandType(locator:string,data:string){
        const ele=this.page.locator(locator)
        await ele.clear()
        await ele.fill(data)
    }

    async typeValue(locator:string,data:string){
        await this.page.locator(locator).fill(data)
    }
}