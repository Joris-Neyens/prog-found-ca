// question 1
var colour = "blue";

// question 2
var person = {
    age: 55
}

// question 3
var outOfStock = true;

if(outOfStock === true) {
    console.log("Out of stock");
}
else {
    console.log("In stock");
}

// question 4
var numbers = [1, 2, 3, 4, 5];

var amountOfNumbers = numbers.length;

for(var i = 0; i < amountOfNumbers; i++) {
    console.log(numbers[i]);
}

// question 5
for(var i = 15; i < 26; i++) {
    console.log(i);
}

//question 6
for(var i = 15; i < 26; i++) {
    if(i === 20) {
        console.log(i);
    }
}

//question 7
var students = [
    {
        name: "rose",
        age: 27,
        onlineStudent: true,
    },
    {
        name: "Jack",
        age: 20,
        onlineStudent: false,
    }
]

for(var i = 0; i < students.length; i++) {
    console.log(students[i].age);
    console.log(students[i].onlineStudent);
}

//question 8 
function whatIDontLike(food) {
    console.log("I don't like " + food);
}

whatIDontLike("cheese");

//question 9
function substractNumbers(number1, number2) {
    var substract = number1 - number2;
    console.log(substract);
}

//question 10
var array = [];

function addColour (addToArray) {
    array.push("addToArray");
    console.log(addToArray);
}

addColour("green");