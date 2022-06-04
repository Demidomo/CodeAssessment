// Recursion is used for problems that contain a smaler instances of the ame problem



// - Base case: smallest instance, automatically know the answer
// - Recursive case: the problem shrinks the input towards the base case 




// Write a function 'factorial' that takes a number
// as an argument and returns the factorial of that 
// number. 
//
// The factorial of 'n' is the product of all positive
// numbers from 1 to 'n'. 


factorial(1); //1
factorial(2); //2
factorial(3); //6
factorial(4); //24 
factorial(5); //120 

// factorial(n) = n * factorial(n - 1) 
// fact(4) = 4 * fact(3) 
// fact(3) = 3 * fact(2) 
// fact(2) = 2 * fact(1) 
// fact(1) base case



const factorial = (n) => {
  if (n === 1) return 1; 

  return n * factorial(n - 1) ; 
}; 






