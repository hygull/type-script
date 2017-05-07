/**
    {
        "created_at" : "6 May 2017",
        "aim_of_script" : "Displaying result based on pecentage",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
function showResult(percentage) {
    if (percentage > 100) {
        console.log("Pecentage should not exceed 100.");
    }
    else if (percentage < 0) {
        console.log("Percentage should not be less than 0.");
    }
    else {
        if (percentage >= 60) {
            console.log("You passed the exam with FIRST DIVISION.");
        }
        else if (percentage >= 45) {
            console.log("You passed the exam with SECOND DIVISION.");
        }
        else if (percentage >= 33) {
            console.log("You passed the exam with THIRD DIVISION.");
        }
        else {
            console.log("Sorry, You are failed in the exam.");
        }
    }
}
//Defintion of starter main() function
function main() {
    showResult(47);
    showResult(88);
    showResult(34);
    showResult(3);
    showResult(-2);
    showResult(105);
}
//Calling main() function
main();
/**
You passed the exam with SECOND DIVISION.
You passed the exam with FIRST DIVISION.
You passed the exam with THIRD DIVISION.
Sorry, You are failed in the exam.
Percentage should not be less than 0.
Pecentage should not exceed 100.
*/
