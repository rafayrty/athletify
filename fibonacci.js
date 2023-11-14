function sumOfOddFibonacci(limit) {
  let a = 1;
  let b = 2;
  let sum = 0;

  while (a <= limit) {
    // Check if 'a' is odd before adding it to the sum
    if (a % 2 === 1) {
      sum += a;
    }

    // Calculate the next Fibonacci terms
    const nextTerm = a + b;
    a = b;
    b = nextTerm;
  }

  return sum;
}

const limit = 10000000;
const result = sumOfOddFibonacci(limit);

console.log(
  `The sum of odd-valued terms in the Fibonacci sequence not exceeding ${limit} is: ${result}`
);
