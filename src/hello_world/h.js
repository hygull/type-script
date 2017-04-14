r = require("readline")

var prompts = r.createInterface(process.stdin, process.stdout)

prompts.question("How", function(a){
	console.log("Dear",typeof a)
	process.exit()
})