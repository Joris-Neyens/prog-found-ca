// question 1
for(var i = 15; i < 26; i++) {
    if(i % 2) {
        console.log(i + 1);
    }
}

// question 2
function functionType () {
    console.log("I am a function")
}

var innerFunction = functionType(50);

function outerFunction (argumentOne) {
    outerFunction();
}
outerFunction(50);
