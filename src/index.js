// lodash/fp is the functional programming section of the lodash library
import { compose, pipe } from 'lodash/fp';

const trim = str => str.trim();
const toUpper = str => str.toUpperCase();
const greeting = name => `Hello ${name}`;

const newFunc = pipe(trim, toUpper, greeting);
console.log(newFunc('    Michael    '));