/*
    {
        "created_on" : "9 May 2017",
        "aim_of_script" : "Inserting nodes at the beginning of the singly linked list",
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
    SllNode.prototype.insertNodesAtBeginning = function (root, node) {
        if (root == null) {
            root = node;
        }
        else {
            node.next = root;
            root = node;
        }
        return root;
    };
    return SllNode;
}());
//Starter main() function
function main() {
    console.log("Creating linked list by inserting nodes at front\n");
    //Initially linked list is empty
    var root = null;
    var node = new SllNode(14);
    console.log("Adding node with data : 14");
    root = node.insertNodesAtBeginning(root, node);
    node = new SllNode(12);
    console.log("Adding node with data : 12");
    root = node.insertNodesAtBeginning(root, node);
    node = new SllNode("Bangalore");
    console.log("Adding node with data : Bangalore");
    root = node.insertNodesAtBeginning(root, node);
    node = new SllNode(56);
    console.log("Adding node with data : 56");
    root = node.insertNodesAtBeginning(root, node);
    node = new SllNode("Raipur");
    console.log("Adding node with data : Raipur");
    root = node.insertNodesAtBeginning(root, node);
    console.log("\nNow linked list contains the following data on nodes:-");
    node.displayNodes(root);
}
//Calling main() function
main();
/**
Creating linked list by inserting nodes at front

Adding node with data : 14
Adding node with data : 12
Adding node with data : Bangalore
Adding node with data : 56
Adding node with data : Raipur

Now linked list contains the following data on nodes:-
Raipur
56
Bangalore
12
14
*/ 
