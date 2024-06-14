// const chief = "Sir Chief Stephen"
// const nod = 2
// const daughter1 = "Chelsea"
// const daughter2 = "Barcelona"
// const age = 23 
// const hobby = "weaving"
// const sentence = chief + "" + " has " + nod + " daughters named " + daughter1+ "" + " and " + "" + daughter2 + " they are both " + age + " years old and they love " + hobby
// const sentence2 = `${chief} has ${nod} daughters named ${daughter1} and ${daughter2} they are both ${age} years old and they love  ${hobby}`


// console.log(sentence2);

// const time = Date()
// console.log(time);


// function sayHello() {
//     return console.log("Hello Stephen");
// }

// sayHello();

// function add() {
//     return console.log(10+10);
// }

// add()


// function profit(cp, sp) {
//       let profitVar = sp - cp
//       return console.log(profitVar)
// }

// profit(10000, 20000);


// function loss(sp, cp){
//     let lossG = cp - sp
//     return console.log(lossG)
// }

// loss(2000000, 200000)

// function percentagePro(sp, cp) {
//     let p = sp -cp
//     let pPro = (p/cp) * 100
//     return console.log(pPro)
// }
// percentagePro(10000, 2000)


// function area(r) {
//     let area1 = (4 * Math.round(23.45)) * r**2
//     return console.log(area1);
// }

// area(2);


// let age = 17

// if (age < 18) {
//     console.log("You are a minor");
// } else {
//     console.log("you are an adult");
// }


// let customer = 78

// if (customer !== "student"){
//     console.log("pay 100% for ticket price");

// } else {
//     console.log("pay 50% for ticket price");
// }

// function inecAgeChecker(age) {
//     if (age <= 17) {
//         console.log("You are not eligible to vote");
//     }

//     else {
//         console.log("you are eligible to vote");
//     }
// }

// inecAgeChecker(18);

// let age;
// age = 2

// if (age >= 1 && age <= 10){
//     console.log("You've got 75% discount");
// }
// else if(age >= 11 && age <= 17){
//     console.log("You've got 50% discount");
// }
// else if(age >= 18 && age <= 29){
//     console.log("You've got 35% discount");
// } else{
//     console.log("You've got no discount");
// }

// function inecAgeChecker(age){
//     if (age >= 1 && age <= 10){
//         console.log("You've got 75% discount");
//     }
//     else if(age >= 11 && age <= 17){
//         console.log("You've got 50% discount");
//     }
//     else if(age >= 18 && age <= 29){
//         console.log("You've got 35% discount");
//     } else{
//         console.log("You've got no discount");
// }
// }

// inecAgeChecker(18);



// const softwareClass = ["stephen", "dml", "juwon", "alhaja", "Oreva", "soboss", "olamide", "bossbaby", "olaitan", "mr.lee", "solomon", "cm" ]
// console.log(softwareClass);
// console.log(softwareClass[4]);
// softwareClass[1]=false
// console.log(softwareClass);

// console.log(softwareClass.length);
// softwareClass.push('skimma', 'mary')
// console.log(softwareClass);
// softwareClass.pop()
// console.log(softwareClass);
// softwareClass.shift()
// console.log(softwareClass);
// softwareClass.unshift('stephen')
// console.log(softwareClass);


// let person = new Object()
// person.firstName = "stephen";
// person.lastName = "Alu";
// person.Phone = "8143184639";
// person.hobbies = ["coding", "playing footbal"];
// person.married = false;
// person.debt = null;
// person.drive = function() {console.log("now driving");};

// person.drive();
// console.log(person);


// let Person = {
//     firstName : "stephen",
//     lastName : "Alu",
//     phone : "8143184639",
//     hobbies : ["coding", "playing football"],
//     married : false,
//     debt : null,
// }
// Person.lastName = "Ayomitan"
// Person.hobbies[1]= "gaming"
// console.log(Person.hobbies);

// let staff = {
//    firstNAME : "stephen",
//    lastName : "Alu",
//    age : "15",
//    email : "alustephenayomitan@gmail.com",
//    spd : 5000,
//    nodp : 24,
//    spm : function() {
//     return this.spd * this.nodp
// },
// LogDriver: function() {
//     console.log("now driving " + this.lastName);
// },
// test: function(d,s) {
//     return d * s
// }
// }
// console.log(staff.test(20, 10));
// staff.LogDriver();



// let alhaja = "muslim"

// if (alhaja != "muslim") {
//    console.log("no meat 4 u");
// } else{
//     console.log("meat 4 everybody");
// }


// let DML = "babalawo"

// if (DML === "mechanic"){
//     console.log("engine oil for you");
// } else if(DML === "carpenter") {
//       console.log("wood for you");
// } else if (DML === "soldier"){
//     console.log("sorry for boko haram");
// }else if (DML === "olopa"){
//     console.log("50 naira for you");
// }else{
//     console.log("sacrifice for you");
// }

// let cm = "director"
// switch(cm){
//     case(cm == "janitor"):
//     console.log("not my job");
//     break;

//     case(cm == "security"):
//     console.log("not my job");
//     break;

//     case(cm == "Admin"):
//     console.log("not my job");
//     break;
//     default:
//     console.log("my job");
// }


// for(let i = 1; i <= 9; i++){
// let row = "";

// for (let j = 1; i <= 9; j++){
//     row += `${i} * ${j} = ${i * j}t`;
// }

// console.log(row);
// }


// let i = 0

// while(i < 9){
//     console.log(i);
//     i++
// }
// console.log("executed");


// let dolly = {
//     firstName : "stephen",
//     lastName : "Alu",
//     middleName : "Ayomitan",
//     job : "web developer",
//     salary : undefined,
//     drive : function() {
//         return `the name of the web developer is ${this.lastName}`
//     },
//     array : ["mum", "dad", "jose"],
//     test : function() {console.log(this);},
//     move : function() {
//         console.log(`my name is ${this.middleName}`);
//     }


// }

// console.log(dolly);

// dolly.lastName = "Adedayo"

// console.log(dolly);

// console.log(dolly.drive());

// dolly.array[2] = "stella"

// console.log(dolly.array);

// dolly.test()

// dolly.move()


const steve = function(speed, time){
    this.speed = speed;
    this.time = time;
    this.drive = function(speed, time) {console.log(speed * time);};
    this.logDriver = function() {console.log(`the time is ${this.time}`);};
}

const car = new steve (50, 50);
const car2 = new steve (40, 30);
const car3 = new steve (20, 23);

car.drive(30, 6)
car3.logDriver();
