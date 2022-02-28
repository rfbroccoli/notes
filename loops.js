
// Normal Loop
for (let i = 5; i < 10; i += 1) {
    console.log("hello")
    console.log(i)
}

const array = ["a nyein", "allina ray", "aung", "daniel mcConaughey"]

const object = {
    name: "learn to code",
    teacher: "broccoli"
}

// for in array
for (let i in array) {
    console.log(i)
}

// object.name
// object["name"]

// for in obj 
for (let i in object) {
    console.log(i)
    console.log(object[i])
}



// for of
for (let i of array) {

    console.log(i)
}