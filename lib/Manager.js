const Employee = require('./Employee').default;

//Manager subclass
class Manager extends Employee{
    constructor(github) {
      this.github = github;
    }
    getGithub() {
        return xyz;
    }
    getRole() {
        //override 'employee' with Manager
        return xyz;
    }
}