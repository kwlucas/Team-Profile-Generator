// Import the parent class
const Employee = require('./employee.js');

// Create a `Intern` class that extends the `Employee` class
class Intern extends Employee {
  constructor(id, name, email, school){

    super(id, name, email);

    this.school = school;
  }

  getSchool(){
    return this.school;
  }

  getRole(){
    return 'Intern';
  }
}
