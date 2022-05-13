# Coderbyte

**
Problem 1**

Have the function BracketCombinations(num) read num which will be an integer greater than or equal to zero, and return the number of valid combinations that can be formed with num pairs of parentheses

Examples
Input: 3
Output: 5


function BracketCombinations(num) { 

  // code goes here  
  count = 0;
  n = 2**(2*num);
  for (iperm=0; iperm<n; iperm++){
    sum = 0;
    i = iperm;
    for (dig = 2*num; dig > 0; dig --){
      bit = i % 2;
      i -= bit;
      i /= 2;
      sum = sum + (bit == 0?1:-1);
      if(sum<0){break; };
    };
    count += (sum ==0)?1:0;
  };
  return count; 
}
   
// keep this function call here 
console.log(BracketCombinations(readline()));







Big O Notation & COmplexity Analysis for Algorithms: Part 1 of 2 


const sumArray = (numbers) {

  let sum = 0;
  
  for (let i=0; i < numbers.length; i++) { 
      sum += numbers[i]; 
  }

  return sum;
}; 


const array = [5, 76, 40, 48, 24, 18, 62, 100, 99, 22, 95, 72, 91];

const startTime = new Date(); 
console.log(sumArray(array));
const endTime = new Date (); 

const elapsedTime = endTime - starTime; 
console.log('finished in $elapsedTime} ms. ');


