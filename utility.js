/**
 * This is a JavaScript Utilities code
 * that contains may different helper methods
 * related to Strings, Arrays, Random Generators,
 * Type checking, etc.
 * 
 * This entire suite of utilities is based on the
 * blog https://swapnakpanda.hashnode.dev/25-utility-code-for-your-next-javascript-project
 * 
 * I've tried to implement similar utility helper methods
 * along with adding documentation and references links to
 * JavaScript documentation from MDN Web Docs
 */

/**
 * Check if input is of number type
 * 
 * Input Type: Any
 * 
 * Output Type: Boolean
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 *            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
 */
function isOfNumberType(input) {
    return typeof input === 'number' ||
        input instanceof Number;
}

console.log('============================');
console.log('\nisOfNumberType:\n');
console.log(`10 => ${isOfNumberType(10)}`);
console.log(`Number(10) => ${isOfNumberType(Number(10))}`);
console.log(`new Number(10) => ${isOfNumberType(new Number(10))}`);
console.log(`"10" => ${isOfNumberType("10")}`);
console.log('\n');


/**
 * Check if input value contains a number
 * 
 * Input Type: Any
 * 
 * Output Type: Boolean
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
 */
function isNumber(input) {
    return isOfNumberType(input) || !isNaN(Number(input));
}

console.log('============================');
console.log('\nisNumber:\n');
console.log(`10 => ${isNumber(10)}`);
console.log(`Number(10) => ${isNumber(Number(10))}`);
console.log(`new Number(10) => ${isNumber(new Number(10))}`);
console.log(`"10" => ${isNumber("10")}`);
console.log(`"10ABC" => ${isNumber("10ABC")}`);
console.log(`"10.01" => ${isNumber("10.01")}`);
console.log(`"10e+14" => ${isNumber("10e+14")}`);
console.log('\n');


/**
 * Check if input is null or, undefined
 * 
 * Input Type: Any
 * 
 * Output Type: Boolean
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Glossary/Nullish
 */
function isNullish(input) {
    return input == undefined;
}

console.log('============================');
console.log('\nisNullish:\n');
console.log(`undefined => ${isNullish(undefined)}`);
console.log(`"undefined" => ${isNullish("undefined")}`);
console.log(`null => ${isNullish(null)}`);
console.log(`"" => ${isNullish("")}`);
console.log(`false => ${isNullish(false)}`);
console.log('\n');

/**
 * Check is input is falsy
 * 
 * Input Type: Any
 * 
 * Output Type: Boolean
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 */
function isFalsy(input) {
    return !input;
}

console.log('============================');
console.log('\nisFalsy:\n');
console.log(`undefined => ${isFalsy(undefined)}`);
console.log(`null => ${isFalsy(null)}`);
console.log(`{} => ${isFalsy({})}`);
console.log(`[] => ${isFalsy([])}`);
console.log(`"" => ${isFalsy("")}`);
console.log(`0 => ${isFalsy(0)}`);
console.log(`1 => ${isFalsy(1)}`);
console.log(`false => ${isFalsy(false)}`);
console.log(`true => ${isFalsy(true)}`);
console.log('\n');


/**
 * Check if input is an Array
 * 
 * Input Type: Any
 * 
 * Output Type: Boolean
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 */
function isArray(input) {
    return Array.isArray(input);
}

console.log('============================');
console.log('\nisArray:\n');
console.log(`null => ${isArray(null)}`);
console.log(`[] => ${isArray([])}`);
console.log(`[1, 2, 3] => ${isArray([1, 2, 3])}`);
console.log(`{} => ${isArray({})}`);
console.log(`[null] => ${isArray([null])}`);
console.log('\n');


/**
 * Check if input is an Empty Object
 * 
 * Input Type: Object
 * 
 * Output Type: Boolean
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
 */
function isEmptyObject(input) {
    for (const key in input) {
        // If input object has the key as its own property
        // Return false as object is not empty. 
        if (input.hasOwnProperty(key))
            return false;
    }
    return true;
}

console.log('============================');
console.log('\nisEmptyObject:\n');
console.log(`null => ${isEmptyObject(null)}`);
console.log(`[] => ${isEmptyObject([])}`);
console.log(`{} => ${isEmptyObject({})}`);
console.log(`{ x: 10 } => ${isEmptyObject({ x: 10 })}`);
console.log(` => ${isEmptyObject()}`);
console.log('\n');


/**
 * Convert first character of each word to uppercase
 * 
 * Input Type: String
 * 
 * Output Type: String
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 *            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
 *            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
 */
function properCase(input) {
    // Converts input to lowercase, thenn replaces the 1st word ^\w
    // or replaces the word \w after space character \s to upper case
    return input?.toLowerCase().replace(/^\w|\s\w/g, s => s.toUpperCase());
}

console.log('============================');
console.log('\nproperCase:\n');
console.log(`"" => ${properCase("")}`);
console.log(`mike => ${properCase('mike')}`);
console.log(`wEb DeVELOPmenT => ${properCase('wEb DeVELOPmenT')}`);
console.log('\n');


/**
 * Convert first character of each sentence to upper case
 * 
 * Input Type: String
 * 
 * Output Type: String
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 *            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
 *            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
 */
function sentenceCase(input) {
    return input.toLowerCase().replace(/^(\w)|\.\s+(\w)/gm, s => s.toUpperCase());
}

console.log('============================');
console.log('\nsentenceCase:\n');
console.log(`"" => ${sentenceCase("")}`);
console.log(`i am bored => ${sentenceCase("i am bored")}`);
console.log(`i am bored. let's play. => ${sentenceCase("i am bored. let's play.")}`);
console.log(`i am multiline bored. 
let's play. => ${sentenceCase(`i am multiline bored. 
                let's play.`)}`);
console.log('\n');


/**
 * Reverse a string
 * 
 * Input Type: String
 * 
 * Output Type: String
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/EXSLT/str/split
 *            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 *            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 */
function reverseString(input) {
    return input.split('').reverse().join('');
}

console.log('============================');
console.log('\nreverseString:\n');
console.log(`"" => ${reverseString("")}`);
console.log(`Hello => ${reverseString("Hello")}`);
console.log(`Hello, World! => ${reverseString("Hello, World!")}`);
console.log('\n');


/**
 * Convert number from one base to another
 * 
 * Input Type (1): String
 * 
 * Input Type (2): Number
 * 
 * Input Type (3): Number
 * 
 * Output Type: String
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 */
function convertBase(input, base1, base2) {
    return parseInt(input, base1).toString(base2);
}
console.log('============================');
console.log('\nconvertBase:\n');
console.log(`"15", 10, 2 => ${convertBase("15", 10, 2)}`);
console.log(`"F076", 16, 8 => ${convertBase("F076", 16, 8)}`);
console.log('\n');


/**
 * Create and initiatlise an array
 * 
 * Input Type: Number [Length of Array]
 * 
 * Input Type: Number [Default Array]
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
 */
function initialiseArray(length, value) {
    return Array(length).fill(value);
}
console.log('============================');
console.log('\ninitialiseArray:\n');
console.log(`5 | "0" => ${initialiseArray(5, "0")}`);
console.log(`0 | "5" => ${initialiseArray(0, "5")}`);
console.log('\n');


/**
 * To empty an array
 * 
 * Input Type: Array
 * 
 * Output Type: Array
 * 
 * Refernce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
 */
function emptyArray(input) {
    input.length = 0;
    return input;
}
console.log('============================');
console.log('\nemptyArray:\n');
console.log(`[] => ${emptyArray([])}`);
console.log(`[1, 2, 3, 4, 5] => ${emptyArray([1, 2, 3, 4, 5])}`);
console.log('\n');


/**
 * Remove blank (falsy) values from an array
 * 
 * Input Type: Array
 * 
 * Output Type: Array
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */
function removeBlanks(input) {
    // return input.filter(item => item);
    return input?.filter(Boolean);
}
console.log('============================');
console.log('\nremoveBlanks:\n');
console.log(`[] => ${[]}`);
console.log(`[1, 2, null, false, 3, undefined] => ${removeBlanks([1, 2, null, false, 3, undefined])}`);
console.log('\n');


/**
 * Remove duplicates from array
 * 
 * @param {Array} input An Input of type Array
 * @returns An array containing only distinct items
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 */
function removeDuplicates(input) {
    return [... new Set(input)];
}

console.log('============================');
console.log('\nremoveDuplicates:\n');
console.log(`[] => ${removeDuplicates([])}`);
console.log(`[1, 2, 3, 4, 4, 2, 5, 1] => ${removeDuplicates([1, 2, 3, 4, 4, 2, 5, 1])}`);
console.log('\n');


/**
 * Casting an Array to Array of Numbers
 * @param {Array} input Casts the input array to Number data type
 * @return Array of Number data type
 */
function castToNumbers(input) {
    return input?.map(Number);
}
console.log('============================');
console.log('\ncastToNumbers:\n');
console.log(`[] => ${castToNumbers([])}`);
console.log(`["1", 2, false, "3a", undefined] => ${castToNumbers(["1", 2, false, "3a", undefined])}`);
console.log('\n');


/**
 * Return array of digits for a non-negative integer
 * @param {input} An input of type Array
 * @returns Array of digits for a non-negative integer input 
 */
function digits(input) {
    return [...`${input}`].map(item => parseInt(item));
}
console.log('============================');
console.log('\ndigits:\n');
console.log(`[] => ${digits([])}`);
console.log(`1243 => ${digits(1243)}`);
console.log(`"123415sai" => ${digits("123415")}`);
console.log('\n');


/**
 * Return a series of integers (starting from 0)
 * @param {limit} An integer value which is the limit of series
 * @returns A series of inegers starting from 0 up-to the input value
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys
 */
function series(limit) {
    return [...Array(limit).keys()];
}
console.log('============================');
console.log('\mseries:\n');
console.log(`[] => ${series([])}`);
console.log(`1 => ${series(1)}`);
console.log(`10 => ${series(10)}`);
console.log(`12 => ${series(12)}`);
console.log('\n');


/**
 * Flatten an Array to any depth
 * @param {input} Nested arrays
 * @returns Flattened single array
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
 */
function flatCompletely(input) {
    return input?.flat(Infinity);
}
console.log('============================');
console.log('\nflatCompletely:\n');
console.log(`[1] => ${flatCompletely([1])}`);
console.log(`[1, [1, 2, [1, 4, 5]]] => ${flatCompletely([1, [1, 2, [1, 4, 5]]])}`);
console.log(`[[[1, 2], 3], [[4]], 5] => ${flatCompletely([[[1, 2], 3], [[4]], 5])}`);
console.log('\n');


/**
 * Remove holes from Array
 * @param {input} Array containting holes
 * @returns Array without any holes
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
 */
function removeHoles(input) {
    return input?.flat(0);
}
console.log('============================');
console.log('\nremoveHoles:\n');
console.log(`[1, 2, 3] => ${removeHoles([1, 2, 3])}`);
console.log(`[1, 2, false, 3] => ${removeHoles([1, 2, false, 3])}`);
console.log(`[1, 2, null, 3] => ${removeHoles([1, 2, null, 3])}`);
console.log(`[1, 2, undefined, 3] => ${removeHoles([1, 2, undefined, 3])}`);
console.log(`[1, 2, , 3] => ${removeHoles([1, 2, , 3])}`);
console.log('\n');


/**
 * Merge any number of Arrays
 * @param {input} Multiple Arrays as input argument
 * @returns Single array containing all the items from all passed input arrays
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
 */
function mergeArrays(...input) {
    return input?.flat(1);
}
console.log('============================');
console.log('\nmergeArrays:\n');
console.log(`[1, 2] => ${mergeArrays([1, 2])}`);
console.log(`[1, 2], 3 => ${mergeArrays([1, 2], 3)}`);
console.log(`[1, 2], 3, [4, [5]] => ${mergeArrays([1, 2], 3, [4, [5]])}`);
console.log('\n');


/**
 * Shuffle an Array
 * @param {input} An input array
 * @returns Modified original input array as a Shuffled array
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 *            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */
function shuffle(input) {
    return input.sort(() => Math.random() - 0.5);
}
console.log('============================');
console.log('\nshuffle:\n');
console.log(`[1, 2, 3, 4, 5, 6] => ${shuffle([1, 2, 3, 4, 5, 6])}`);
console.log(`[1, 2, 3, 4, 5, 6] => ${shuffle([1, 2, 3, 4, 5, 6])}`);
console.log('\n');


/**
 * Generate Random Boolean Values
 * @param {} None
 * @returns Random Boolean Values
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */
function randomBoolean() {
    return Math.random() >= 0.5;
}
console.log('============================');
console.log('\nrandomBoolean:\n');
console.log(`randomBoolean => ${randomBoolean()}`);
console.log(`randomBoolean => ${randomBoolean()}`);
console.log(`randomBoolean => ${randomBoolean()}`);
console.log(`randomBoolean => ${randomBoolean()}`);
console.log(`randomBoolean => ${randomBoolean()}`);
console.log('\n');


/**
 * Generate Random Numbers
 * @param {min, max} Takes a minimum & a maximum value as input
 * @returns Random Number within the minimum & maximum range
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */
function randomInteger(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
console.log('============================');
console.log('\nrandomInteger:\n');
console.log(`randomInteger(3, 10) => ${randomInteger(3, 10)}`);
console.log(`randomInteger(3, 10) => ${randomInteger(3, 10)}`);
console.log(`randomInteger(3, 10) => ${randomInteger(3, 10)}`);
console.log(`randomInteger(3, 10) => ${randomInteger(3, 10)}`);
console.log(`randomInteger(3, 10) => ${randomInteger(3, 10)}`);
console.log('\n');


/**
 * Generate Random ID
 * @param {} None
 * @returns A unique Random ID with characters as (0-9, A-Z, a-z)
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 *            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
 *            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
 */
function randomID() {
    return Math.random().toString(36).substring(2) || '0';
}
console.log('============================');
console.log('\nrandomID:\n');
console.log(`randomID => ${randomID()}`);
console.log(`randomID => ${randomID()}`);
console.log(`randomID => ${randomID()}`);
console.log(`randomID => ${randomID()}`);
console.log(`randomID => ${randomID()}`);
console.log('\n');


/**
 * Generate Random HEX Color Code
 * @param {} None
 * @returns A Random HEX Color Code
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 *            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
 *            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
 */
function randomHex() {
    return `#${(0x1000000 + Math.random() * 0xffffff).toString(16).slice(1, 7)}`;
}
console.log('============================');
console.log('\nrandomHex:\n');
console.log(`randomHex => ${randomHex()}`);
console.log(`randomHex => ${randomHex()}`);
console.log(`randomHex => ${randomHex()}`);
console.log(`randomHex => ${randomHex()}`);
console.log(`randomHex => ${randomHex()}`);
console.log('\n');