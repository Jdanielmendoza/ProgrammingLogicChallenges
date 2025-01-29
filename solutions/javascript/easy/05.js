function sumEvenNumbers(nums) {
  return nums.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);
}

// Ejemplos de uso
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
console.log(sumEvenNumbers([7, 9, 11, 13])); // 0
console.log(sumEvenNumbers([-2, -4, 5, 10])); // 4
