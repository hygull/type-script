var readline = require("readline");
var prompts = readline.createInterface(process.stdin, process.stdout);
prompts.question("Enter your name : ", function (name) {
    console.log("Hello Dear", name);
    process.exit();
});
/*
admins-MacBook-Pro-3:io admin$ tsc commad_line_io.ts
admins-MacBook-Pro-3:io admin$ tsc -d commad_line_io.ts
admins-MacBook-Pro-3:io admin$ node commad_line_io.js
Enter your name : Rishikesh Agrawani
Hello Dear Rishikesh Agrawani
*/ 
