console.log("Hello");
console.log("Apples");
console.log("This is a statement");
console.log("This is also a statement");

let myFunc = function() {
  console.log("This is a statement");
}
myFunc();

let myFunc1 = function(name, weather) {
  console.log("Hello " + name + ".");
  console.log("It is " + weather + " today");
};
myFunc1("Adam", "sunny");

let myFunc2 = function (name, weather = "raining") {
  console.log("Hello " + name + ".");
  console.log("It is " + weather + " today");
  };
myFunc2("Adam");

let myFunc3 = function (name, weather, ...extraArgs) {
  console.log("Hello " + name + ".");
  console.log("It is " + weather + " today");
  for (let i = 0; i < extraArgs.length; i++) {
    console.log("Extra Arg: " + extraArgs[i]);
  }
};
  myFunc3("Adam", "sunny", "one", "two", "three");

let myFunc4 = function(name) {
  return ("Hello " + name + ".");
};
console.log(myFunc4("Adam"));

let myFunc5 = function (nameFunction) {
  return ("Hello " + nameFunction() + ".");
};
console.log(myFunc5(function () {
  return "Adam";
}));

let myFunc6 = function (nameFunction) {
  return ("Hello " + nameFunction() + ".");
};
let printName = function (nameFunction, printFunction) {
  printFunction(myFunc6(nameFunction));
}
printName(function () { return "Adam" }, console.log);

let myFunc7 = (nameFunction) => ("Hello " + nameFunction() + ".");
let printName1 = (nameFunction, printFunction) => printFunction(myFunc7(nameFunction));
printName1(function () { return "Adam" }, console.log);

let messageFunction = function(name, weather) {
  let message = "Hello, Adam";
  if (weather == "sunny") {
    let message = "It is a nice day";
    console.log(message);
  } else {
    let message = "It is " + weather + " today";
    console.log(message);
  }
  console.log(message);
}
messageFunction("Adam", "raining");

let messageFunction1 = function(name, weather) {
  var message = "Hello, Adam";
  if (weather == "sunny") {
    var message = "It is a nice day";
    console.log(message);
  } else {
    var message = "It is " + weather + " today";
    console.log(message);
  }
  console.log(message);
}
messageFunction1("Adam", "raining");

let myFunc8 = function(name) {
  let myLocalVar = "sunny";
  let innerFunction = function () {
    return ("Hello " + name + ". Today is " + myLocalVar + ".");
  }
  return innerFunction();
};
console.log(myFunc8("Adam"));



let firstBool = true;
let secondBool = false;

let firstString = "This is a string";
let secondString = 'And so is this';

let messageFunction2 = function (weather) {
  let message = `It is ${weather} today`;
  console.log(message);
}
messageFunction2("raining");

let daysInWeek = 7;
let pi = 3.14;
let hexValue = 0xFFFF;

let name1 = "Adam";
if (name1 == "Adam") {
  console.log("Name is Adam");
} else if (name1 == "Jacqui") {
  console.log("Name is Jacqui");
} else {
  console.log("Name is neither Adam or Jacqui");
}
switch (name1) {
  case "Adam":
    console.log("Name is Adam");
    break;
  case "Jacqui":
    console.log("Name is Jacqui");
    break;
  default:
    console.log("Name is neither Adam or Jacqui");
    break;
}

let firstVal = 5;
let secondVal = "5";
/* if (firstVal == secondVal) {
  console.log("They are the same");
} else {
  console.log("They are NOT the same");
}
if (firstVal === secondVal) {
  console.log("They are the same");
  } else {
  console.log("They are NOT the same");
} */

let myData1 = 5 + 5;
let myData2 = 5 + "5";
console.log("Result 1: " + myData1);
console.log("Result 2: " + myData2);

let myData3 = (5).toString() + String(5);
console.log("Result: " + myData3);

let firstVal1 = "5";
let secondVal1 = "5";
let result = Number(firstVal1) + Number(secondVal1);
console.log("Result: " + result);


let myArray = new Array();
myArray[0] = 100;
myArray[1] = "Adam";
myArray[2] = true;

let myArray1 = [100, "Adam", true];
console.log("Index 0: " + myArray1[0]);
myArray1[0] = "Tuesday";
console.log("Index 0: " + myArray1[0]);

for (let i = 0; i < myArray1.length; i++) {
  console.log("Index " + i + ": " + myArray1[i]);
}
console.log("---");
myArray1.forEach((value, index) => console.log("Index " + index + ": " + value));

let otherArray = [...myArray1, 200, "Bob", false];
for (let i = 0; i < otherArray.length; i++) {
  console.log(`Array item ${i}: ${otherArray[i]}`);
}

let products = [
  { name: "Hat", price: 24.5, stock: 10 },
  { name: "Kayak", price: 289.99, stock: 1 },
  { name: "Soccer Ball", price: 10, stock: 0 },
  { name: "Running Shoes", price: 116.50, stock: 20 }
];
let totalValue = products
  .filter(item => item.stock > 0)
  .reduce((prev, item) => prev + (item.price * item.stock), 0);
console.log("Total value: $" + totalValue.toFixed(2));