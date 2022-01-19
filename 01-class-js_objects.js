// Class code examples

const person1 ={
    firstName : "Chee Kean",
    weight : 231,
    height : 1.7
}
const person2 ={
    firstName : "Marco Santo",
    weight : 231,
    height : 1.7
}
const person3 ={
    firstName : "Carlos",
    weight : 231,
    height : 1.7
}
const person4 ={
    firstName : "Caroluna",
    weight : 231,
    height : 1.7
}

// Accessing a property with dot notation
console.log(

    person1.firstName,
    person1.weight

);

// Accessing a property with bracket notation (indirect access, or dynamic)
console.log(person1["weight"])

const personKey = ["firstName", "weight", "height"]
for(key of personKey){
    console.log(`person1 ${key}: `, person1[key])
}

person1.nationality = "Italian"

console.log(person1.favFood)

person1["favFood"] = "pizza"

const newKey = `favourite book`
person1[newKey] = "guide to galaxy"

console.log("person1: ", person1);

for(key in person1) console.log(person1[key]);

console.log(Object.keys(person1))

for (key of Object.keys(person1)) console.log(person1[key]);

const tween1 = {
    name: "Carlos"
}
const tween2 = {
    name: "Carlos"
}

console.log(tween1 === tween2,
    "Carlos" === "Carlos");