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
        const name = `${this.name}`;   
    }
    getId() {
        console.log(`ID: ${this.id}`);
    }
    getEmail() {
        console.log(`Email: ${this.email}`);
    }
    getRole() {
        //return employee
        console.log("Employee");
    }
}
module.exports = Employee;




