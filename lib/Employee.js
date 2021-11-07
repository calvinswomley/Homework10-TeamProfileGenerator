const fs = require('fs');

//employee class
var employeeExport = class Employee1 {
    //constructor function with properties
    constructor(name, id, email, role) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = role;
    }
    //methods
    getName() {
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
    
module.exports = employeeExport;





