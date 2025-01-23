//Write a function that takes an array of numbers as input and returns the sum of all the elements in the array.
function sumArray(numbers) {
    return numbers.reduce((acc, curr) => {
        console.log({acc,curr});
        return acc + curr
    });
}

const arrayTest = [1,2,3,4,5]

console.log(sumArray(arrayTest));