// Recursion
// 
// Why use recursion
// Because it shows up on interviews
// And it solves problems by breaking it down 
// 
// Use recursion that follows a certain pattern:
// One's that contain smaller instances of the same problem
// 
// 2 Types of recursion
// Base case: THe smallest instance of a problem 
// Recursive case: shrinks the size of the input toward the base case  
// 
// "Look for the pattern"
// factorial(5) = 5x4x3x2x1
// factorial(4) = 4x3x2x1
// factorial(5) = factorial(4) x 5
// factorial(n) = factorial(n-1) x n 
// factorial(1)is the base case, which will go into the 'if statement'


const factorial = (n) => { //defining the factorial function, that takes in an argument called 'n'
    if (n === 1) return 1; // we already know the result, just return 1 
                           // here is where we consider the recursion statement 
    return n * factorial(n - 1);
    
    
};


console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));


// Time: O(n) 
// Space: O(n)
