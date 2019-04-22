// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    // create empty obj
    // loop thru str
    // count duplicates by going thru loop twice and checking if existing value equals 2nd string loop value
    // if it does, add the str char to the empty obj

    let dupobj = {};
    let countvalue = 0;

    for (let i = 0; i < str.length; i++) {
        // for (let k = 0; k < str.length; k++) {
        //     if (str[i] === str[k]) {
        //         countvalue += 0;
        //         strchar = str[i]
        //         countobj = { strchar: countvalue }
        //         dupobj = Object.assign(dupobj, countobj)
        //         console.log('dup obj ', str[i], str[k], dupobj)
        //     }


        // }

        if (dupobj.hasOwnProperty(str[i])) {
            dupobj[str[i]]++;
        } else {
            dupobj[str[i]] = 1;
        }
    }
    var min = Infinity,
        max = -Infinity,
        x;
    for (x in dupobj) {
        if (dupobj[x] < min) min = dupobj[x];
        if (dupobj[x] > max) {
            max = dupobj[x];
            maxkey = x;
        }
    }
    console.log('dup obj ', dupobj, min, maxkey, max);
    return maxkey;
}

module.exports = maxChar;