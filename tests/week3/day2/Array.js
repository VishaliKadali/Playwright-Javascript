let data=['dilip',30,true,25,'testleaf']
console.log("Length of an array : " +data.length)
console.log(data[3])
console.log(data[6])
data[7]=false
console.log(data[7])

//Adds the value index of 0 in the array -> unshift 
data.unshift('js')
console.log(data)

//add valu in the last position in the array -> push
data.push("ts")
console.log(data)

console.log("Length of an array" +data.length)

//delete first and last element
data.shift()
console.log(data)

//Delete the value present in the last index
data.pop()
console.log(data)

//spread syntax will connect from one array to another array
let a1=[2,4,56,78]
let a2=['d','r','t','w',...a1]
console.log("Spread syntax length "+a2.length)

//Nestedd array or multiple array
let value=['a','g','t',true,[45,'dilip','false']]
console.log("Nested array length: "+value.length)
console.log(value[5][1])

console.log(data.sort())
