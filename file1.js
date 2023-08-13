"use strict";
//intro to variables
//variables cn stor some info
//we can update and use that info later

// var firstName = "Harish";
// console.log(firstName);

// firstName = "Mohit";
// console.log(firstName);


// 📚📍  String Methods

// trim(), toUpperCase(), toLowerCase(), slice()
// let name = "Harish"
// let age = 22 + ""  // number to string
// console.log(typeof age)

// let myStr = +"34" //string to number
// console.log(typeof myStr)

// let string
// // console.log(typeof null) --> It is a bug/error in js

// let myNum1 = BigInt(12345)
// let myNum2 = 3423
// // console.log(typeof myNum1, typeof myNum2)
// // console.log(myNum1 + BigInt(myNum2))

// let age = 7
// let drink = age > 5 ? "coffee" : "milk"
// console.log(drink)


// for(let i=0;i<10;i++){
//     if(i===4){
//         break
//     }
//     console.log(i)
// }

// console.log("------------")

// for(let i=0;i<10;i++){
//     if(i===4){
//         continue
//     }
//     console.log(i)
// }
// console.log("hello there!")


// let fruits = ["apple", "mango", "banana"]
// console.log(typeof fruits)
// console.log(Array.isArray(fruits))

// fruits.push("grapes")
// console.log(fruits)

// console.log(fruits.pop())
// console.log(fruits)

// 📚📍 primitive type
// let num1 = 6
// let num2 = num1
// console.log("the value of num1 is", num1)
// console.log("the value of num2 is", num2)
// num1++
// console.log("the value of num1 is", num1)
// console.log("the value of num2 is", num2)

// 📚📍 reference type
// let array1 = ["item1", "item2"]
// let array2 = array1
// console.log("array1", array1)
// console.log("array2", array2)
// array1.push("item3")
// console.log("array1", array1)
// console.log("array2", array2)

// 📚📍 cloning array - 4types
// let array1 = ["item1", "item2"]
// let array2 = ["item1", "item2"]
// let array2 = array1.slice(0)
// let array2 = [].concat(array1)   -> using concatination
// let array2 = [...array1, "item3", "item4"]   -> using spread operator
// console.log(array2)
// let myNewArray = [..."123456"]
// console.log(myNewArray)

// console.log(array1===array2)



// 📚📍 for of loop
// const fruits = ["apple", "mango", "grapes"]
// for(let fruit of fruits){
//     console.log(fruit.toUpperCase())
// }
// 📚📍 for in loop
// for(let fruit in fruits){
//     console.log(fruits[fruit].toUpperCase())
// }




// 📚📍 array destruturing
// const array = ["value1", "value2"]
// storing array values in some variables
// usual method
// let v1 = array[0]
// let v2 = array[1]
// console.log(v1, v2)

// destructuring method (ES7)
// let [v1, v2] = array
// console.log(v1, v2)

// const myArray = ["value1", "value2", "value3", "value4"]
// let [myVar1, myVar2, ...myNewArray] = myArray  -> creating a new array of value3 and value4
// console.log(myVar1, myVar2, myNewArray)




// 📚📍📚📍 OBJECTS

// const person = {
//     name: "Harish",
//     age: "20",
//     hobbies: ["football", "music", "eating"]
// }
// console.log(person.name)
// console.log(person.hobbies)
//  person.gender = "male"
//  console.log(person.gender)

// 📚📍 dot vs bracket notation
// console.log(person["name"])
// console.log(person["age"])
// person["gender"] = "male"
// console.log(person["gender"])

// let key = "city"        -> adding city to person object using another variable key
// person[key] = "Bangalore"
// console.log(person.city)

// let key = "email"
// person[key] = "harish@gmail.com"
// console.log(person.email)

// use bracket notation when key name has two words with space in between
// person["person city"] = "Bangalore"
// console.log(person["person city"])


// 📚📍 Iterating through object
// for in loop
// for(let key in person){
//     // console.log(`${key}: ${person[key]}`)
//     console.log(key, ":", person[key])
// }

// Object.keys()
// console.log(typeof Object.keys(person))
// console.log(Array.isArray(Object.keys(person)))  --> Object.keys() returns an array
// for (const key of Object.keys(person)) {
//     console.log(key, ":", person[key])
// }


// const key1 = "objkey1"
// const key2 = "objkey2"

// const value1 = "myvalue1"
// const value2 = "myvalue2"

// const obj = {}
// obj[key1] = value1
// obj[key2] = value2

// OR

// const obj = {
//     [key1]: value1,
//     [key2]: value2
// }
// console.log(obj)

// 📚📍 spread operator in objects
// const obj1 = {
//     key1: "value1",
//     key2: "value2"
// }

// const obj2 = {
//     key1: "valueUnique",
//     key3: "value3",
//     key4: "value4"
// }

// const obj = {...obj1, ...obj2}
// const objj = {...obj2, ...obj1}
// const objj = {...obj2, ...obj1, key5: "value5"}
// console.log(obj)
// console.log(objj)

// const newObj = {..."abc"}
// console.log(newObj)

// 📚📍 Object destructuring
const band = {
    bandName: "led zeppelin",
    famousSong: "Stairway to heaven",
    year: 1986,
    anotherFamousSong: "kashmir"
}

// let bandName = band.bandName
// let famousSong = band.famousSong
// console.log(bandName, famousSong)

// let {bandName, famousSong} = band
// console.log(bandName, famousSong)

// let {bandName:v1, famousSong:v2} = band
// console.log(v1, v2)

// let {bandName, famousSong, ...restProps} = band
// console.log(restProps)

// 📚📍📚📍 Objects inside Array  **IMP
const users = [
    {userId: 1, firstName: "Harish", gender: "male"},
    {userId: 2, firstName: "Rakesh", gender: "female"},
    {userId: 3, firstName: "Akash", gender: "gay"},
]
// console.log(users)
// for(let user of users){
//     console.log(user)
//     console.log(user.firstName)
// }
 
// 📚📍 Nested destructuring
// const [user1, user2, user3] = users
// console.log(user1)

// const [,{firstName},{gender}] = users  --> destructuring the particular object
// console.log(firstName, gender)
// const [,{firstName: user2FirstName},{gender: user3Gender}] = users  --> declaring as variable
// console.log(user2FirstName, user3Gender)

const [,{firstName: user2FirstName, userId},{gender: user3Gender}] = users 
console.log(user2FirstName,userId, user3Gender)





