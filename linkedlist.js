class Node {
	constructor(index, label) {
		this.index = index;
		this.label = label;
		this.next = null;
		this.previous = null;
	}

	getLabel() {
		return this.label;
	}

	getIndex() {
		return this.index;
	}
}

class LinkedList {
	constructor(newNode) {
		this.first = newNode;
		this.last  = newNode;
	}

	add(newNode) {
		newNode.previous = this.last;
		this.last.next = newNode;
		this.last = newNode;
	}

	//@param value 1 list label 0 list index
	list(value) {
		let current =  this.first;
		do {
			if(value === 1)
				console.log('/', current.getLabel());
			else
				console.log('-', current.getIndex());
			current = current.next;
		}
		while(current != null);
	}
}

var myList = new LinkedList(new Node(0, 'cambur'));

myList.add(new Node(1, 'patilla'))
myList.add(new Node(2, 'mango'))
myList.add(new Node(3, 'uva'))
myList.add(new Node(4, 'fresa'))

myList.list(1);
console.log('--------------------');
myList.list(2);