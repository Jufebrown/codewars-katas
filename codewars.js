/***********
Camel Case
***********/

// Complete the method/function so that it converts dash/underscore
// delimited words into camel casing. The first word within the output
// should be capitalized only if the original word was capitalized.

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

function toCamelCase(str){
  let workingArray = str.split(/[\-_]+/)
  for (var i = 1; i < workingArray.length; i++) {
    workingArray[i] = capitalizeFirstLetter(workingArray[i])
  }
  return workingArray.join('')
}


/***************
Simple Pig Latin
***************/
// Move the first letter of each word to the end of it, then add 'ay' to the end of the word.

function pigIt(str){
  let workingArray = str.split(" ")
  for (var i = 0; i < workingArray.length; i++) {
    workingArray[i] = workingArray[i].substr(1) + workingArray[i].substr(0, 1)
  }
  return workingArray.join("ay ").concat("ay")
}


/***************
Duplicate Encoder
***************/

// The goal of this exercise is to convert a string to a new string where each
// character in the new string is '(' if that character appears only once in the
// original string, or ')' if that character appears more than once in the original string.
// Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word){
  let workingArray = word.split("")
  let resultArray = []
  for (var i = 0; i < workingArray.length; i++) {
    let wordCounter = 0
    for (var j = 0; j < workingArray.length; j++) {
      if (workingArray[i].toLowerCase() === workingArray[j].toLowerCase()) {
        wordCounter++
      }
    }
    if (wordCounter > 1) {
      resultArray.push(")")
    } else {
      resultArray.push("(")
    }
  }
  return resultArray.join("")
}


/***************
Moving Zeros To The End
***************/

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

var moveZeros = function (arr) {
  // TODO: Program me
}
