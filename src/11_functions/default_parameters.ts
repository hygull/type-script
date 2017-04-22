/*
    {
        "created_at" : "23 April 2017",
        "aim_of_script" : "Using default parameters in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

function showDetails(name="Rishikesh Agrawani", age=24, city="Kondagaon", state="Chhattisgarh", country="India")
{
	console.log("My name is "+name)

	console.log("I am "+age+" years old.")

	console.log("I lives in "+city+".")

	console.log("Which is in "+state+ " state of country "+country+".\n")
}

showDetails()

showDetails("Suryapratap Surya")

showDetails("Hemkesh", 22)

showDetails("Virendra Sehwag", 38, "Najafgarh", "Delhi")

/*
My name is Rishikesh Agrawani
I am 24 years old.
I lives in Kondagaon.
Which is in Chhattisgarh state of country India.

My name is Suryapratap Surya
I am 24 years old.
I lives in Kondagaon.
Which is in Chhattisgarh state of country India.

My name is Hemkesh
I am 22 years old.
I lives in Kondagaon.
Which is in Chhattisgarh state of country India.

My name is Virendra Sehwag
I am 38 years old.
I lives in Najafgarh.
Which is in Delhi state of country India.

*/