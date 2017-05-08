/*
    {
        "created_on" : "8 May 2017",
        "aim_of_script" : "Creating singly linked list in TypeScript",
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
}

//Starter main() function
function main(){
	let node1:SllNode = new SllNode(12)
	node1.next = new SllNode(14)
	node1.next.next = new SllNode("Bangalore")
	node1.next.next.next = new SllNode(23)
	node1.next.next.next.next = new SllNode("Raipur")

	node1.displayNodes(node1)
}

//Calling main() function
main()

/*
12
14
Bangalore
23
Raipur
*/