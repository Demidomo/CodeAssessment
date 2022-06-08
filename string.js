// reversing a string 
//
// step 1: create string
// step 2: convert string into array with split function
// create a different variable at each variation
// 
// step 3: reverse the array with reverse function 
// step 4: convert the array back into a string 
//
// .split converts a string into array 
// .join converts array into string 


var str = "hello world from earth"; 
var arr = str.split(' '); // converting string to array

console.log(arr); // [ 'hello', 'world', 'from', 'earth' ]

var rev = arr.reverse();
console.log(rev); // [ 'earth', 'from', 'world', 'hello' ]

var rev = arr.reverse().join(' ');
console.log(rev); // earth from world hello


// to reverse a string
// step 1: make a string
// step 2: convert the string into an array
// step 3: reverse the array
// step 4: convert back to string


var str = "Matthew makes apps"; 
var arr = str.split(' '); 

var rev = arr.reverse(); 
var str = rev.join(' '); 

console.log(str); // apps makes Matthew




// vowel count 
// 
// step 1: create a string
// step 1.5: turn the string into an array
// step 2: create a new array of vowels
// step 3: make a for loop through the array
// step 3.5: store a count of how many vowels 
// step 4: within the for loop, check if each element contain the vowel characters
// 

var str = "hello coderbyte";
var arr = str.split(''); 

var vow = ['a','e','i','o','u'];
var count = 0;

for (var i = 0; i < arr.length; i++) {
    if (vow.indexOf(arr[i])) {
        count += 1;
        
    }
}

console.log(count);
