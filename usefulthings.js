// 📚📍 Iterables
// jispe hum for of loop chala sakte hain
// string and array are iterables
//  OBJECTS ARE NOT ITERABLE 

// const firstName = "Harish"
// for (const char of firstName){ console.log(char) }

// const items = ["item1", "item2", "item3"]
// for(let item of items){ console.log(item) }

   


// 📚📍 array like objects
// jinke paas length property hoti hai
// aur jinko hum indexx se access kar sakte hai
// example: string

// const firstName = "Harish"
// console.log(firstName.length)
// console.log(firstName[3])



// 📚📍 Sets (it is iterable)
// store data - linear
// sets also have its own methods
// no index based access
// Order is not guarenteed
// sets have no duplicates (unique items only)

// const numbers = new Set([1,2,3])
// const numbers1 = new Set("abc")
// console.log(numbers)
// console.log(numbers1)

// const items = ['item1', 'item2']
// const numbers = new Set()
// numbers.add(1)
// numbers.add(2)
// numbers.add(3)
// numbers.add(4)
// numbers.add(5)
// numbers.add(6)
// numbers.add(items)
// // numbers.add(['item1', 'item2'])  
// // numbers.add(['item1', 'item2'])   // arrays of same values can be added bcoz they both have different address
// for (const number of numbers) {
//     console.log(number)
// }

// let myArray = [1,2,4,4,5,6,5,6]
// const uniqueElements = new Set(myArray)
// console.log(uniqueElements)
// let length = 0          // to calculate the length of unique elements after using sets
// for (let number of uniqueElements) {
//     length++
// }
// console.log(length)



// 📚📍 Maps
//  maps is iterable
// store in ordered fashion
// duplicate keys are not allowed
//key value pairs
// const person = new Map()
// person.set('name','harish')       // set method takes two arguments key and value
// person.set('age', 7)
// person.set(1, 'one')        // in objects the keys can be only strings but in map keys can be any data type
// console.log(person)
// console.log(person.get(1))
// for(let key of person.keys()){
//     console.log(key, typeof key)
// }

// for(let [key, value] of person){
//     // console.log(Array.isArray(key))
//     console.log(key, value)       // returns an array of key and value
// }

// const person1 ={
//     id: 1,
//     firstname: 'harish'
// }
// const person2 ={
//     id: 2,
//     firstname: 'harshit'
// }
// const extraInfo = new Map()
// extraInfo.set(person1, {age: 8, gender: "male"})
// extraInfo.set(person2, {age: 9, gender: "female"})
// console.log(extraInfo.get(person1))
// console.log(extraInfo.get(person2).gender)



// 📚📍 clone using Object.assign
// here obj and obj 2 points to the same memory
// const obj = {
//     key1: "value1",
//     key2: "value2"
// }
// // const obj2 = obj    // clone but if obj is changed then obj2 will also change
// // const obj2 = {...obj}   // cloning using spread operator
// const obj2 = Object.assign({}, obj)     // cloning using Object.assign
// obj.key3 = "value3"
// console.log(obj)
// console.log(obj2)


// 📚📍 optional chaining
// const user = {
//     firstname: "harish",
//     address: {housenumber: 24}
// }
// console.log(user.firstname)
// console.log(user.address.housenumber)   // it returns the value 24 as expected

// same using the ?. --> this checks if the before ? if defined or not and then returns based on that - which is helpful for not getting any error if something id not defined and cannit be read
let user;
console.log(user?.firstname)    // here user is undefined
console.log(user?.address?.housenumber)     // user is undefined

