"use strict"
// let userName = prompt("whats your name?")
// alert(userName)

// let isUserSingle = confirm('are you single?')
// alert(isUserSingle);
// let IsUserSingle = false;
// console.log(typeof IsUserSingle,IsUserSingle);
// console.log(typeof String(IsUserSingle),String(IsUserSingle));
// let nameOfJavaScript = prompt("whats the official name of javascript?")
// if(nameOfJavaScript == "ECMAScript"){
//     alert("Right!")
// }else{
//     alert("you dont know? 'ECMAScript'")
// }
// let value = prompt("enter your number")
// if(value > 0){
//     alert(1)
// }else if(value < 0){
//     alert(-1)
// }else{
//     alert(0)
// }
// let Result = a + b < 4 ? "Below" : "Over";
// let message = (login == "Employee") ? "hello" : (login == "Director") ? "Greetings" : (login == "") ? "No login" : "";
// let age = prompt("enter your age")
// age >= 14 && age <= 90 ? alert("true") : alert("false")
// let age = prompt("enter your age")
// !(age >= 14 && age <= 90) ? alert("true") : alert("false")
// let age = prompt("enter your age")
// age >= 14 && age <= 90 ? alert("false") : alert("true")
// let userName = prompt("who's there?")
// console.log(userName,'========user');
// if (userName == "admin"){
//     let password = prompt("password?")
//     if (password == "themaster"){
//         alert("welcome!")
//     }else if(password === '' || password === null){
//         alert("canceled")
//     }else {
//         alert("wrong password")

//     }
// }else if(userName === null || userName === '') {
//     alert("canceled")
// }else{
//     alert("i don't know you")
// }
// if (age >= 14 && )4
// for( i = 2 ; i < 10 ; i++){
//     if(i % 2 == 0)
//     alert(i)
// }
// let i = 0
// while(i < 3){
//     alert ( "number '${i}'")
//     i++
// }
// let userInputNumber = prompt("enter your number")
// while(userInputNumber <= 100 && userInputNumber){
//     userInputNumber = prompt("enter your number")
// }
// alert(userInputNumber)
// for(let n ; n %)
// for(i = 2 ; i <= 10 ; i++){
//     if(i % 2 == 0) console.log(i)
// }

// for(i = 2 ; i <= 10 ; i++){
//  if (i % 2 == 0){
//     alert(n);
//  }
// }

// if(browser == "edge"){
//     alert( "You've got the Edge!" );
// }else if(browser == "chrome" || browser == "firefox" || browser == "safari" || browser == "opera" ){
//     alert("Okay we support these browsers too")
// }else{
//     alert("We hope that this page looks ok!")
// }
// let a = +prompt('a?', '');
// switch(a){
//     case 0 :
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert("2,3");
//         break;
//     default:
//         break;
// }
// function checkAge(age){
//     age > 18 ? true : confirm("did parents allow you?");
// }

// function min(a,b){
//     if(a > b){
//     return b;
//     }
//     return a;
// }

// function pow(x,n){
//     if(x && n >= 1){
//         return x**n;
//     }
// }

// function sum(){
//     let a = prompt("enter your first number");
//     let b = prompt("enter your second number");
//     return a + b;
// }
// alert( sum() );

// let a = prompt('enter your first number?');
// let b = prompt('enter your second number?');

// function sum(a,b) {
//     alert(a + b)
// }

// sum(a,b)

// function sum() {
//   let a = +prompt("enter your first number?");
//   let b = +prompt("enter your second number?");
//   alert(a + b);
// }

// sum()

// let a = prompt('enter your first number?');
// let b = prompt('enter your second number?');
// let sum = (a,b) =>alert(+a + +b);
// sum(a,b)
// for(let i = 0 ; i < 15 ; i++){
//     alert(i)
// }



// let userNumberInput = +prompt("how old are you?")
// switch (userNumberInput){
//     case 18:
//         alert("you are adult");
//         break;
//     case 12:
//     case 13:
//     case 14:
//         alert("you are child");
//         break;
//     default:
//         +prompt("how old are you?");  
// }








// let userName = prompt("enter your name")
// let sirName = prompt("enter your sir name")
// function displayUserName(userName,sirName){
//     alert(userName+ " " +sirName)
// }
// // debugger;
// displayUserName(userName,sirName)



//*** ex1




// let mathScore = +prompt("enter your math score")
// let sienceScore = +prompt("enter your sience score")
// let sportScore = +prompt("enter your sport score")
// function calcGda(mathScore,sienceScore,sportScore){
//     let gda = (mathScore + sienceScore + sportScore) / 3;
//     if(gda >= 18){
//         alert("+A");
//     } else if (gda < 18 && gda >= 16){
//         alert("B");
//     }else if (gda < 16 && gda >= 14){
//         alert("C");
//     }else if (gda < 14 && gda >= 12){
//         alert("D");
//     }else{
//         alert("field")
//     }


//     // ***this not posible
//     // switch(gda){
//     //     case 20:
//     //     case 19:
//     //     case 18:
//     //         alert("+A");
//     //         break;
//     //     case 17:
//     //         case
//     //         alert("B");
//     //         break;
//     //     case gda < 16 && gda >= 14:
//     //         alert("C");
//     //         break;
//     //     case gda <   
//     // }
// }
// calcGda(mathScore,sienceScore,sportScore)



// let user = {};
// user.name = "john";
// user.surname = "smith";
// user.name = "pete"
// delete user.name;



// let schedule = {};
// function isEmpty(obj){
//     for(let key in obj){
//      return false;
//     }
//     return true;
// }
// // isEmpty(schedule)
// console.log(isEmpty(schedule))

// schedule["8:30"] = "get up";

// console.log(isEmpty(schedule))


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
//   }
// let age ={
//     john:30,
//     ann:20,
// }
// function calcSum(value){
//     let sum = 0
//     for(let person in value){
//             sum = sum + value[person]
//     }
//     return sum;
// }
// console.log(value)
// console.log(calcSum(salaries))

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
//   function multiply(value){
//     for(let key in value) {
//         if(typeof value[key] === "number" ){
//             value[key] = value[key] * 2;
//         }

//     }
//   }
//   multiply(menu);
//   console.log(menu)

// const user = {
//     name:'Ali',
//     age:30,
//     isAdmin:false,
//     surname:'aaa'
// }
// for(let key in user){
//     // console.log(user,'========key');
//     console.log(user[key],'----------value');

// }


// let schedule = {};
// function isEmpty(value){
//     for(let key in value){
//             return false;
//     }
//     return true;
// }
// console.log(isEmpty(schedule))




// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
//   }
//   function calcSum(value){
//     let sum = 0;
//     for(let key in value){
//      sum = sum + value[key];
//     }
//     return sum;
//   }
//   console.log(calcSum(salaries))


  // let menu = {
  //   width: 200,
  //   height: 300,
  //   title: "My menu",
  // };
  // function multiplyNumberic(obj){
  //   for(let key in obj){
  //       if(typeof obj[key] === "number"){
  //          obj[key] =   obj[key] * 2;
  //       }
  //   }
  // }
  // multiplyNumberic(menu)
  // console.log(menu)
//   function pow(x, n) {
//     let result = 1;

//      for (let i = 0; i < n; i++) {
//       result *= x;
//     }
//      return result;
// }

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if ( n <= 0) {
//   alert(`Power ${n} is not supported, 
//   please enter an integer number greater than zero`);
// } else {
//   alert( pow(x,n) )
// }


// let a = +prompt("enter your first number");
// let b = +prompt("enter your second number");

// function pow(a, b){
//   if(b < 0){
//     alert("your number is not intiger");
//     return;
//   }
//   return a ** b;
// }
// alert(pow(a, b));






// ****** question
// let n = +prompt("enter your number")

// function showPrimes(n) {

//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;

//     alert(i);
//   }
// }

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) return false;
//   }

//   return true;
// }



// let user = {
//   name: prompt("what's your name?"),
//   surname: prompt("what's your family?"),
//   age: prompt("how old are you?")
// }
// console.log(user)



// let student = {
//   name: "john",
//   surname: "doe",
//   age: 18,
// }

// function getName(lst){
//   for(let key in lst){
//     console.log(key);
//   }
// }
// getName(student);



// let user = {
//   isAdmin: true,
//   hasAcsses: true,
//   name: "john",
// }
// let user2 = {
//   isAdmin: false,
//   hasAcsses: true,
//   name: "john",
// }

// function hasAcsses(data){
//   for(let key in data){
//     if (typeof data[key] === false){
//       delete user.hasAcsses
//     }
//     console.log(key)
//   }
// }


// hasAcsses(user)
// hasAcsses(user2);



// let user = {
//   isAdmin: true,
//   hasAcsses: true,
//   name: "john",
// }
// let counter = 0;

// function calcNum(data){
//   for(let key in data){
//     if(data[key] != null){
//       counter++;
//     }
//     }
//     return counter;
//  }

// console.log(calcNum(user))





