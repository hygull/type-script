/*
    {
        "created_at" : "9 May 2017",
        "aim_of_script" : "Multiplying 2 matrices in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
	}
*/

//A function that multiplies 2 matrices
function multiplier(m1:number[][], m2:number[][]):number[][] {
	let r1:number = m1.length, c1:number = m1[0].length
	let r2:number = m2.length, c2:number = m2[0].length
	let m3:number[][] = [] 

	//Matrix multiplication logic
	for(let i:number=0; i<r1; i++) {
		let tempArr:number[] = []
		for(let j:number=0; j<c2; j++) {
			let tempVal:number = 0
			for(let k:number=0; k<c1; k++) {
				tempVal += m1[i][k]*m2[k][j]
			}
			tempArr.splice(tempArr.length, 0, tempVal)
		}
		m3.splice(m3.length, 0, tempArr)
	}

	return m3
}

//A funtion that shows the content of matrices
function show(m:number[][]) {
	let row:number = m.length
	let column:number = m[0].length

	for(let indexR:number=0; indexR < row; indexR++) {
		let s:string = ""
		for(let indexC=0; indexC < column; indexC++) {
			s += m[indexR][indexC] + "\t"
		}
		console.log(s + "\n")
	}
} 

//Definition of starter main( function())
function main() {
	console.log("MATRIX1:-\n")
	let matrix1:number[][] = [
								[1,1,1], 
								[1,1,1], 
								[1,1,1],
							 ] 
	show(matrix1)

	console.log("\nMATRIX2:-\n")
	let matrix2:number[][] = [
								[1,1,1], 
								[1,1,1], 
								[1,1,1],
							 ] 

	show(matrix2)

	let matrix3:number[][] = multiplier(matrix1, matrix2)

	console.log("\nMATRIX3:-\n")
	show(matrix3)
}

//Calling the starter main() function
main()

/**
MATRIX1:-

1	1	1	

1	1	1	

1	1	1	


MATRIX2:-

1	1	1	

1	1	1	

1	1	1	


MATRIX3:-

3	3	3	

3	3	3	

3	3	3
*/