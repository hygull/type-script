/*
    {
        "created_on" : "9 May 2017",
        "aim_of_script" : "Inserting nodes at the beginning of the singly linked list",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

//Defintion of Node(with data members/traits/attributes and member funcitons/features)
class SllNode {
	data:number|string
	next:SllNode

	//Constructor that creates the object/Node of linked list
	constructor(data) {
		this.data = data
		this.next = null
	}

	//A method that displays the data  present in each node of the singly linked list.
	displayNodes(root:SllNode){

		let temp:SllNode = root

		while(temp !== null){
			console.log(temp.data)
			temp = temp.next
		}
	}

	insertNodesAtBeginning(root:SllNode, node:SllNode) {

		if(root == null ) { //If there is no any node in linked list
			root = node
		} else { //If linked list has some nodes
			node.next = root 
			root = node
		}

		return root
	}
}

//Starter main() function
function main(){
	console.log("Creating linked list by inserting nodes at front\n")

	//Initially linked list is empty
	let root = null

	let node = new SllNode(14)
	console.log("Adding node with data : 14")
	root = node.insertNodesAtBeginning(root, node)

	node = new SllNode(12)
	console.log("Adding node with data : 12")
	root = node.insertNodesAtBeginning(root, node)

	node = new SllNode("Bangalore")
	console.log("Adding node with data : Bangalore")
	root = node.insertNodesAtBeginning(root, node)

	node = new SllNode(56)
	console.log("Adding node with data : 56")
	root = node.insertNodesAtBeginning(root, node)

	node = new SllNode("Raipur")
	console.log("Adding node with data : Raipur")
	root = node.insertNodesAtBeginning(root, node)

	console.log("\nNow linked list contains the following data on nodes:-")
	node.displayNodes(root)
}

//Calling main() function
main()

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