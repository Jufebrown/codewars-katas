/***********
Camel Case
***********/

// Complete the method/function so that it converts dash/underscore
// delimited words into camel casing. The first word within the output
// should be capitalized only if the original word was capitalized.

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

function toCamelCase(str){
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

function pigIt(str){
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

function duplicateEncode(word){
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

const moveZeros = function (arr) {
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
  return !s ? !(part1 || part2) :
    s[0] == part1[0] && isMerge(s.slice(1), part1.slice(1), part2) ||
    s[0] == part2[0] && isMerge(s.slice(1), part1, part2.slice(1));
}


/***************
Break camelCase
***************/

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// solution('camelCasing') // => should return 'camel Casing'

const solution = (str) => {
  return str.replace(/([A-Z])/g, ' $1');
};

solution('camelCasing');