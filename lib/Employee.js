const fs = require('fs');
const employeeList = require('../index.js');

//employee class
class Employee {
    //constructor function with properties
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
    //methods
    getName() {
        //
        const name = `${this.name}`;   
    };
    getId() {
        console.log(`ID: ${this.id}`);
    };
    getEmail() {
        console.log(`Email: ${this.email}`);
    };
    getRole() {
        //return employee
        console.log("Employee");
    };
}

const employees = employeeList;
//call each function in the class
//for (const employee of employeeList) {
    
    
    //create card
    
    //set Id
    //execute classes above





