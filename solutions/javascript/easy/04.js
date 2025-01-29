/* Given an array of integers, write a function that removes all duplicate values and returns a new array with only unique elements.   */

function removeDuplicatesValues(array = []){
    return [...new Set(array)]; 
}

let test = [1,2,4,5,7,3,1,7,8,2,2,5,7]; 

console.log(removeDuplicatesValues(test));

