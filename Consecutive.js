function Consecutive(arr) { 

  // goal is to create a consecutive array of numbers
  // between the highest and lowest value
  var highest = arr[0];
  var lowest = arr[0]; 
  // new array is created to calculate all missing 
  // consecutive numbers
  var numbersBetween = [];


  // looping over the array
  // to determine the highest and lowest value accordingly
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > highest) {
      highest = arr[i];
    }

    else if (arr[i] < lowest) {
      lowest = arr[i];
    };
  };


  // loop through and use indexOf to find out
  // whether or not the number was in the original array

  for (var j = lowest; j <= highest; j++) {
    if (arr.indexOf(j) == -1) {
      numbersBetween.push(j);
    };
  };

  return numbersBetween.length; 
}
   
// keep this function call here 
console.log(Consecutive(readline()));
