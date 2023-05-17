// 1) Find duplicate and same values in two arrays
var fullWordList = ["1", "2", "3", "4", "5"];
var wordsToRemove = ["1", "2", "3"];

// Create an empty array to store the duplicate values
var duplicates = [];

// Loop through each element in wordsToRemove array
for (var i = 0; i < wordsToRemove.length; i++) {
  var word = wordsToRemove[i];

  // Check if the word exists in fullWordList
  if (fullWordList.includes(word)) {
    duplicates.push(word); // Add the word to duplicates array
  }
}

console.log("Duplicate values:", duplicates);
