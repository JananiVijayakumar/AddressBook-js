const PersonDetails = require("./PersonDetails.js");
const prompt = require('prompt-sync')();
var person = new PersonDetails();
try{
person.firstName = prompt("Enter First Name : ");
person.lastName = prompt("Enter Last Name : ");
person.address = prompt("Enter Address : ");
person.city = prompt("Enter City : ");
person.state = prompt("Enter State : ");
person.zip = prompt("Enter Zip : ");
person.phoneNumber = prompt("Enter Phone Number : ");
person.email = prompt("Enter Email : ");
console.log(PersonDetails.toString()); 
}catch (exception) {
    console.error(exception);
} 