// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    //initialize empty string
    let newStr = '';
    //add the letters of str in reverse to newStr
    for (let i = str.length - 1; i >= 0; i--) {
        console.log(i, str[i]);
        newStr = newStr + str[i];
    }
    console.log("newStr SHOWS ", newStr);
    return newStr;
}

module.exports = reverse;