const students = ["soe htet wai", "a nyein", "aung", "aw thuta aung"];

//console.log("array: " + students);
//console.log("length: " + students.length);
//console.log("students[3]" + students[3]);

const teacher = {
  name: "broccoli",
  age: 24,
  class: "learn to code",
  isAlive: true,
  children: [],
  links: {
    facebook: "",
  },
};

// console.log("object: " + teacher);
// console.log("length: " + teacher.length);
// console.log("teacher[3]: " + teacher[3]);
// console.log("teacher[name]: " + teacher[name]);
//

function listStudents() {
  console.log(students);
}

listStudents();

function callStudent(num) {
  console.log(students[num]);
}

callStudent(2);
