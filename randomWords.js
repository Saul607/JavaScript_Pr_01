// Create an array of strings and use random() to select random entries
// and add them to a sentence, printing the result to the console.


var songtitles = ["Life is Beautiful", "Heartless", "Driving Ms Daisy", "A Brighter Shade of Blue", "Love Sosa", "RASCAL" ];
var artists = ["Lil Peep", "The Weeknd", "Logic, Childish Gambino", "Sleep On It", "Cheif Keef", "RMR"];

var randomSong = Math.floor(Math.random() * songtitles.length );
console.log(randomSong);
cmb = songtitles[randomSong] + " " + artists[randomSong];
console.log(cmb);
console.log("test")
