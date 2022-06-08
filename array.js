var arr = [10, 'hello', true, (1,2,3)]; // to make an array

// to loop through an array, use a for loop

for (var i = 0; i < arr.length; i++) { // i is being set to 0, is looping incrementally 
    arr[i] // everytime the inner statement is executed, i represents a different number
    
    // loop through each element
}

console.log(arr.length);


// standalone sourcecode: 

var arr = [10, true, '2343', (1, 3, 4)];

    arr[2]; // 2343



var arr = [10, 'hello', true, [1,2,3]]; // to make an array

console.log(arr[3][1]); //2 

// join function converts an array into a string 
console.log(arr.join('')); // 10hellotrue1,2,3
console.log(arr.join(' ')); // 10 hello true 1,2,3 


console.log(arr); // [ 10, 'hello', true, [ 1, 2, 3 ] ]

// adds element
arr.push(1000);
console.log(arr); // [ 10, 'hello', true, [ 1, 2, 3 ], 1000 ]

// removes last added element
arr.pop();
console.log(arr); // [ 10, 'hello', true, [ 1, 2, 3 ] ]

// removes first element
arr.shift(); 
console.log(arr); // [ 'hello', true, [ 1, 2, 3 ] ]

// reverses the order of the array 
arr.reverse(); 
console.log(arr); // [ [ 1, 2, 3 ], true, 'hello' ]
