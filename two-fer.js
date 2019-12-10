//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
/*
export const twoFer = (name) => {
    name = "Alice";
    throw new Error(!name);
    return "you";
    console.log("One for %s, one for me", name);
};


export const twoFer = (name = 'you') => {
    return `One for ${name}, one for me.`;
};


var myGlobal = 10; // Declare your variable here
var oopsGlobal;

function fun1() {
    oopsGlobal = 5; // Assign 5 to oopsGlobal Here

}

// Only change code above this line
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();


function add(a, b) {
    console.log(a + b);
}

add(1, 2);


function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}
console.log(pow(2, 3));
*/

var twoFer = (input = 'you') => {
    return `One for ${input}, one for me.`;
};
console.log(twoFer());