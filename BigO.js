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


     
// Resursive Example 

const zoom = (n) => { 
  if (n === 0) {
    console.log('liftoff!') ;
    return;
  }
  
  console.log(n);
  zoom(n - 1);
}; 
     
     
zoom(10);  //time: O(n)
           //space: O(n)
// 10
// 9 
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1 
// liftoff! 

     

const zap = (n) => {
  if (n < 1) {
    console.log('blastoff!');
    return;
  }
  
  console.log(n);
  zap(n - 2); 

};
     
zap(10); 
     
     
// time: O(n)
// space: O(n)
     

const unique = (array) => {
  const newArray = [];
  
  for (let i = 0; i < array.length; i++) {
    const ele = array[i];
    if (!newArray.includes(ele)) {          // This part is the bottleneck
      newArray.push(ele);
    }                                       //time: n^2
  }
  
  return newArray;
}

unique(['cat', 'dog', 'rat', 'dog', 'cat', 'bird']); 
// ['cat', 'dog', rat', bird']


const unique = (array) => {
  const onlyUniques = new Set ();   // items in set will be unique 
  
  for (let i = 0; i < array.length; i++) {
    const ele = array[i];
    onlyUniques.add(ele); 
  }
  
  return Array.from(onlyUniques); //makes an array from a set 
};
     











// 7 common complexity classes 

// Constant time O(1)




const bar = (array) => {
  return array [0] * array[array.length - 1]; 
};
     
     
bar([3, 5, 2, 4, 7]); // 21





// Log O(log(n)) 
const foo = (n) => { 
  if (n <= 1) {
    console.log("hooray");
    return;
  }
  
console.log(n);
  foo(n / 2);
};
     
     

// Linear O(n) 


let foo = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}; 
     




// Loglinear O(n*log(n))
     
     // linear behavior nested in log steps
     // bigger than O(n), smaller than O(n^2) 

const bar = (str) => {
  console.log(str);
  if (str.length <= 1) return; 
  const midIdx = Math.floor(str.length / 2);
  bar(str.slice(0, midIdx));
};
     
bar("abcdefghijklmnopqrstuvwxyz");


     
      const foo = (array) => {
       let str = "";
       for (let i = 0; i < array.length; i++) { 
         str += array[i];
       }
       console.log(str); 
       console.log("--------");
       
       if (array.length <= 1) return;
       
       const midIdx = Math.floor(array.length / 2);
       const left = array.slice(0. midIdx);
       const right = array.slice(midIdx);
       foo(left);
       foo(right); 
              




