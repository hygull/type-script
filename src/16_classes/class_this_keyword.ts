/*
    {
        "created_at" : "27 April 2017",
        "aim_of_script" : "To represent the importance of this keyword in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

class College{
	name:string
	branches:string[]
	likes:number
	totalStudents:number

	//Here this keyword overcomes ambiguity as local parameter names is same as field names
	constructor(name,branches, likes, totalStudents){
		this.name = name
		this.branches = branches
		this.likes = likes
		this.totalStudents = totalStudents
	}

	getCollegeDetails():void{	//function keyword is not required here
		console.log("Colege name : ",this.name)
		console.log("Branches : ",this.branches)
		console.log("Likes : ", this.likes)
		console.log("Total numebr of students : ",this.totalStudents)
	}
}

function main(){
	//Instantiation
	var nitCollege = new College("NIT Raipur", ["CSE", "IT", "MECHANICAL"], 200000, 4000)
	var scienceCollege = new College("Science College", ["PCM", "CZG", "CBZ"], 700000, 8000)

	//Calling getCollegeDetails() method
	nitCollege.getCollegeDetails()

	console.log()	//Newline

	scienceCollege.getCollegeDetails()
}

main();

/*
Colege name :  NIT Raipur
Branches :  [ 'CSE', 'IT', 'MECHANICAL' ]
Likes :  200000
Total numebr of students :  4000

Colege name :  Science College
Branches :  [ 'PCM', 'CZG', 'CBZ' ]
Likes :  700000
Total numebr of students :  8000
*/