/*
 * lodash pipe and compose require functions.
 */

// add two numbers without currying

function addTwoNumbers (a, b) {
    return a + b;
}

let sum = addTwoNumbers(5, 8);
console.log(sum);

// add two numbers with currying

function addTwoNums (a) {
    return function (b) {
        return a + b;
    }
}

sum = addTwoNums(5)(8);
console.log(sum);

// add three numbers with currying

function addThreeNums(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

sum = addThreeNums(3)(6)(8);
console.log(sum);