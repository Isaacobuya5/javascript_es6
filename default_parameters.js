function sum(num1 = 3, num2 = 4) {
	return num1 + num2;
}

console.log(sum());
console.log(sum(5,6));

function printPerson(person = {}) {
	console.log(person.name)
};

console.log(printPerson());
console.log(printPerson({name: "Isaac Obuya"}));

// object literals
// previous in ES5.
let person = {
	name: "Isaac Juma",
	age: 25,
	printDetails: function() {
		console.log(`${this.name} is ${this.age} years old`);
	}
};

person.printDetails();

// in ES6.
let anotherPerson = {
	name: "Isaac Juma",
	age: 25,
	printDetails() {
		console.log(`${this.name} is ${this.age} years old`);
	}
};

person.printDetails();