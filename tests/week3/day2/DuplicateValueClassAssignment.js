let data=[23,56,32,45,56,78,89,40,78]

console.log(data)
for(let i=0;i<data.length;i++){
    for(let j=i+1;j<data.length;j++){
        if(data[i]===data[j]){
            console.log(`Duplicate value is:  ${data[j]}`)
        }
    }
}

let value=[23,true,'a','r','test',57]

// 1) Add 37 to the **start**
value.unshift(37); // returns new length
console.log(value);

// 2) Remove the **first** element
const removedFirst = value.shift(); // no arg needed
console.log('Removed with shift():', removedFirst);

// 3) Add "js" to the **end**
// Always wrap strings in quotes!
value.push('js');
console.log(value);

// 4) Remove the **first** element again
const removedAgain = value.shift();
console.log('Removed again:', removedAgain);

// 5) Remove the **last** element
const removedLast = value.pop();
console.log('Removed last:', removedLast);

// Final state:
console.log('Final array:', value);