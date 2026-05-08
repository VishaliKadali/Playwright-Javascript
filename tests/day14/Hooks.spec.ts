import test from '@playwright/test'

test.beforeAll("Set Data file",()=>{
    console.log("Read Data from Utils")
})

test.beforeEach("Storage state",()=>{
    console.log("Use the stroage state")
})

test("Login to the application",()=>{
    console.log("Login")
})

test("Create Lead",()=>{
    console.log("Create Lead")
})

test.afterEach("Close the page",()=>{
    console.log("Close the page")
})

test.afterAll("Close the browser",()=>{

})