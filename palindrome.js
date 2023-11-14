function isPalindrome(num) {
  // Convert the number to a string and compare it with its reverse
  return num.toString() === num.toString().split("").reverse().join("");
}

function findLargestPalindrome() {
  let largestPalindrome = 0;

  // Loop through all possible products of two 3-digit numbers
  for (let i = 100; i <= 999; i++) {
    for (let j = 100; j <= 999; j++) {
      const product = i * j;

      // Check if the product is a palindrome and larger than the current largest palindrome
      if (isPalindrome(product) && product > largestPalindrome) {
        largestPalindrome = product;
      }
    }
  }

  return largestPalindrome;
}

const result = findLargestPalindrome();
console.log(
  `The largest palindrome made from the product of two 3-digit numbers is: ${result}`
);
