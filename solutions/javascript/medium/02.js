/*Write a function that takes a sentence (a string) as input and returns the longest word in the sentence. If there are multiple words with the same length, return the first one that appears.
 */

function LongestWord(sentence = ""){ 
    const arrayOfWords = sentence.split(" ")
    let LongestWord = ""
    arrayOfWords.map(word => {
        if(word.length > LongestWord.length){
            LongestWord = word
        }
    })
    return LongestWord
}

const sentence = "The quick brown fox jumps over the lazy dog" 

console.log(LongestWord(sentence));//=> quick