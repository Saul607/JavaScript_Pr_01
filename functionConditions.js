// Create a function that takes in one argument that is passed through a conditional statement.
// (For example, something like our haunted house door() function.)
// Print some resulting text to the console.
// Test all of your conditions to make sure you can receive all of your results back.

function knock(num){
  if (num < 0){
    return ("Damn why so negative");
  }else if (num > 0){
    return ("Positivity is key");
  }else{
    return ("Peace above all");
  }
}

console.log(knock(0));
console.log(knock(5));
console.log(knock(-7));
