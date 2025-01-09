/*Write a function to determine if a given string is a palindrome.  
A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and case. */
function isPalindrome(s) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Check if the cleaned string is equal to its reverse
  const reversedString = cleanedString.split("").reverse().join("");
  return cleanedString === reversedString;
}

// Example Usage
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
