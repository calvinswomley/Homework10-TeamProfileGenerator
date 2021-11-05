//Packages required for this application
const Inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
//const Html = require('./dist/index.html');
const fs = require('fs');
//import { getSystemErrorName } from 'util';
var employeeList = [];

function runClasses() {
  fs.readFile('./src/card.html', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      const cardData = data;
      for (i=0; i < employeeList.length; i++) {
        fs.appendFile('./dist/index.html', cardData, (appendErr) => appendErr ? console.error(appendErr) : console.info('Success'));
      }
    }
  })
  fs.readFile('./src/end.html', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      const endData = data;
      fs.appendFile('./dist/index.html', endData, (appendErr) => appendErr ? console.error(appendErr) : console.info('Success'));
    }
  });
  //var cardArea = document.querySelector("#cardarea");
  //var outterDiv = `<div class="card" style="width: 18rem;"></div>`
}

// Command line question prompt and write to file
  function init() {
    Inquirer
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
        type: 'input',
        name: 'id',
        message: 'What is employee id?'
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
       console.log(employeeList);
       response.confirm ? init() : runClasses();
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