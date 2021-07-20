// without arrow functions
var sum = function (num1, num2) {
	return num1 + num2;
}

console.log(sum(10,12));

// with arrow functions
var sum = (num1, num2) => num1 + num2;

console.log(sum(10,12));

// arrow function without paramter
var message = () => "hello there";

console.log(message());

// arrow function with one parameter
var message = name => `Hello ${name}`;

console.log(message("Isaac"));

// arrow functions versus this binding.
var person = {
	name: "Isaac Obuya",
	fav_languages: ["Javascript", "Java", "Python"],
	printDetails() {
		console.log(this.name);
		// this represents the current object i.e. person
		this.fav_languages.forEach(function (language) {
			// this in this case represents the current function thus we have no access to object properties
			console.log(`${this.name} likes ${language}`);
		});
	}
}

// number of soultions e.g.
// first way
var person = {
	name: "Isaac Obuya",
	fav_languages: ["Javascript", "Java", "Python"],
	printDetails() {
		let _this = this;
		// this represents the current object i.e. person
		this.fav_languages.forEach(function (language) {
			// this in this case represents the current function thus we have no access to object properties
			console.log(`${_this.name} likes ${language}`);
		});
	}
}

var person = {
	name: "Isaac Obuya",
	fav_languages: ["Javascript", "Java", "Python"],
	printDetails() {
		// this represents the current object i.e. person
		this.fav_languages.forEach(function (language) {
			// this in this case represents the current function thus we have no access to object properties
			console.log(`${this.name} likes ${language}`);
		}.bind(this));
	}
}

// third - modern way
var person = {
	name: "Isaac Obuya",
	fav_languages: ["Javascript", "Java", "Python"],
	printDetails() {
		this.fav_languages.forEach((language) => console.log(`${this.name} likes ${language}`));		
	}
}

person.printDetails();