
function launchBrowser(){
let browserName='Chrome'
if(browserName==='Chrome')
console.log(browserName)
}

function runTests(){
let testType='Smoke'
switch(testType){
case 'Sanity':
    console.log("Sanity")
    break;

    case 'Smoke':
    console.log("Smoke")
    break;

    case 'regression':
    console.log("Regression")
    break;

    default :
    console.log("Smoke")
    break;
}

}

launchBrowser()
runTests()