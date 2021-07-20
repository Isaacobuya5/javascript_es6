let students = {
	name: "Isaac Obuya",
	profession: "IT",
	age: 25
};

let student = {
	course: "ICT"
};

let full_student = Object.assign(student, students);
console.log(students);
console.log(full_student);
// keys in object - return array of keys
let keys = Object.keys(full_student);
console.log(keys);

// deleting a property in object
delete full_student.age
console.log(full_student);

// reassigning a value to property
full_student.profession = "Software Developer";
console.log(full_student)

const user = {
	username: "Isaac",
	password: "qwerty"
};

console.log(user);

// wrong
// const user = {
// 	name: "Isaac",
// 	age: 24
// }
user.username = "Juma";
console.log(user);


//testing equality
const credentials = {
	username: "Isaac",
	password: "qwerty"
}

console.log(user == credentials);
// false
const user_credentials = credentials;
console.log(credentials == user_credentials);

// object destructuring
let { name, profession } = full_student;
console.log(`${name} is a ${profession}`);

// converting an object to JSON.
let studentJSON = JSON.stringify(full_student);
console.log(studentJSON);

// converting from JSON to object
let studentObject = JSON.parse(studentJSON);
console.log(studentObject);

// other way of accessing object value
console.log(studentObject["name"]);

// excercise
