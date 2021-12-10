class PersonDetails {

    //property
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    //constructor
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    /**
     * @param {string} firstName
     */
    set firstName(firstName) {
        this.firstName = firstName;
        let firstnameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (firstnameRegex.test(firstName)) {
            this.firstName = firstName;
        } else {
            throw "First Name is Incorrect!";
        }
    }

    get firstName() {
        return this.firstName;
    }

    /**
     * @param {string} lastName
     */
    set lastName(lastName) {
        this.lastName = lastName;
        let lastnameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (lastnameRegex.test(lastName)) {
            this.lastName = lastName;
        } else {
            throw "Last Name is Incorrect!";
        }
    }

    get lastName() {
        return this.lastName;
    }

    /**
     * @param {string} address
     */
    set address(address) {
        let addressRegex = RegExp('^([0-9A-Za-z\\s,-\\\\.]{4,})$');
        if (addressRegex.test(address)) {
            this.address = address;
        } else {
            throw "Address is Incorrect!";
        }
    }

    get address() {
        return this.address;
    }

    /**
     * @param {any} city
     */
    set city(city) {
        let cityRegex = RegExp('^([A-Za-z\\s]{4,})$');
        if (cityRegex.test(city)) {
            this.city = city;
        } else {
            throw "City is Incorrect!";
        }
    }

    get city() {
        return this.city;
    }

    /**
     * @param {any} state
     */
    set state(state) {
        this.state = state;
        let stateRegex = RegExp('^([A-Za-z\\s]{4,})$');
        if (stateRegex.test(state)) {
            this.state = state;
        } else {
            throw "State is Incorrect!";
        }
    }

    get state() {
        return this.state;
    }

    /**
     * @param {any} zip
     */
    set zip(zip) {
        this.zip = zip;
        let zipRegex = RegExp('^([0-9]{6})|([0-9]{3}(\\s)[0-9]{3})$');
        if (zipRegex.test(zip)) {
            this.zip = zip;
        } else {
            throw "Zip is Incorrect!";
        }
    }

    get zip() {
        return this.zip;
    }

    /**
     * @param {any} phoneNumber
     */
    set phoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
        let phoneRegex = RegExp('^(0|91)?[\\s][0-9]{10}$');
        if (phoneRegex.test(phoneNumber)) {
            this.phoneNumber = phoneNumber;
        } else {
            throw "Phone Number is Incorrect!";
        }
    }

    get phoneNumber() {
        return this.phoneNumber;
    }

    /**
     * @param {any} email
     */
    set email(email) {
        this.email = email;
        let emailRegex = RegExp('^[A-Za-z0-9!#$%&*+\\\\=?`{|}~^-]+(?:\\.[A-Za-z!#$%&*+\\\\=?`{|}~^-]+)*@(?:([0-9-]{1}|[a-zA-Z]{3,5})\\.)+[a-zA-Z]{2,3}$');
        if (emailRegex.test(email)) {
            this.email = email;
        } else {
            throw "Email is Incorrect!";
        }
    }

    get email() {
        return this.email;
    }

    //method
    toString() {
        return "firstName = " + this.firstName + ", lastName = " + this.lastName + ", address = " + this.address + ", city = " + this.city +
            ", state = " + this.state + ", zip = " + this.zip + ", phoneNumber = " + this.phoneNumber + ", email = " + this.email;
    }
}

//exporting the class file to another class
module.exports = PersonDetails; 