/*
IN
matrix of numbers 20x20 matrix

OUT
minimum sum of 20 elements from input matrix
    no two elements come from the same row or column

BRUTE FORCE
    try each possile combination recursively
        cache results
    
initialize minimum sum as infinity
iterate through each row
    iterate through each column
        if the sum of this solution is in the the hashmap, make that this sum
        else
            recursively get the minimum sum of the rest of the matrix without this row and column
            add the value of this element to the minimum sum of the rest to get this sum
            add to hashmap
        update minimum sum if this is a minimum sum

return minimum sum

CACHING, HOW?
can have matrices with same dimensions but different values (bottom-left four, top-right four)
    top-right corner index, side length
    always going to be square


*/

mat_5 = [123456789,   752880530,   826085747,  576968456,   721429729,
    173957326,   1031077599,  407299684,  67656429,    96549194,
    1048156299,  663035648,   604085049,  1017819398,  325233271,
    942914780,   664359365,   770319362,  52838563,    720059384,
    472459921,   662187582,   163882767,  987977812,   394465693]

const minimumMatrixSum = (mat, topLeft) => {
    let res = 0;
    for (let i = 0; i < str.length; i++) {
        res += str.charCodeAt(i) - buffer;
    }
    return res;
}
    