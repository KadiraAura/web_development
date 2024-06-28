console.log("Catherine Cortes")
console.log("===== Example 1: for lopp as a counter ======")
let i = 1;
for(i; i < 5 ; i++){
    console.log(`iteration = ${i}`)
}

console.log("===== Example 2: for loop as a decrement counter=====")
// create a lopp counter from 10 to 0 step 1
for (let n = 10; n>=0;n--){
    console.log(`iteration = ${n}`);
}

console.log("===== Example 3: condition inside the loop =====")
// check how many even numbers are inbetween -5 and 5
let counter = 0 
for (let m = -5; m<5 ; m++){
    console.log(`iteration = ${m}`);
    if (m%2 === 0 && m !==0){
        counter++
    }
}
console.log(` There is/are ${counter} even numbers`)

console.log("===== Example 4: while loop as a counter =====")
// display number from 0 to 4
let p = 0 
while (p<=4){
    console.log(`iteration = ${p}`);
    p++
}

console.log("===== Example 5: while loop application =====")
// guess number game
const SECRET = 8

let guessnumber = parseInt(prompt("Guess number between 1 and 10"))
while(guessnumber !== SECRET){
    guessnumber = parseInt(prompt("Guess another number between 1 and 10"))
}
console.log(`Great! you guessed it! the number is ${SECRET}`)

console.log("===== Example 6: while loop in a list ======")
let colors =["magenta", "olive", "babyblue"]
let sizeofcolors = colors.length //returns 3
let index = 0
while( index<sizeofcolors){
    console.log(colors[index])
    index++
}

console.log("===== Example 7: while loop to simulate a password log- in =====")
// terminate the loop is password fails in three attempts
const password = "peterpan"
let userpassword = prompt("Enter a password")
let numberattempt = 0
while(userpassword !== password){
    numberattempt++
    if(numberattempt>2){
        console.log("Your account is locked!")
        break
    }
    userpassword = prompt(`You have ${3-numberattempt} attempts left. Enter a password again`)
}
console.log("Have a good day!")

console.log("===== Example 8: do-while loop to simulate a withdraw from a bank account =====")
// tuser try to withdraw money from an account with a balance of $1000
let withdraw = 0
let balance = 1000
do{
    withdraw = parseInt(prompt("How much do you want to withdraw?"))
    if(withdraw<=balance){
        balance = balance - withdraw
        break
    }
    else{
        console.log("Insufficient amount, try again!")
    }
}while(withdraw>balance)
console.log(`Your new balance is ${balance}`)



// simualte the colletion of a pin number of 4 digits
// ask the user to pick a transaction: vie balance, deposit, withdraw --> flow control (if, else, if, else)
// ask the user if they wants another transaction
// print result


const correctPIN = "8282"
let pin = prompt("Please enter your pin:")
numberattempt = 0
while (pin !==correctPIN){
    pin = prompt("Try again")
numberattempt++
if (numberattempt>2){
    console.log("one more try!")
        break}}
