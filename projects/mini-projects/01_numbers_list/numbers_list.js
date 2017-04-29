/*
    {
        "created_at" : "29 April 2017",
        "aim_of_script" : "To show the list of numbers into the Browser
                           (Based on the input final number in the list)",
        "coded_by" : "Rishikesh Agrawani",
        "help_links" : [
            "link1":"https://github.com/Microsoft/TypeScriptSamples/tree/master/greeter",
            "link2":"http://stackoverflow.com/questions/12989741/the-property-value-does-not-exist-on-value-of-type-htmlelement"
        ]
    }
*/
function printArray() {
    var s = "";
    var nstr = document.getElementById("inp1").value;
    if (!/^(\+|\-)?(\d+)$/.test(nstr)) {
        document.getElementById("demo").innerHTML = "&#x2614; <h3 style='color:red;'>This is not a valid +ve integer</h3>";
        return;
    }
    var n = parseInt(nstr);
    if (n < 1) {
        document.getElementById("demo").innerHTML = "&#x2606;<h3 style='color:orange;'> Enetered number should be >= 1</h3>";
        return;
    }
    var counter = 1;
    for (var i = 1; i <= n; i++, counter++) {
        if (counter % 10 == 0) {
            s += i + "<hr>";
            continue;
        }
        s += i + "\t";
    }
    console.log(s); //For test the working
    document.getElementById("demo").innerHTML = "&#x2602;<br><hr>" + s;
}
//# sourceMappingURL=numbers_list.js.map