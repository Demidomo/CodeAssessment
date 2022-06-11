

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
