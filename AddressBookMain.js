const AddressBook = require("./AddressBook.js");
const prompt = require('prompt-sync')();

let addressBook = new AddressBook();
let contactDetails = new Array();
flag = true;

while (flag) {

    console.log("1. insert");
    console.log("2. display");
    console.log("3. Edit ");
    console.log("4. Delete");
    console.log("5. Count contact");
    console.log("6. exit");
    let option = parseInt(prompt("Enter your choice : "));

    switch (option) {
        case 1:
            contactDetails = addressBook.insert(contactDetails);
            break;
        case 2:
            console.log(contactDetails);
            break;
        case 3:
            contactDetails = addressBook.editContact(contactDetails);
            break;
        case 4:
            contactDetails = addressBook.deleteContact(contactDetails);
            break;
        case 5:
            console.log("Number of Contacts :" +contactDetails.length);
            break;
        case 6:
            flag = false;
            break;
        default:
            console.log("You have entered invalid input!");
            flag = false;
            break;
    }
} 