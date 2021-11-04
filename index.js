//Packages required for this application
var inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
var fs = require('fs');
const { getSystemErrorName } = require('util');
var employeeList = [];

function runClasses() {
  console.log("success");
}




function addAnother() {
  inquirer
    .prompt(
      {
        type: 'confirm',
        name: 'confirm',
        message: 'Add another employee?',
      }
    )
    .then((response) => {
      console.log(response.confirm);
      //console.log(Employee.getName());
      response.confirm ? init() : Employee.getName();
   })
   .catch((error) => {
     if (error.isTtyError) {
       console.log("There is an error.")
     } else {
       console.log("Something went wrong.")
     }
   })
 }

// Command line question prompt and write to file
  function init() {
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is employee name?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is employee email?',
      },
      {
        type: 'list',
        message: 'What is their title?',
        name: 'title',
        choices: ['Engineer', 'Manager', 'Intern'],
      },
      {
        type: 'input',
        name: 'school',
        message: 'Name of school for undergradute degree?',
        when: (response) => response.title == 'Intern',
      },
      {
        type: 'input',
        name: 'office',
        message: 'Office number?',
        when: (response) => response.title == 'Manager',
      },
      {
        type: 'input',
        name: 'github',
        message: 'GitHub username?',
        when: (response) => response.title == 'Engineer',
      },
      {
        type: 'confirm',
        name: 'confirm',
        message: 'Add another employee?',
      },
    ])
    .then((response) => {
       employeeList.push(response);
       response.confirm ? init() : runClasses();
       addAnother();
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("There is an error.")
      } else {
        console.log("Something went wrong.")
      }
    })
  }
  
  // Function call to initialize app
  init();