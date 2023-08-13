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

// hoisting - only works when function is created using function declaration
// hello()
// function hello(){ console.log("hello") }
// const hello = function(){ console.log("hello") }  --> hoisting doesnt work
// const hello = () => console.log("hello")         --> hoisting doesnt work

// console.log(hello)
// var hello = "hello world"    --> undefined
// let hello = "hello world"    --> error
// const hello = "hello world"  --> error


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


// lexical scope
