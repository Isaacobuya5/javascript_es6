//string
let first_name = "Isaac";

for (let word of first_name) {
	console.log(word);
}

// array
let numbers = [1,2,3,4,5,6];

let sum = 0;
for (number of numbers) {
	sum += number;
}

console.log(sum);

// map
let programming = new Map();
programming.set("web development", "HTML and CSS");
programming.set("mobile apps", "Java and Kotlin");
programming.set("data analytics", "Python and R");

for (let language of programming) {
	console.log(language);
}

for (let language of programming.keys()) {
	console.log(language);
}

for (let language of programming.values()) {
	console.log(language);
}

for (let language of programming.entries()) {
	console.log(language);
}