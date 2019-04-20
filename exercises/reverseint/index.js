// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let reverse = n.toString()
    console.log("input ", reverse)

    let outstring = '';\
    for (let i = reverse.length - 1; i >= 0; i--) {

        if (reverse[i] != '-') {
            outstring += reverse[i]
        }
        console.log("loop ", i, outstring)
    }
    let outnum = parseInt(outstring)

    if (reverse[0] === '-') {
        console.log("test", reverse[0])
        outnum = outnum * -1;
    }


    console.log("output string ", reverse[0], outstring, outnum)


    return outnum;
}

module.exports = reverseInt;