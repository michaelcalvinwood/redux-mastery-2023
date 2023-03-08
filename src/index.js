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

/*
 * Currying with ES6 Notation
 */

const addDosNumeros = a => b => a + b;

sum = addDosNumeros(20)(40);
console.log(sum);

const addTresNumeros = a => b => c => a + b + c;

sum = addTresNumeros(20)(30)(50);
console.log(sum);

/*
 * Currying with lodash function programming library
 */

import { pipe } from 'lodash/fp';

const trim = str => str.trim();
const toUpper = str => str.toUpperCase();
const greeting = message => name => `${message} ${name}`;

const newFunc = pipe(trim, toUpper, greeting('Hola'));
console.log(newFunc('    Michael    '));