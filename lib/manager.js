// Import the parent class
const Employee = require('./employee.js');

// Create a `Manager` class that extends the `Employee` class
class Manager extends Employee {
  constructor(id, name, email, officeNum){

    super(id, name, email);

    this.officeNum = officeNum;
  }

  getOffice(){
    return this.officeNum;
  }

  getRole(){
    return 'Manager';
  }
}
