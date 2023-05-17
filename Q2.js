// 2) Find the longest chain of letters in a word
const word = "00000111110101001111100001001";

// Initialize variables to keep track of the longest chain
var currentChain = 0;
var longestChain = 0;

// Loop through each character in the word
for (var i = 0; i < word.length; i++) {
  // Check if the current character is '1'
  if (word[i] === "1") {
    currentChain++; // Increment the chain length

    // Check if the current chain is longer than the longest chain
    if (currentChain > longestChain) {
      longestChain = currentChain; // Update the longest chain
    }
  } else {
    currentChain = 0; // Reset the chain length
  }
}

console.log("Longest chain of letters:", longestChain);
