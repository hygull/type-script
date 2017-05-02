/*
    {
        "created_at" : "14 April 2017",
        "aim_of_script" : "I/O in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
        "link" : "http://www.kubilayerdogan.net/node-js-3-reading-user-input-from-the-command-line/"
    	"helper_link" : "http://stackoverflow.com/questions/31173738/typescript-getting-error-ts2304-cannot-find-name-require"
    }
*/
declare var require : any	//I got a hint to include
declare var process : any	//these 2 lines from the helper_link, finally I succeeded

var readline = require("readline")

var prompts = readline.createInterface(process.stdin, process.stdout)

prompts.question("Enter your name : ", function(name){
	console.log("Hello Dear",name)
	process.exit()
})

/*
admins-MacBook-Pro-3:io admin$ tsc commad_line_io.ts 
admins-MacBook-Pro-3:io admin$ tsc -d commad_line_io.ts 
admins-MacBook-Pro-3:io admin$ node commad_line_io.js 
Enter your name : Rishikesh Agrawani
Hello Dear Rishikesh Agrawani
*/