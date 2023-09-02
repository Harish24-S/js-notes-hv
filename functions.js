// function singHappyBirthday(){               --->> this is function declaration
//     console.log("Happy Birthday to you....")     
// }

// const singHappyBirthday = function(){           --->> this is function expression
//     console.log("Happy Birthday to you...")
// }

// function sumOfTwoNumbers(num1, num2){
//     return num1 + num2
// }
// const returnedValue = sumOfTwoNumbers(4,5)
// console.log(returnedValue)

// function isEven(number){
//     return number % 2 === 0 
// }
// console.log(isEven(4))

// function firstCharater(s){
//     return s[0]
// }
// console.log(firstCharater("Harish"))

// CAF with input : array, target(number)
        // output : index of target if target is present

// function findTarget(arr, target){
//     for (let i=0;i< arr.length ;++i ){
//         if (target == arr [i]){
//             return `Found at Index: ${i}`
//         }
//     }
//     return "Not Found"
// }
// let arr = [1,2,3,4,5,6,7]
// console.log(findTarget(arr, 9))


// 📚📍
// ARROW FUNCTIONS 
// const singHappyBirthday = () => {
//     console.log('Happy birthday')
// }
// singHappyBirthday()

// const sumOfTwoNumbers = (num1, num2) => {
//     return num1+num2
// }
// const returnedValue = sumOfTwoNumbers(4,5)
// console.log(returnedValue)

// const isEven = number => {          -> arrow function
//     return number % 2 === 0 
// }
// console.log(isEven(4))

// const findTarget = (arr, target) => {       -> arrow function
//     for (let i=0;i< arr.length ;++i ){
//         if (target == arr [i]){
//             return `Found at Index: ${i}`
//         }
//     }
//     return "Not Found"
// }
// let arr = [1,2,3,4,5,6,7]
// console.log(findTarget(arr, 9))


// 📚📍
// hoisting - only works when function is created using function declaration
// hello()
// function hello(){ console.log("hello") }
// const hello = function(){ console.log("hello") }  --> hoisting doesnt work
// const hello = () => console.log("hello")         --> hoisting doesnt work

// console.log(hello)
// var hello = "hello world"    --> undefined
// let hello = "hello world"    --> error
// const hello = "hello world"  --> error


// 📚📍
// functions inside function
// function app(){
//     const myFunc = () => console.log("hello from myFunc")
//     const addTwo = (n1, n2) => console.log(n1 + n2)
//     const mul = (n1, n2) => console.log(n1 * n2)

//     console.log("inside app")
//     myFunc()
//     addTwo(2,3)
// }
// app()


// 📚📍
// lexical scope
// function myApp(){
//     const myVar = "value1"
//     function myFunc(){
//         const myVar = "value59"
//         console.log("inside myFunc", myVar)  --> checks for value inside that function, if not available then checks in the parent function(lexical environment) and so on..
//     }
//     console.log(myVar)
//     myFunc()
// }
// myApp()

// const myVar = "value1"
// function myApp(){
//     function myFunc(){
//         function myFunc2(){
//             console.log("inside myFunc2", myVar)  //--> since here myVar is not present in myFunc2 so it checks in the lexical environment
//         }
//         myFunc2()
//     }
//     console.log(myVar)
//     myFunc()
// }
// myApp()


// 📚📍
// block scope vs function scope
// let and const are block scope
// var is function scope

// {
//     let fName = "Harish"   //--> this is in block scope - block scope variables cannot be accessed outside the block
//     console.log(fName)
// }
// {
//     const lName = "Sarika"  //--> this is also in block scope 
//     console.log(lName)
// }

// now working with var
// {
//     var fName = "Akash"
// }
// console.log(fName)

// {
//     var fName = "Harish"
// }
// console.log(fName)

// function myApp(){
//     if(true){
//         var fName = "Harish"  //--> if we use var it can be accessed anywhere but if we use let/const the log outside the 
//         console.log(fName)          //    if block will give error as it is trying to access variable which is out of its scope
//     }
//     console.log(fName)
// }
// myApp()


// 📚📍 default parameters
// function addTwo(a, b){
//     if(typeof b === "undefined"){ b = 0 }     // -> before default parameters were introduced in js the undefined problem was handled in this way
//     return a + b
// }
// const ans = addTwo(4)
// console.log(ans)

// function addTwo(a, b=0){      // -> now using default parameters b can be set to 0 if no no value for b is passed in the argument
//     return a + b
// }
// const ans = addTwo(4)
// console.log(ans)


// 📚📍 rest parameters
// function myFunc(a,b, ...c){     // using rest parameter c
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)
//     console.log(`c is`, c)
// }
// myFunc(1,2,3,4,5,6,7,8)     //-> a,b goes into the a & b parameter and rest of the arguments go into the c as an array

// function addAll(...numbers){
//     let sum = 0
//     for (const number of numbers) { sum = sum + number }
//     console.log(sum)
// }
// addAll(1,2,3,4,5,6,7,8,9,10)


// 📚📍 param destructuring
// const person = {
//     firstName: "Harish",
//     gender: "male"
// }
// function printDetails({firstName, gender}){         //--> here we can use object destructuring in the parameter to access the objects inside it so it is param destructuring
//     console.log(firstName)
//     console.log(gender)
// }
// printDetails(person)


// 📚📍 callback functions (intro)
// function myFunc(name){
//     console.log("inside myFunc")
//     console.log(`your name is ${name}`)
// }
// function myFunc2(callback){
//     // console.log(callback)
//     console.log("I am a function")
//     callback("harish")
// }
// myFunc2(myFunc)


// 📚📍 functions returning functions
function myFunc(){
    function myFunc1(){
        console.log("Harish")
    }
    return myFunc1
}

const ans = myFunc()
console.log(ans)
ans()
