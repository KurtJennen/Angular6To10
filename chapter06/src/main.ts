//import { Name, WeatherLocation } from "./modules/NameAndWeather";
import * as NameAndWeatherLocation from "./modules/NameAndWeather";
import { Name as OtherName } from "./modules/DuplicateName";
import { TempConverter } from './tempConvertor';

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

/* let myData = new Object();
myData.name = "Adam";
myData.weather = "sunny";
console.log("Hello " + myData.name + ".");
console.log("Today is " + myData.weather + "."); */

let myData1 = {
  name: "Adam",
  weather: "sunny",
  printMessages: function () {
    console.log("Hello " + this.name + ". ");
    console.log("Today is " + this.weather + ".");
    }
};
console.log("Hello " + myData1.name + ". ");
console.log("Today is " + myData1.weather + ".");
myData1.printMessages();

class MyClass {
  name: string;
  _weather: string;

  constructor(name, weather) {
    this.name = name;
    this._weather = weather;
  }
  set weather(value) {
    this._weather = value;
  }
  get weather() {
    return `Today is ${this._weather}`
  }
  printMessages() {
    console.log("Hello " + this.name + ". ");
    console.log("Today is " + this._weather + ".");
    console.log(this.weather);
  }
}
let myData2 = new MyClass("Adam", "sunny");
myData2.printMessages();

/* var MyClass1 = function MyClass1(name, weather) {
  this.name = name;
  this.weather = weather;
}
MyClass1.prototype.printMessages = function () {
  console.log("Hello " + this.name + ". ");
  console.log("Today is " + this.weather + ".");
};
var myData3 = new MyClass1("Adam", "sunny");
myData3.printMessages(); */

class MySubClass extends MyClass {
  city: string;
  
  constructor(name, weather, city) {
    super(name, weather);
    this.city = city;
  }
  printMessages() {
    super.printMessages();
    console.log(`You are in ${this.city}`);
  }
}
let myData3 = new MySubClass("Adam", "sunny", "London");
myData3.printMessages();

//let name = new Name("Adam", "Freeman");
//let loc = new WeatherLocation("raining", "London");
let name = new NameAndWeatherLocation.Name("Adam", "Freeman");
let loc = new NameAndWeatherLocation.WeatherLocation("raining", "London");
let other = new OtherName();
console.log(name.nameMessage);
console.log(loc.weatherMessage);
console.log(other.message);

let cTemp = TempConverter.convertFtoC(38);
console.log(`The temp is ${cTemp}C`);

let tuple: [string, string, string];
tuple = ["London", "raining", TempConverter.convertFtoC("38")]
console.log(`It is ${tuple[2]} degrees C and ${tuple[1]} in ${tuple[0]}`); 

let cities: { [index: string]: [string, string] } = {};
cities["London"] = ["raining", TempConverter.convertFtoC("38")];
cities["Paris"] = ["sunny", TempConverter.convertFtoC("52")];
cities["Berlin"] = ["snowing", TempConverter.convertFtoC("23")];
for (let key in cities) {
  console.log(`${key}: ${cities[key][0]}, ${cities[key][1]}`);
}