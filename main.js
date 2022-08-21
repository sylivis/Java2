//==========Exercise #1 ===========//
/*
Write a function that parses through the below Object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


function favoriteFoods(person){
    for (let i = 0; i < Object.keys(person).length; i++){   
            console.log(Object.values(person)[i])
    }
}

favoriteFoods(person3)
//=======Exercise #2=========//
/*
Write an Object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/
function Person(name, age){
    
    this.name = name
    this.age = age
    

// Use an arrow to create the printInfo method
this.printInfo = ( () => {
    console.log(`Name: ${this.name} Age: ${this.age}`)
    return 'logged'
    })
// Create another arrow function for the addAge method that takes a single parameter
this.addAge = ( () => {
    this.age++
    return `${this.name} is now ${this.age}`
    })
}
// Create our Person Prototype
let me = new Person('baily', 22)

//printInfo
me.printInfo()

// Adding to the age 
me.addAge()
console.log(me.addAge())




// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const bigWord = (string) => {
    return new Promise( (resolve, reject) =>{
        if (string.length >= 10){resolve(true)}
        else{reject(false)}
    })
    .then( () => {
        console.log("Big Word")
    })
    .catch(() =>{
        console.log("Small Number")
    })
}

bigWord(`supercalafrajalisticexpialadocious`)
bigWord(`smallword`)

//java script code wars new problem:

// return masked string
function maskify(cc) {
    const newCc = []
    if(cc.length > 4){
    for(let i = (cc.length - 4); i > 0; i--){
        newCc.push("#")
    }
    }
    for(let i = 4; i >= 1; i--) {
    newCc.push(cc[cc.length - i])
    }
    return newCc.join("")
}

console.log(maskify(`123351243o153i34o2`))

//Javascript translate

function XO(str) {
    x = 0
    o = 0
    for(i = 0; i < str.length; i++){
      if (str.toLowerCase()[i] == "x"){x++}
      if (str.toLowerCase()[i] == "o"){o++}
    }
    return x == o
}

console.log(XO(`xxoo`))