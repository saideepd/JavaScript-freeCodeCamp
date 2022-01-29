// Sum
const rupees = [1, 2, 5, 10, 50, 100];

const sum = rupees.reduce((total, amount) => {
    return total + amount;
});

console.log(sum);


// Average
const rupees2 = [1, 2, 5, 10, 100, 200];

const avg = rupees2.reduce((total, amount, index, array) => {
    total += amount;
    if(index === array.length)
        return total / array.length;
    else
        return total;
});

console.log(avg);


// Add Even & Odd Numbers
const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const [oddSum, evenSum] = nums.reduce(([oddSum, evenSum], item) =>  
    item % 2 === 0 ?
        [oddSum, evenSum + item]
    :   [oddSum + item, evenSum]
    ,   [0,0]
)
// [0,0] is initialValue provided to reduce()
// If initialValue is not provided, then previousValue is assigned 1st element in array & currentValue is assigned 2nd value from array
// But if initiatlValue is provided, then the previousValue is assigned the initialValue we provided, and currentValue is assigned 1st value from array

// Even Sum: 20
// Odd Sum: 16
console.log('Even Sum: ' + evenSum);
console.log('Odd Sum: ' + oddSum);


// Double Numbers Sum
const numbers = [1.3, 2.4, 5.2, 3];

const doubled = numbers.reduce((total, num) => {
    total.push(num * 2);
    return total;
}, []);

// Doubled Numbers:
// [ 2.6, 4.8, 10.4, 6 ]
console.log('Doubled Numbers:');
console.log(doubled);


// Double Numbers & Filter
const nums2 = [10, 20, 31, 40, 52, 24];

const doubledAbove30 = nums2.reduce((total, num) => {
    if(num > 30)
        total.push(num);
    return total;
}, []);

// Doubled Numbers & Filter:
// [ 31, 40, 52 ]
console.log('Doubled Numbers & Filter:');
console.log(doubledAbove30);


// Tally
const fruitBasket = ['banana', 'mango', 'apple', 'orange', 'grapes', 'mango', 'banana', 'pineapple', 'banana', 'apple', 'sweet lime', 'guava', 'grapes'];

const count = fruitBasket.reduce((tally, fruit) => {
    // For 1st pass, tally[fruit] to be set to 0 + 1, as tally[fruit] currently doesn't exist
    // On next passes of same fruit, it is set to tally[fruit] + 1
    tally[fruit] = (tally[fruit] || 0) + 1;
    return tally;
}, {});

console.log(count);
// {
//     banana: 3,
//     mango: 2,
//     apple: 2,
//     orange: 1,
//     grapes: 2,
//     pineapple: 1,
//     'sweet lime': 1,
//     guava: 1
// }


// Flattenning array of arrays with reduce
const data = [[1, 4, 3, 5], [2, 4, 6], [5, 7, 8, 1]];

const flatArray = data.reduce((previousArray, currentArray) => {
    return previousArray.concat(currentArray);
}, []);

// Flat Array:
// [ 1, 4, 3, 5, 2, 4, 6, 5, 7, 8, 1 ]
console.log('Flat Array:');
console.log(flatArray);


// Fetch data from complex objects
// Find colors inside each object
const colorData = [
    {a: 'happy', b: 'robin', c: ['blue','green']}, 
    {a: 'tired', b: 'panther', c: ['green','black','orange','blue']}, 
    {a: 'sad', b: 'goldfish', c: ['green','red']}
];

const colors = colorData.reduce((allColor, currentColor) => {
    currentColor.c.forEach(color => {
        allColor.push(color);
    });
    return allColor;
}, []);

// All Colors:
// [ 'blue', 'green', 'green', 'black', 'orange', 'blue', 'green', 'red' ]
console.log('All Colors:');
console.log(colors);

// Fetch data from complex objects
// Find Unique colors inside each object
const colorsData = [
    {a: 'happy', b: 'robin', c: ['blue','green']}, 
    {a: 'tired', b: 'panther', c: ['green','black','orange','blue']}, 
    {a: 'sad', b: 'goldfish', c: ['green','red']}
];

const uniqueColors = colorsData.reduce((allColor, currentColor) => {
    currentColor.c.forEach(color => {
        if(allColor.indexOf(color) === -1)
            allColor.push(color);
    });
    return allColor;
}, []);

// Unique colors:
// [ 'blue', 'green', 'black', 'orange', 'red' ]
console.log('Unique colors:');
console.log(uniqueColors);