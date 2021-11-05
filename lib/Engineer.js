const Employee = require('./Employee').default;

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