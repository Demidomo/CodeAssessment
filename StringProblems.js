function FindIntersection(strArr) { 

  // code goes here  
  // Step 1: transform the strings into just array of numbers
  // (transform the numbers and clean up the commas)
  // Step 2: make the hash table 


  const lists = strArr.map(str => str.split(", "));
  const firstList = lists[0];
  const secondList = lists[1]; 


  let matchMap = {}; // set it to an empty object
  let resultArr = []; // for the numbers that are found in both string
  
  firstList.forEach( num => matchMap[num] = true); // assuming each of these string only appear once
  
  // do the comparison
  // if matchmap has the number, that means we have an intersection
  // we want to push that number into resultArr to preserve the order 

  secondList.forEach(num => {
    if(matchMap[num]){
    resultArr.push(num); 

    }
  })
  
  // if there's anything in resultArr, we must return the string of comma-separated string
  // if none, then return false

  if(resultArr.length > 0) {
    return resultArr.join(",")

  }
  return false; 

}
   
// keep this function call here 
console.log(FindIntersection(readline()));
