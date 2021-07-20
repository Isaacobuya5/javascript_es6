/**
Set is a collection of values.
You can iterate through elements in a set in the insertion order.
A value in a set occurs only once and it is unique.
*/

let numbers = [1,2,3,2,3,4,5,3,6,7];

// duplicates are removed
let numberSet = new Set(numbers);
console.log(numberSet);

let students = new Set();
// adding value inside a set
students.add("Isaac Obuya");
students.add("James Onyango");
students.add("Kiprop Kosgey");
students.add("Isaac Obuya");

console.log(students);

// getting the length of a set
console.log(students.size);

// check if a value exists in a set
console.log(students.has("Isaac Obuya"));

// iterate through a set
students.forEach((student) => console.log(student));

// delete an element from a set
students.delete("Isaac Obuya");

console.log(students);

// clear an entire set
students.clear();

console.log(students);