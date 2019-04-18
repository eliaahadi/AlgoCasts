// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // console.log('str---> ', str);
  let outputstring = '';

  for (let i=str.length-1; i>=0; i--) {
    outputstring += str[i]


  }
  if (outputstring === str) {
    return true;
  }
  return false;
  console.log('input str -> ', str, '\noutputstr -> ', outputstring)
}

module.exports = palindrome;
