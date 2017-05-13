/*
    {
        "created_at" : "13 May 2017",
        "aim_of_script" : "Using continue, break in loops",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
for (var i = 1; i < 11; i++) {
    var s = "";
    for (var j = 1; j < 11; j++) {
        // console.log("Ok")
        if (i % 3 == 0) {
            continue;
        }
        else {
            if (j % 5 == 0)
                break;
            else
                s += i * j + "\t";
        }
    }
    console.log(s);
}
