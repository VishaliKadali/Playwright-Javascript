let value=[34,56,21,23,45,34,65,45]
console.log(value)
for(let i=0;i<value.length;i++){
    for(let j=i+1;j<value.length;j++){
        if(value[i]===value[j]){
            console.log(`Duplicate value is:  ${value[j]}`)
        }
    }
}