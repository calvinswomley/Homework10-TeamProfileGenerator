//Packages required for this application
const inquirer = require('inquirer');
const employeeExport = require('./lib/Employee.js');
const fs = require('fs');

var employeeList = [];

function endHtmlFile() {
  fs.readFile('./src/end.html', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const endData = data;
      fs.appendFile('./dist/index.html', endData, (appendErr) => appendErr ? console.error(appendErr) : console.info('Success'));
    }
  });
}

// Command line question prompt and write to file
  const promptUser = () => {
   return inquirer.prompt([
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
  }
const generateEngineer = ({ name, email, id, title, github }) =>
  `<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${title}</p>
    </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: ${id}</li>
            <li class="list-group-item">Email: <a href="mailto: ${email}" class="card-link">${email}</a></li>
            <li class="list-group-item">Github: <a href="https://github.com/${github}" class="card-link">${github}</a></li>
        </ul>
  </div>`;
const generateManager = ({ name, title, id, email, office }) =>
  `<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${title}</p>
    </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: ${id}</li>
            <li class="list-group-item">Email:  <a href="mailto: ${email}" class="card-link">${email}</a></li>
            <li class="list-group-item">Office: ${office}</li>
        </ul>
  </div>`;
const generateIntern = ({ name, title, id, email, school }) =>
  `<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${title}</p>
    </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: ${id}</li>
            <li class="list-group-item">Email:  <a href="mailto: ${email}" class="card-link">${email}</a></li>
            <li class="list-group-item">School: ${school}</li>
        </ul>
  </div>`;
  
  // Function call to initialize app
const init = () => {
  promptUser()
  .then((response) => {
    if (response.title == 'Engineer'){
      fs.appendFile('./dist/index.html', generateEngineer(response), (appendErr) => appendErr ? console.error(appendErr) : console.info('Success'));
      response.confirm ? init() : endHtmlFile();
    }
    if (response.title == 'Manager'){
      fs.appendFile('./dist/index.html', generateManager(response), (appendErr) => appendErr ? console.error(appendErr) : console.info('Success'));
      response.confirm ? init() : endHtmlFile();
    };
    if (response.title == 'Intern'){
      fs.appendFile('./dist/index.html', generateIntern(response), (appendErr) => appendErr ? console.error(appendErr) : console.info('Success'));
      response.confirm ? init() : endHtmlFile();
    };
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("There is an error.")
    } else {
      console.log("Something went wrong.")
    }
  })
};

init();