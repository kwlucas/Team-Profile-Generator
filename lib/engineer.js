// Import the parent class
const Employee = require('./employee.js');

// Create a `Engineer` class that extends the `Employee` class
class Engineer extends Employee {
  constructor(id, name, email, github){

    super(id, name, email);

    this.github = github;
  }

  getGithub(){
    return this.github;
  }

  getGithubName(){
    let username = this.github.toString();
    return username.replace(/https:\/\/github\.com\//i, '');
  }

  getRole(){
    return 'Engineer';
  }
}
module.exports = Engineer;
