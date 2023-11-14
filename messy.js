const fs = require("fs");
const readline = require("readline");

// Specify the path to your text file
const filePath = "messy.txt";

// Create a readable stream from the file
const fileStream = fs.createReadStream(filePath);

// Create a readline interface
const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});
function findWords(messyString) {
  // Define a regular expression pattern to match words
  var wordPattern = /\b[A-Za-z]+\b/g;

  // Use match to find all occurrences of words in the messy string
  var words = messyString.match(wordPattern);

  return words || [];
}
let combinedString = "";
// Event listener for each line
rl.on("line", (line) => {
  // Process each line here
  combinedString += line;
  //console.log("Line:", line);
});

// Event listener for when the file is completely read
rl.on("close", () => {
  console.log(findWords(combinedString));
  console.log("File reading completed.");
});
