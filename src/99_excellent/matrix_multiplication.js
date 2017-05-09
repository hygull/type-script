/*
    {
        "created_at" : "9 May 2017",
        "aim_of_script" : "Multiplying 2 matrices in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
//A function that multiplies 2 matrices
function multiplier(m1, m2) {
    var r1 = m1.length, c1 = m1[0].length;
    var r2 = m2.length, c2 = m2[0].length;
    var m3 = [];
    //Matrix multiplication logic
    for (var i = 0; i < r1; i++) {
        var tempArr = [];
        for (var j = 0; j < c2; j++) {
            var tempVal = 0;
            for (var k = 0; k < c1; k++) {
                tempVal += m1[i][k] * m2[k][j];
            }
            tempArr.splice(tempArr.length, 0, tempVal);
        }
        m3.splice(m3.length, 0, tempArr);
    }
    return m3;
}
//A funtion that shows the content of matrices
function show(m) {
    var row = m.length;
    var column = m[0].length;
    for (var indexR = 0; indexR < row; indexR++) {
        var s = "";
        for (var indexC = 0; indexC < column; indexC++) {
            s += m[indexR][indexC] + "\t";
        }
        console.log(s + "\n");
    }
}
//Definition of starter main( function())
function main() {
    console.log("MATRIX1:-\n");
    var matrix1 = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
    ];
    show(matrix1);
    console.log("\nMATRIX2:-\n");
    var matrix2 = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
    ];
    show(matrix2);
    var matrix3 = multiplier(matrix1, matrix2);
    console.log("\nMATRIX3:-\n");
    show(matrix3);
}
//Calling the starter main() function
main();
