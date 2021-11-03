//Packages required for this application
var inquirer = require('inquirer');
var fs = require('fs');

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
    ])
    .then((response) => 
        fs.appendFile('./dist/employee.json', `${JSON.stringify(response)}\n`, (err) =>
        console.log("An error occured: " + err)
        )
    )
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