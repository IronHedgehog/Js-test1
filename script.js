'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  // Never to this
  // this.calcAge = function () {
  // console.log(2037 - this.birthYear);
};
const jonas = new Person('Jonas', 1991);
console.log(jonas);
// 1. New {} is created
//•2. function is called, this = {}
// •3. • {}• linked to prototype
//•4. • function automatically return {}
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);
console.log(jonas instanceof Person);

// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototype0f(jonas));
console.log(Person.prototype.isPrototype0f(matilda));
console.log(Person.prototype.isPrototype0f(Person));
