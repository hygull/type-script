/*
    {
        "created_on" : "8 May 2017",
        "aim_of_script" : "Creating singly linked list in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
//Defintion of Node(with data members/traits/attributes and member funcitons/features)
var SllNode = (function () {
    //Constructor that creates the object/Node of linked list
    function SllNode(data) {
        this.data = data;
        this.next = null;
    }
    //A method that displays the data  present in each node of the singly linked list.
    SllNode.prototype.displayNodes = function (root) {
        var temp = root;
        while (temp !== null) {
            console.log(temp.data);
            temp = temp.next;
        }
    };
    return SllNode;
}());
//Starter main() function
function main() {
    var node1 = new SllNode(12);
    node1.next = new SllNode(14);
    node1.next.next = new SllNode("Bangalore");
    node1.next.next.next = new SllNode(23);
    node1.next.next.next.next = new SllNode("Raipur");
    node1.displayNodes(node1);
}
//Calling main() function
main();
/*
12
14
Bangalore
23
Raipur
*/ 
