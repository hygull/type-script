/*
    {
        "created_at" : "29 April 2017",
        "aim_of_script" : "To check whether an entered number is prime or not"
        "coded_by" : "Rishikesh Agrawani",
    }
*/

function isPrime(){
		var s:string="";
		var nstr= (<HTMLInputElement>document.getElementById("inp1")).value

		if(! /^(\+|\-)?(\d+)$/.test(nstr)){ // if(!(/(\+|\-)?(^\d+)$/.test(nstr) ) ){
			document.getElementById("demo").innerHTML = "&#x2614; <h3 style='color:red;'>This is not a valid +ve integer</h3>"
			return
		}

		var n:number = parseInt(nstr)
		
		if (n<1){
			document.getElementById("demo").innerHTML = "&#x2606;<h3 style='color:orange;'> Enetered number should be >= 1</h3>";
			return
		}

		if(n==1){
			document.getElementById("demo").innerHTML = "&#x2606;<h3 style='color:orange;'> 1 is not a prime number</h3>";
			return
		}

		var counter:number=1
		var isPrime:boolean = true 

		for(var i:number=2; i<=Math.floor(n/2);	i++){
		   if (n%i==0){
		   		isPrime=false
		   		break
		   }
		}


		if (isPrime){
			s += n+" is a prime number."
		}else{
			s += n+" is not a prime number."
		}

	console.log(s) //For test the working
	document.getElementById("demo").innerHTML = "&#x2602;<br><hr>"+s;
}
