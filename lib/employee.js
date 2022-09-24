class Employee {
    constructor(id, name, email) {
      this.id = id;
      this.name = name;
      this.email = email;
    }
  
    getId() {
        return this.id.toString();
    }

    getName() {
        return this.name.toString();
    }

    getEmail() {
        return this.email.toString();
    }

    getRole(){
        return 'Employee';
    }
  }
  module.exports = Employee;
  