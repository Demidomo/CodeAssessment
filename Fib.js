// Write a function 'fib' that takes in a number, n, and 
// returns the n-th number in the fibonacci sequence. 
//
// The first two numbers of the fibonacci sequence are 
// 1 and 1. The next number of the sequence can be 
// calculated by taking the sum of the previous two. 


fib(1); // 1 
fib(2); // 1
fib(3); // 2
fib(4); // 3
fib(5); // 5
fib(6); // 8
fib(7); // 13



// fib(6) = fib(5) + fib(4) 
// fib(n) = fib(n-1) + fib(n-2)



const fib = (n) => { 
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2); 
 
};


console.log(fib(5));
console.log(fib(6)); 

// Time: O(2^n) 
// Space: O(n) 
