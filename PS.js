// Find intersection
// ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
// 2 strings in an array 


function FindIntersection(strArr) {
    // code goes here 
    
    // making a few variable to make it easier when referencing strArr
    // strArr has 2 strings with numbers seperated by a comma
    // transform the strings into arrays of numebers 
    
    
    const lists = strArr.map(str => str.split(", "));
    // transform the numbers and clean up the commas 
    // splitting strArr on the comma, and removing the empty space
    // [1,3,4,7,13] [1,2,4,13,15]
    // firstList =  [1,3,4,7,13]
    // secondList = [1,2,4,13,15]
    
    const firstList = lists[0]; 
    // making another variable, referencing the first item in the lists 
    
    const secondList = lists[1]; 
    // these variables are easy references to the numbers 
    
    
    // now we make a hash table 
    let matchMap = {};
    // set it as an empty object 
    
    let resultArr = []; 
    // making an array to store the numbers that we find in both strings 
    
    
    
    // now we perform some iteration across either the first string 
    // or the second string to create the matchMap 
    
    firstList.forEach( num => matchMap[num] = true );
    // each value is a number, key into matchMap and create that number 
    // set it equal to true 
    // making an assumption that the number appears once
    // set it to true 
    
    
    // now we do the comparison
    // we iterate across the second list and check to see 
    // if inside the matchmap that that number exist 
    
    secondList.forEach( num => {
        if(matchMap[num]) {
            resultArr.push(num); 
        }
        
        // If the matchmap that the number we are look at exists
        // so it's true 
        // then we will push the number, to preserve the order 
    })
        // if inside the matchMap (hash) has that number 
        // that means we have an intersection 
        // then we want to push the number into the resultArr 
    
    
    
    // if there's no intersection, we want to return false 
    if(resultArr.length > 0) {
        return resultArr.join(",")
    }
    
    return false; 
    
    // if there's anything inside the resultArr
    // that means there is an intersection 
    // return a comma-separated string containing the numbers 
    
    // otherwise if the length is 0, that means there is no intersection
    // we return false 
    
}

// Remove Brackets
function RemoveBrackets(str) { 
  while (str.includes('()')) {
      str = str.replace('()', '');
  }
  return str.length;

}
   
// keep this function call here 
console.log(RemoveBrackets(readline()));



// creating a variable and making a function

var a = 10

function f () {
  console.log(f)
}

f(); 



// .maps() 


let startHike = [96, 84, 92, 82, 94];

let summit = startHike.map(function(hikerEnergy) { 
    
    
    return hikerEnergy / 2; 
});

console.log(summit); 
