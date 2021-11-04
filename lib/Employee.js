const Index = require('../index');

//employee class
class Employee {
    //constructor function with properties
    constructor(name, id, email) {
      this.name = name;
      this.id = Math.floor(Math.random() * 1000)+1;
      this.email = email;
    }
    //methods
    getName() {
        
        //for each variable in the 'employeelist'
            //Create card
            //add name to html file
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

module.exports = Employee;




