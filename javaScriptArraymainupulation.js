function addNumber(array,number){
    array.push(number)
    return array
}
function removeFirstOccurence(array,number){
    array.splice(number.indexOf(number),1)
    return array
}
function sortNumbers(array){
    array.sort((a,b)=>a-b)
    return array
}
function sum(array){
    let ans= sum.reduce((accumulator,currentValue)=>accumulator+currentValue,0)
    return ans
}
function findAvg(array){
    let avg= sum(array)/array.lenght
    return avg
}

let array=[5,3,8,1,2]
console.log(addNumber(array,4));
console.log(removeFirstOccurence(array,3))
console.log(sortNumbers(array))
console.log(sum(array))
console.log(findAvg(sum));