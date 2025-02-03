function countVowels(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let count = 0;

    for (let char of s) {
        if (vowels.has(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Hello World")); // 3
console.log(countVowels("ICPC Challenge")); // 5
console.log(countVowels("AEIOUaeiou")); // 10
console.log(countVowels("xyz")); // 0