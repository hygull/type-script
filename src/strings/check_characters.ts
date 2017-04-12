/*
    {
        "created_at" : "12 April 2017",
        "aim_of_script" : "To check whether 2 strings have same characters or not",
        "coded_by" : "Rishikesh Agrawani",
    }
*/


//A function that checks whether 2 strings have same characters or not
//It returns true/false
function has_same_characters(name1:string, name2){ //name2:string gives error(check it)
	
	while(name1){  //When string becomes empty then the expression evalutes to false
		var character:string =  name1[0] 
		if ( !name2.includes(character) )
		{
			return false
		}

		name1 = name1.replace(character, "" )
		name2 = name2.replace(character, "" )
	}
	return true

}

//Case1
var result:boolean = has_same_characters("Rishikesh", "Sandeep")
console.log( "Comparison('Rishikesh', 'Sandeep')  => ", result)

//Case2
result = has_same_characters('eSdanpe', 'Sandeep')
console.log( "Comparison('eSdanpe', 'Sandeep')  => ", result)

//Case3
result = has_same_characters('eSdanpeXYZ', 'Sandeep')
console.log( "Comparison('eSdanpeXYZ', 'Sandeep')  => " ,result)


/*
Comparison('Rishikesh', 'Sandeep')  =>  false
Comparison('eSdanpe', 'Sandeep')  =>  true
Comparison('eSdanpeXYZ', 'Sandeep')  =>  false
*/