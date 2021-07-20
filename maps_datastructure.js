// map is a data structure that associates the keys with other values.
// example

let users = {
	1: {
		username: "Isaac",
		password: "qwerty12345"
	},
	2: {
		username: "John",
		password: "john12345"
	},
	3: {
		username: "james",
		password: "james12345"
	}
}

console.log(users["1"]);

// Object property names must be strings. If you need a map whose keys cant easily be converted to strings
// such as objects - you CANNOT use an object as your map.
// Fortunately, Javascript comes with a class called "Map" that is written for this exact purpose.
// It stores a mapping and allows any type of keys.

let loggedInUsers = new Map();
loggedInUsers.set("username", "Isaac");
loggedInUsers.set("password", "qwerty12345");
loggedInUsers.set("age", 25);

// getting values from map
let username = loggedInUsers.get("username");
console.log(username);
console.log(loggedInUsers.has("username"));
console.log(loggedInUsers.keys());
console.log(loggedInUsers.values());

// iterating
loggedInUsers.forEach((user) => {
	console.log(user);
})