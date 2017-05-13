/*
    {
        "created_at" : "13 May 2017",
        "aim_of_script" : "Using continue, break in loops",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

for(var i:number=1; i<11; i++) {
	var s:string = ""
	for(var j:number=1; j<11; j++) {
		// console.log("Ok")
		if( i%3 == 0 ) {
			continue
		}
		else {
			if( j%5 == 0)
				break  
			else
				s += i*j + "\t"
		}
	}
	console.log(s)
}

/*
1	2	3	4	
2	4	6	8	

4	8	12	16	
5	10	15	20	

7	14	21	28	
8	16	24	32	

10	20	30	40
*/