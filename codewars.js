/***********
Camel Case
***********/

// Complete the method/function so that it converts dash/underscore
// delimited words into camel casing. The first word within the output
// should be capitalized only if the original word was capitalized.

const capitalizeFirstLetter = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

function toCamelCase(str) {
  let workingArray = str.split(/[\-_]+/);
  for (var i = 1; i < workingArray.length; i++) {
    workingArray[i] = capitalizeFirstLetter(workingArray[i]);
  }
  return workingArray.join('');
}

/***************
Simple Pig Latin
***************/
// Move the first letter of each word to the end of it, then add 'ay' to the end of the word.

function pigIt(str) {
  let workingArray = str.split(' ');
  for (var i = 0; i < workingArray.length; i++) {
    workingArray[i] = workingArray[i].substr(1) + workingArray[i].substr(0, 1);
  }
  return workingArray.join('ay ').concat('ay');
}

/***************
Duplicate Encoder
***************/

// The goal of this exercise is to convert a string to a new string where each
// character in the new string is '(' if that character appears only once in the
// original string, or ')' if that character appears more than once in the original string.
// Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word) {
  let workingArray = word.split('');
  let resultArray = [];
  for (var i = 0; i < workingArray.length; i++) {
    let wordCounter = 0;
    for (var j = 0; j < workingArray.length; j++) {
      if (workingArray[i].toLowerCase() === workingArray[j].toLowerCase()) {
        wordCounter++;
      }
    }
    if (wordCounter > 1) {
      resultArray.push(')');
    } else {
      resultArray.push('(');
    }
  }
  return resultArray.join('');
}

/***************
Moving Zeros To The End
***************/

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

const moveZeros = function(arr) {
  let len = arr.length;
  for (var i = 0; i < len; i++) {
    if (arr[i] === 0) {
      arr.push(arr.splice(i, 1)[0]);
      i--;
      len--;
    }
  }
  return arr;
};

/***************
Merged String Checker
***************/

// At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.

// The restriction is that the characters in part1 and part2 are in the same order as in s.

// The interviewer gives you the following example and tells you to figure out the rest from the given test cases.

// For example:

// 'codewars' is a merge from 'cdw' and 'oears':

// s:  c o d e w a r s   = codewars
// part1:  c   d   w         = cdw
// part2:    o   e   a r s   = oears

// const isMerge = (s, part1, part2) => {
//   let part1Pos = 0;
//   let part2Pos = 0;
//   console.log('s:', s, 'part1:', part1, 'part2:', part2);
//   if(s.split(' ').length > 1) {
//     let sArr = s.split(' ');
//     let part1Arr = part1.split(' ');
//     let part2Arr = part2.split(' ');
//     let part1ArrPos = 0;
//     let part2ArrPos = 0;
//     for (let i = 0; i < sArr.length; i++) {
//       if (sArr[i] !== part1Arr[part1ArrPos]) {
//         if (sArr[i] !== part2Arr[part2ArrPos]) {
//           return false;
//         }
//       }
//     }
//   }

//   if(s.length !== part1.concat(part2).length) {
//     console.log('false');
//     return false;
//   }
//   for (let i = 0; i < s.length; i++) {
//     if(s[i] !== part1[part1Pos]) {
//       if(s[i] !== part2[part2Pos]) {
//         console.log('false');
//         return false;
//       } else {
//         part2Pos++;
//       }
//     } else {
//       part1Pos++;
//     }
//   }
//   console.log('true');
//   return true;
// };

// isMerge('Bananas from Bahamas', 'Bahas', 'Bananas from am' );

// couldn't pass all tests here's best practices:
function isMerge(s, part1, part2) {
  return !s
    ? !(part1 || part2)
    : (s[0] == part1[0] && isMerge(s.slice(1), part1.slice(1), part2)) ||
        (s[0] == part2[0] && isMerge(s.slice(1), part1, part2.slice(1)));
}

/***************
Break camelCase
***************/

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// solution('camelCasing') // => should return 'camel Casing'

const solution = str => {
  return str.replace(/([A-Z])/g, ' $1');
};

solution('camelCasing');

/***************
IP validation
***************/

// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0..255 (included).

// Input to the function is guaranteed to be a single string.

// Examples
// valid inputs:
// 1.2.3.4
// 123.45.67.89

// invalid inputs:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Note: leading zeros (e.g. 01.02.03.04) are considered not valid in this kata!

// from google search
function isValidIP(str) {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
}

/***************
Catching Car Mileage Numbers
***************/

// Let's make it so Bob never misses another interesting number. We've hacked into his car's computer, and we have a box hooked up that reads mileage numbers. We've got a box glued to his dash that lights up yellow or green depending on whether it receives a 1 or a 2 (respectively).

// It's up to you, intrepid warrior, to glue the parts together. Write the function that parses the mileage number input, and returns a 2 if the number is "interesting" (see below), a 1 if an interesting number occurs within the next two miles, or a 0 if the number is not interesting.

// Note: In Haskell, we use No, Almost and Yes instead of 0, 1 and 2.

// "Interesting" Numbers
// Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

// Any digit followed by all zeros: 100, 90000
// Every digit is the same number: 1111
// The digits are sequential, incementing†: 1234
// The digits are sequential, decrementing‡: 4321
// The digits are a palindrome: 1221 or 73837
// The digits match one of the values in the awesomePhrases array
// † For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
// ‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.

// So, you should expect these inputs and outputs:

// "boring" numbers
// isInteresting(3, [1337, 256]);    // 0
// isInteresting(3236, [1337, 256]); // 0

// progress as we near an "interesting" number
// isInteresting(11207, []); // 0
// isInteresting(11208, []); // 0
// isInteresting(11209, []); // 1
// isInteresting(11210, []); // 1
// isInteresting(11211, []); // 2

// nearing a provided "awesome phrase"
// isInteresting(1335, [1337, 256]); // 1
// isInteresting(1336, [1337, 256]); // 1
// isInteresting(1337, [1337, 256]); // 2
// Error Checking
// A number is only interesting if it is greater than 99!
// Input will always be an integer greater than 0, and less than 1,000,000,000.
// The awesomePhrases array will always be provided, and will always be an array, but may be empty. (Not everyone thinks numbers spell funny words...)
// You should only ever output 0, 1, or 2.

const incrementingCheck = numString => {
  let prev = 0;
  for (var i = 1; i < numString.length; i++) {
    if (parseInt(numString[prev]) === 9) {
      if (parseInt(numString[i]) !== 0) {
        return false;
      }
    } else if (parseInt(numString[i]) !== parseInt(numString[prev]) + 1) {
      return false;
    }
    prev++;
  }
  return true;
};

const decrementingCheck = numString => {
  let prev = 0;
  for (var i = 1; i < numString.length; i++) {
    if (parseInt(numString[i]) !== parseInt(numString[prev]) - 1) {
      return false;
    }
    prev++;
  }
  return true;
};

const isInteresting = (number, awesomePhrases) => {
  // checks to see if number is less than 98
  if (number < 98) {
    return 0;
  }

  if (number === 98 || number === 99) {
    return 1;
  }

  let numberPlus1 = number + 1;
  let numberPlus2 = number + 2;

  //checking to see if number is all repeated digits
  let numberString = number.toString();
  let numberPlus1String = numberPlus1.toString();
  let numberPlus2String = numberPlus2.toString();
  console.log('repeat', /^(.)\1+$/.test(numberString));
  if (/^(.)\1+$/.test(numberString)) {
    return 2;
  }
  if (
    /^(.)\1+$/.test(numberPlus1String) ||
    /^(.)\1+$/.test(numberPlus2String)
  ) {
    return 1;
  }

  // checks to see if number is a digit followed by zeros
  let tenPower = number.toString().length;
  let tenPowered = Math.pow(10, tenPower - 1);
  let zerocheck = number % tenPowered;
  if (zerocheck === 0) {
    return 2;
  } else if (numberPlus1 % tenPowered === 0 || numberPlus2 % tenPowered === 0) {
    return 1;
  }

  // test awesome array
  for (let i = 0; i < awesomePhrases.length; i++) {
    if (number === awesomePhrases[i]) {
      return 2;
    } else if (
      numberPlus1 === awesomePhrases[i] ||
      numberPlus2 === awesomePhrases[i]
    ) {
      return 1;
    }
  }

  // test incrementing
  if (incrementingCheck(numberString)) {
    return 2;
  } else if (
    incrementingCheck(numberPlus1String) ||
    incrementingCheck(numberPlus2String)
  ) {
    return 1;
  }
  // test decrementing
  if (decrementingCheck(numberString)) {
    return 2;
  } else if (
    decrementingCheck(numberPlus1String) ||
    decrementingCheck(numberPlus2String)
  ) {
    return 1;
  }

  // checks palindrome
  if (
    numberString ===
    numberString
      .split('')
      .reverse()
      .join('')
  ) {
    return 2;
  } else if (
    numberPlus1String ===
      numberPlus1String
        .split('')
        .reverse()
        .join('') ||
    numberPlus2String ===
      numberPlus2String
        .split('')
        .reverse()
        .join('')
  ) {
    return 1;
  }

  return 0;
};

// best practices answer:

// function isInteresting(number, awesomePhrases) {
//   var tests = [
//     function(n) { return /^\d00+$/.test(n); },
//     function(n) { return /^(\d)\1+$/.test(n); },
//     function(n) { return RegExp(n).test(1234567890); },
//     function(n) { return RegExp(n).test(9876543210); },
//     function(n) { return n + '' == (n + '').split('').reverse().join(''); },
//     function(n) { return awesomePhrases.some(function(p) { return p == n; }); }
//   ];

//   var interesting = 0;
//   tests.some(function(test) {
//     if (number > 99 && test(number))
//       return interesting = 2;
//     else if ((number > 98 && test(number + 1)) || (number > 97 && test(number + 2)))
//       interesting = 1;
//   });
//   return interesting;
// }

/***************
Next bigger number with the same digits
***************/

// You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

// nextBigger(12)==21
// nextBigger(513)==531
// nextBigger(2017)==2071
// If no bigger number can be composed using those digits, return -1:

// nextBigger(9)==-1
// nextBigger(111)==-1
// nextBigger(531)==-1

// const singleDigitCheck = () => {

// }

// function nextBigger(n) {
//   let returnValue;
//   if(n <== 9) {

//   } else {

//   }
// }

/***************
Hamming Numbers
***************/

// A Hamming number is a positive integer of the form 2^i3^j5^k, for some non-negative integers i, j, and k.

// Write a function that computes the nth smallest Hamming number.

// Specifically:

// The first smallest Hamming number is 1 = 2^03^05^0
// The second smallest Hamming number is 2 = 2^13^05^0
// The third smallest Hamming number is 3 = 2^03^15^0
// The fourth smallest Hamming number is 4 = 2^23^05^0
// The fifth smallest Hamming number is 5 = 2^03^05^1
// The 20 smallest Hamming numbers are given in example test fixture.

// Your code should be able to compute all of the smallest 5,000 (Clojure: 2000) Hamming numbers without timing out.

// exponents for first numbers
// 000 == 1
// 100 == 2
// 010 == 3
// 200 == 4
// 001 == 5
// 110 == 6
// 300 == 8
// 020 == 9
// 101 == 10
// 210 == 12
// 011 == 15
// 400 == 16
// 120 == 18
// 201 == 20
// 310 == 24
// 002 == 25
// 030 == 27
// 111 == 30
// 500 == 32
// 220 == 36
// 301 == 40
// 021 == 45
// 102 == 50
// 130 == 54

let hammingArr = [];
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 50; j++) {
    for (let k = 0; k < 20; k++) {
      let num = Math.pow(2, i) * Math.pow(3, j) * Math.pow(5, k);
      hammingArr.push(num);
    }
  }
}

hammingArr.sort(function(a, b) {
  return a - b;
});

const hamming = n => {
  n--;
  return hammingArr[n];
};
