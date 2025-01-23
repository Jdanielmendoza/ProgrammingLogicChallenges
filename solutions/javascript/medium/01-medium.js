function findMostFrequentElement(array) {
    if (array.length === 0) return null;

    // Create a Map to store the frequency of each element
    const frequencyMap = new Map();

    // Populate the frequency map
    for (const element of array) {
        frequencyMap.set(element, (frequencyMap.get(element) || 0) + 1);
    }

    // Find the element with the highest frequency
    let mostFrequent = null;
    let maxFrequency = 0;

    for (const [element, frequency] of frequencyMap.entries()) {
        if (frequency > maxFrequency) {
            maxFrequency = frequency;
            mostFrequent = element;
        }
    }

    return mostFrequent;
}

// Test cases
console.log(findMostFrequentElement([1, 3, 2, 3, 4, 3, 5, 1, 1])); // Output: 3
console.log(findMostFrequentElement(['a', 'b', 'b', 'a', 'c', 'a'])); // Output: 'a'
console.log(findMostFrequentElement(['hola', 'hola', 'como', 'estan', 'como', 'hola','estan','hola'])); // Output: 'hola'
console.log(findMostFrequentElement([true, false, false, true, true])); // Output: true
console.log(findMostFrequentElement([])); // Output: null
