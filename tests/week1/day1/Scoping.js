//var -> Global and functional scoping
//Let  and const -> Block level scoping {}

var age=18 //global scoping

voting() //function hoisting
function voting()
{
    let voterApplicationStatus='Not Eligible'
    if(age===18){
        var isEligibleToVote=true //function scoped 
        let voterApplicationStatus='Eligible for Voter ID'
        console.log("He/She is eligible to apply: " +voterApplicationStatus)
    }
    else{
        console.log("He/She is not eligible to apply" +voterApplicationStatus)
    }
    console.log(isEligibleToVote)
}
console.log(age)


