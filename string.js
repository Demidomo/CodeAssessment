// reversing a string 
//
// step 1: create string
// step 2: convert string into array with split function
// create a different variable at each variation
// 
// step 3: reverse the array with reverse function 
// step 4: convert the array back into a string 



var str = "hello world from earth"; 
var arr = str.split(' '); // converting string to array

console.log(arr); // [ 'hello', 'world', 'from', 'earth' ]

var rev = arr.reverse();
console.log(rev); // [ 'earth', 'from', 'world', 'hello' ]

var rev = arr.reverse().join(' ');
console.log(rev); // earth from world hello
