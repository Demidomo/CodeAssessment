// Big O 

// why: 
// We use it to judge which solution is 'better' 
//Solutions that use the least time + space


// Big O can be objective with determining which solution is more or less optimizing, looking at how things scale
// Builds resillent programs. 
// Big O considers the size of the input 



const calculateAverage = (numbers) => { 
  let sum = 0;
  
   for (let i = 0; i < numbers.length; i++) { 
     let numbers = numbers[i];
     sum += number; 
   }
   return sum / numbers.length; // calculateAverage is sum divided by numbers count 

};

console.log(calculateAverage([2, 3, 4, 1])); //prints calculateAverage, in this case it is 2.5


// Time complexity example 

const foo = (n) => {
   for (let a = 0; a < n / 2; a++) {  // O(n/2) 
     console.log(a)                   // O(n)
     {
       
   for (let b = 0; b < n; b++) {     // for every iteration of this nested loop
     for (let c = 0; c < n; c++) {   // we run the c loop as well
       console.log(b + "," + c);     // 1 iteration of the 'b' loop will be O(n^2) 
     }
   }                                // n + n^2 
};                                  // O(n^2) is the size of the loop, n is the input #

foo(10);






const bar = (n) => { 
   for (let i = 0; i < 3; i++) {
     for (let j = 0; j < n; j++) {        // O(3*n) 
       console.log(j);                    // O(n) 
     }
   }
   for (let k = 0; k < 10000; k++) {      // ignore '10000'
     console.log(k);                      
     
   }
};                                       //3n + 10000
                                         //n 
bar(10);








const boom = (n) => { 
  for (let i = 0; i < 3; i++) { // 3n 
    bam(n);
  }
  
  for (let k = 0; k < 10000; k++) { // +10000
    console.log(k);
  }
};
     
const bam = (m) => {
  for (let j = 0; j < m; j++){
    console.log(j);
  }
};                                     // n



//Space Complexity 
//Look at how much space it takes up

const calculateAverage = (numbers) => {
  let sum = 0; 
  
  or (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    sum += number;
  }
  
  return sum / numbers.legnth;
};

// 3 variables, uses up constant space 
// O(1) 


const doubler = (items) => {
  let newArray = []; // this will be inserted in the for loop below
  
  for (let i = 0; i < items.length; i++) { // if this for loop iterates n times, it will be 2n
    newArray.push(items[i]);
    newArray.push(items[i]); 
  }
  
  return newArray;
}; 
     
doubler(['a', 'b', 'c']); // ['a', 'a', 'b', 'b', 'c', 'c']



