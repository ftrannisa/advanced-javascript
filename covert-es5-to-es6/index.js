// 1. Convert the function to an arrow function

// ES5
const golden = function goldenFunction(){
 alert("this is golden!!")
}
golden()

//ES6
const golden = () => alert("this is golden!!")
golden()

// 2. Simplify  with object literals

// ES5 
const newFunction = function literal(firstName, lastName){
 return {
 firstName: firstName,
 lastName: lastName,
 fullName: function(){
 alert(firstName + " " + lastName)
 return 
 }
 }
}
newFunction("William", "Imoh").fullName()

// ES6
const newFunction = function literal(firstName, lastName){
 return {
 firstName,
 lastName,
 fullName(){
 alert(firstName + " " + lastName)
 return 
 }
 }
}
newFunction("William", "Imoh").fullName()

//3. Destructuring

// ES5
const newObject = {
 firstName: "Harry",
 lastName: "Potter Holt",
 destination: "Hogwarts React Conf",
 occupation: "Deve-wizard Avocado",
 spell: "Vimulus Renderus!!!"
}
const firstName = newObject.firstName;
const lastName = newObject.lastName;
const destination = newObject.destination;
const occupation = newObject.occupation;
console.log(firstName, lastName, destination, occupation)

// ES6
const newObject = {
 firstName: "Harry",
 lastName: "Potter Holt",
 destination: "Hogwarts React Conf",
 occupation: "Deve-wizard Avocado",
 spell: "Vimulus Renderus!!!"
}
const {firstName, lastName, destination, occupation} = newObject;
console.log(firstName, lastName, destination, occupation)

// 4. Array Spreading

// ES5
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = west.concat(east)
console.log(combined)

// ES6
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
console.log(combined)

// 5. Template Literals

// ES5
const planet = "earth"
const view = "glass"
var before = 'Lorem ' + view + 'dolor sit amet, ' + 
 'consectetur adipiscing elit,' + planet + 'do eiusmod tempor ' +
 'incididunt ut labore et dolore magna aliqua. Ut enim' +
 ' ad minim veniam'
console.log(before)

// ES6
const planet = "earth"
const view = "glass"
var after = `Lorem ${view} dolor sit amet,
 consectetur adipiscing elit, ${planet} do eiusmod tempor
 incididunt ut labore et dolore magna aliqua. Ut enim
 ad minim veniam`
console.log(after)
