/* 
   Author:  Christian M Rapp / CMR Web Studio
   Date: April 14, 2023
   Subject: Promineo Tech Front End Software Developer Wk 4 Coding Assignment
*/

const divider = '****************';     //create divider to display in console to seperate output

console.log(divider + '\n** Question 1 **\n' + divider);
console.log('Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.');

let ageArr = [3, 9, 23, 64, 2, 8, 28, 93];
console.log('ageArr = ' + ageArr);

console.log('1a) Programmatically subtract the value of the first element in the array from the value in the last element of the array ');
console.log(ageArr[ageArr.length-1] - ageArr[0]);

console.log('1b) Add a new age to your array and repeat the step above to ensure it is dynamic.')
//use the push() method to add age to end of array
ageArr.push(50);
console.log('New age added is 50   New Array:' + ageArr + ' ');
console.log('Subtract first index from new last index: ' + (ageArr[ageArr.length-1] - ageArr[0]));

console.log('1c) Use a loop to iterate through the array and calculate the average age.');
let sumAges = 0;
for (let i=0; i < ageArr.length; i++){
    sumAges += ageArr[i];
}
console.log('Average age of ageArr: ' + (sumAges/ageArr.length));

// ************************************************************************

console.log(divider + '\n** Question 2 **\n' + divider);
console.log('Create an array called names that contains the following values: Sam, Tommy, Tim, Sally, Buck, Bob.');
let nameArr = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log('nameArr = ' + nameArr);

console.log('2a) Use a loop to iterate through the array and calculate the average number of letters per name');
let sumChars = 0;
for (let i=0; i < nameArr.length; i++) {
    sumChars += nameArr[i].length;
}
console.log('Total Characters in nameArr: ' + sumChars);
console.log('Average number of letters per name: ' + (sumChars / nameArr.length));

console.log('Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.');
let nameStr = '';
for (let i=0; i < nameArr.length; i++){
    nameStr += nameArr[i] + ' ';
}
console.log('nameStr = ' + nameStr);

// ************************************************************************
console.log(divider + '\n** Question 3 **\n' + divider);
console.log('How do you access the last element of any array?');
console.log('By using array.length - 1     ex: arr[arr.length -1]')

console.log(divider + '\n** Question 4 **\n' + divider);
console.log('How do you access the first element of any array? ');
console.log('By using the zero index    ex: arr[0]')

// ************************************************************************
console.log(divider + '\n** Question 5 **\n' + divider);
console.log('Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.');
let nameLengths = [];
for (let i=0; i < nameArr.length; i++){
    nameLengths[i] = nameArr[i].length;
}
console.log('nameLengths array = ' + nameLengths);

// ************************************************************************
console.log(divider + '\n** Question 6 **\n' + divider);
console.log('Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.');

let newSum = 0;
for (let i=0; i < nameLengths.length; i++){
    newSum += nameLengths[i];
}
console.log('Sum of all elements in nameLengths array: ' + newSum);

// ************************************************************************
console.log(divider + '\n** Question 7 **\n' + divider);
console.log('Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.');

//used arrow function - brackets indicate function has a body
const concatWord = (word, n) => {
    let concatStr = '';
    for (let i=1; i <= n; i++){
        concatStr += word;
    }
    return concatStr;
}
//call the function
console.log(concatWord('Hello', 3));            

// ************************************************************************
console.log(divider + '\n** Question 8 **\n' + divider);
console.log('Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.');

//used arrow function - function has no body, just an implicit return
const createFullName = (firstName, lastName) => firstName + ' ' + lastName;

//call the function
console.log(createFullName('Christian', 'Rapp'));

// ************************************************************************
console.log(divider + '\n** Question 9 **\n' + divider);
console.log('Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.')

const arrayMath = (arr) => {
    let arrSum = 0;
    for (let i = 0; i < arr.length; i++){
        arrSum += arr[i];
    }

    if (arrSum > 100) {
        return true;
    } else {
        return false;
    }    
}
console.log('Call function with array values of 1, 10, 43: ' + arrayMath([1,10,43]));
console.log('Call function with array values of 1, 10, 43: ' + arrayMath([51,10,93]));

// ************************************************************************
console.log(divider + '\n** Question 10 **\n' + divider);
console.log('Write a function that takes an array of numbers and returns the average of all the elements in the array.');

const avgArray = (arr) => {
    let arrSum2 = 0;
    for (let i=0; i < arr.length; i++){
        arrSum2 += arr[i];
    }
    return arrSum2 / arr.length;
}
console.log('Call function with array values of 1, 10, 43 -  Average is: ' + avgArray([1,10,43]));

// ************************************************************************
console.log(divider + '\n** Question 11 **\n' + divider);
console.log('Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.');

const compareArrs = (arr1, arr2) => {
    let sum1 = 0, sum2 = 0;                       //declare and set multiple variables in one statement
    
    for (let i=0; i < arr1.length; i++) {
        sum1 += arr1[i];
    }

    for (let i=0; i < arr2.length; i++) {
        sum2 += arr2[i];
    }   
    
    if ((sum1 / arr1.length) > (sum2 / arr2.length)){
        return true;
    } else {
        return false;
    }
    
}
console.log('Is the average of array 1 > array 2? ' + (compareArrs([1,2,3], [4,5,6])));
console.log('Is the average of array 1 > array 2? ' + (compareArrs([4,5,6],[1,2,3])));

// ************************************************************************
console.log(divider + '\n** Question 12 **\n' + divider);
console.log('Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.');

//use fat arrow with return
const willBuyDrink = (isHotOutside, moneyInPocket) => { return isHotOutside && moneyInPocket > 10.50; }

console.log('Call function with values of true & 8.00: '  +(willBuyDrink(true, 8.00)));
console.log('Call function with values of true & 12.00: ' + (willBuyDrink (true, 12.00)));
console.log('Call function with values of false & 12.00: ' + (willBuyDrink (false, 12.00)));

// ************************************************************************
console.log(divider + '\n** Question 13 **\n' + divider);
console.log('Create a function of your own that solves a problem.   In comments, write what the function does and why you created it.');

/** CUSTOM METHOD #1 | showMainMenu
 *  Displays a menu for the program
*/  

//create a template literal to display main menu
const showMainMenu = () => {
    let menu = `Please pick an option or enter -1 to exit.
    1)  Question 1a-c | ages array
    2)  Question 2a-b | names array
    3)  Question 3 Answer
    4)  Question 4 Answer
    5)  Questions 5 & 6 | nameLengths
    7)  Question 7 | Concatenation Function
    8)  Question 8 | Full Name Function
    9)  Question 9 | Sum of Array Function
    10) Question 10 | Average of Array Function
    11) Question 11 | Average of Two Arrays Function
    12) Question 12 | willBuyDrink Function`;

    window.prompt(menu);      //display menu on console
    

}
showMainMenu();      //call showMenu function
