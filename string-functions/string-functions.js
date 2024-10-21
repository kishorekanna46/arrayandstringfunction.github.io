let NameOfString =" welcome to my shop  ";

//Length of the String
 
let LengthOfString =NameOfString.length;
console.log(LengthOfString);

// Substring of the string
 
let subStringWithEnd = NameOfString.substring(7,10);
console.log(subStringWithEnd);

let subStringWithOutrEnd = NameOfString.substring(4);
console.log(subStringWithOutrEnd);

// Trim the Whit Space

let trimTheSpace = NameOfString.trim();
console.log(trimTheSpace);

// Find the word in the string

let searchTheWord = NameOfString.includes('shop');
console.log(searchTheWord);

let searchTheWordWithPosition = NameOfString.includes('shop',10);
console.log(searchTheWordWithPosition);

// Find the index of the string

let indexOfStringWithPosition = NameOfString.indexOf('to',8);
console.log(indexOfStringWithPosition);

let indexOfStringWithOutPosition = NameOfString.indexOf('Welcome');
console.log(indexOfStringWithOutPosition);

// Replace the Excisting String

let replaceString = NameOfString.replace('shop','market');
console.log(replaceString);

// Split the string to array

let splitedString = NameOfString.split(' ');
console.log(splitedString);

let splitedStringWithLimit = NameOfString.split(' ',3);
console.log(splitedStringWithLimit);

// Basic Functions

let upperCaseString = NameOfString.toUpperCase();
console.log(upperCaseString);

let lowerCaseString = NameOfString.toLocaleLowerCase();
console.log(lowerCaseString);

let welComeMSG = 'welcome '

let repeatString = welComeMSG.repeat(5);
console.log(repeatString);

let charterPosition = NameOfString.charAt(14);
console.log(charterPosition);

let asciiValue = NameOfString.charCodeAt(18);
console.log(asciiValue);