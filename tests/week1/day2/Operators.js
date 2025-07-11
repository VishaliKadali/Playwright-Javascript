console.log(5+5)
console.log(10-5)
console.log(4*5)
console.log(10/5) //output:2
console.log(10%5) //output:0
console.log(8>5)  //output - true
console.log(5===5) //output : true
console.log(5!=5) //output : false
console.log(5<2) //output : false
console.log(5>=6) //output : false

//(Loose Equality) 
console.log('5'==5) //true '5' is coerced to number 5
console.log(false==0)//true false is coerced to 0


//compare value and types without coercion strict equality
console.log('5'===5) //false (string === number)
console.log(6===6) //true(number===number) & (6===6)

console.log((5===5)&&(5<6)) //true
console.log((6!=6)&&(7>6)) //false

console.log((5===6)|| (5===5)) //true
