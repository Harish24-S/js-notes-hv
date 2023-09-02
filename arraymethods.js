// 📚📍 important array methods

// 📚📍 forEach
// const numbers = [4,2,5,8]

// function mulBy2(number, index){
//     console.log(`index is ${index} number is ${number}`)
//     console.log(`${number}*2 = ${number*2}`)
// }
// for(let i=0; i<numbers.length; i++){     -> traditional for loop
//     mulBy2(numbers[i], i)
// }
// numbers.forEach(mulBy2)         //-> foreach loop - here the function is passed inside the foreach method 

// another way of creating for each loop is by creating an anonymous function inside the for each loop
// and passing it as a parameter to the .forEach() method
// numbers.forEach((number) => {
//     console.log(`${number}*2 = ${number*2}`)
// })

// const users = [
//     {firstname: "Harish", age: 20},
//     {firstname: "Akash", age: 21},
//     {firstname: "Rakesh", age: 22},
//     {firstname: "Rajesh", age: 23}
// ]
// users.forEach(user => {
//     console.log(user.firstname)
// })


// 📚📍 map method
// const numbers = [3,4,6,1,8]

// const square = function(number){
//     return number * number
// }
// const squareNumbers = numbers.map(square)       // -> map method always creates a new array
// console.log(squareNumbers)

// or
// we can use arrow functions in place of normal functions like this
// const squareNumbers = numbers.map(number => {
//     return number * number
// }) 
// console.log(squareNumbers)

// one more example
// const users = [
//     {firstname: "Harish", age: 20},
//     {firstname: "Akash", age: 21},
//     {firstname: "Rakesh", age: 22},
//     {firstname: "Rajesh", age: 23}
// ]
// const firstNames = users.map(user => {
//     // user refers to every object present within the array
//     return user.firstname
// })
// console.log(firstNames)


// 📚📍 filter method
// const numbers = [1,3,2,6,4,8]
// const isEven = numbers.filter(number => {
//      return number%2 === 0              // -> filter method always returns a boolean value(true/false)
// })
// console.log(isEven)



// 📚📍 reduce method
// const numbers = [1,2,3,4,5]
// const sum = numbers.reduce((accumulator, currentvalue) => {
//     return accumulator + currentvalue
// }, 100)             // here 100 is given as the intial value of accumulator
// console.log(sum)            // 15

// functioning
//        accumulator,      currentvalue,      return 
//  1)       1                 2                 3
//  2)       3                 3                 6
//  3)       6                 4                 10
//  4)       10                5                 15

// realistic scenario for reduce
// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "tv", price: 16000},
// ]

// const cartValue = userCart.reduce((totalPrice, currentProduct) => {
//     return totalPrice + currentProduct.price
// }, 0)
// console.log(cartValue) 


// 📚📍 sort method  - sort method changes the original array
// 5, 9, 1200, 400, 3000
// 5, 9, 400, 1200, 3000 (expected ouput)
// const numbers = [5,9,1200,400,3000]
// console.log(numbers.sort())         // default sorting order is ascending
// here the sorting of numbers happens with ascii value - in this sorting of numbers the numbers are converted to strings and then checked according to their first digit ascii values
// ["5", "9", "1200", "400", "3000"]
// [53, 57, 49, 52, 51]  - ascii values of corresponding numbers in that array
// so according to this ascii values the numbers are sorted to - [1200, 3000, 400, 5, 9]

// const userNames = ["harish", "akash", "rakesh"]
// console.log(userNames.sort())      // in case of string the sorting happens perfectly as per the dictionary values

// solution of sorting numbers using sort method
// const sorted = numbers.sort((a,b)=>a-b)
// console.log(sorted)
// logic
// lets take 1200, 400
// a=1200, b=400
// a-b=800  (if positive) -> swap a and b else no swap
// so here positive so swap
// 400, 1200

// realistic scenario for sort
// const products = [
//     {productId: 1, productName: "p1", price: 300},
//     {productId: 2, productName: "p2", price: 400},
//     {productId: 3, productName: "p3", price: 200},
//     {productId: 4, productName: "p4", price: 250},
//     {productId: 5, productName: "p5", price: 30},
// ]

// const lowToHigh = products.slice(0).sort((a,b)=>{ return a.price-b.price})  // sorting the array and storing it in a new array using slice method
// console.log(lowToHigh)
// console.log(products)


// 📚📍 find method
// const myArray = ["Hello", "cat", "dog", "lion"]
// function isLength3(string){
//     return string.length === 3      
// }

// const ans = myArray.find((string) => { return string.length === 3 })     // -> returns the first occurence of string which has length 3 and if not present it returns undefined
// console.log(ans)


// const users = [
//     {userId: 1, userName: "Harish"},
//     {userId: 2, userName: "Rakesh"},
//     {userId: 3, userName: "Akash"},
//     {userId: 4, userName: "Rajesh"},
//     {userId: 5, userName: "Virat"},
// ]
 
// const ans = users.find((user) => { return user.userId === 3 })
// console.log(ans)



// 📚📍 every method    -> every method returns a boolean value
// const numbers = [2,4,6,9,10]

// const ans = numbers.every((number) => {return number%2===0})   // -> the callback function should return a boolean(true/false) value
// console.log(ans)

// example - check if the price of every product is less than 30000
// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "tv", price: 16000},
// ]

// const ans = userCart.every( product => product.price < 30000)
// console.log(ans);



// 📚📍 some method     -> some method returns a boolean value
// const numbers = [3,5,8,9]
// kya ek bhi number aisa hai jo even hai
// const ans = numbers.some(number => number%2 === 0)   // -> checks every element in the array for the condition and returns true if atleast one element satisfies the condition
// console.log(ans)


// example
// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "tv", price: 16000},
//     {productId: 4, productName: "macbook", price: 250000},
// ]
// // check if there is atleast one product which has a price of more than 1 lakh
// const ans = userCart.some(product => product.price>100000)
// console.log(ans)


// 📚📍 fill method   -> value, start, end
// usecase1  -> fill an array of certain size with certain value
// const myArray = new Array(10).fill(0)
// console.log(myArray)

// // usecase2  -> change the value of certain numbers to a certain number (change 3,4,5 to 0)
// const myArray1 = [1,2,3,4,5,6,7,8,9]
// myArray1.fill(0, 2, 5)
// console.log(myArray1)


// 📚📍 splice method  -> start, delete, insert   -> changes the original array
const myArray = ["item1", "item2", "item3"]
// delete
// const deletedItem = myArray.splice(1,1)
// console.log(myArray)
// console.log("deleted item is ", deletedItem)

//insert
// myArray.splice(1, 0, "inserted item")
// console.log(myArray)

// delete + insert
// const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2")
// console.log(myArray)
// console.log("deleted item is ", deletedItem)