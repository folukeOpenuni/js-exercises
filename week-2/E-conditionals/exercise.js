/*
  Conditionals
  ---------------------------------
  Add an if statement to only show the name if the role is student
*/


var name = "Daniel";
var role = "mentor";

var name2 = "Harun";
var role2 = "student";

//test for person 1
if(role2) {
  console.log("Hi, My name is " + name2);
} 

//test for person 2
if(role === role2) {
  console.log("Hi, My name is " + name2);
}
// else {

// console.log("Hi, My name is " + name);
// //console.log("Hi, My name is " + name2);
// }



/* 
EXPECTED RESULT
---------------
My name is Harun
*/
