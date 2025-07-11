let total= 8

function Score(total)
{
    switch(true)
    {
        case (total> 9 && total==10):
        console.log("Student Grade is A")
        break;

        case (total> 8 && total ==9):
        console.log("Student Grade is B")
        break;

        case (total> 7 && total ==8):
        console.log("Student Grade is A")
        break;

        case (total> 6 && total ==7):
        console.log("Student Grade is A")
        break;

        case (total> 5 && total ==6):
        console.log("Student Grade is A")
        break;

        default:
        console.log("Fail")
    }
}
Score(total)