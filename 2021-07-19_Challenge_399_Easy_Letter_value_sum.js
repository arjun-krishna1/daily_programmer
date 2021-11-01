/*
IN
string of lowercase letters
each lowercase letter is assigned a value
    from 1 for a to 26 for z

OUT
sum of values of the letters in the string
*/

// create a buffer so the value of "a" is 1
let buffer = "a".charCodeAt(0) - 1;
const letterValueSum = (str) => {
    let res = 0;
    for (let i = 0; i < str.length; i++) {
        res += str.charCodeAt(i) - buffer;
    }
    return res;
}

console.log(letterValueSum("aaa") === 3);
console.log(letterValueSum("aba") === 4);
console.log(letterValueSum("aba") === letterValueSum("baa"));
console.log(letterValueSum("zzzz") === 26*4);