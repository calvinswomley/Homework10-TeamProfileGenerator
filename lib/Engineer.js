const Employee = require('./Employee');

//Engineer subclass
class Engineer extends Employee{
    constructor(github) {
      this.github = github;
    }
    getGithub() {
        return xyz;
    }
    getRole() {
        //override 'employee' with Engineer
        return xyz;
    }

}