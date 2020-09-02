/**
 * @desc this class is used to generate new Managers. A manager can: 
 * 1. Read/write/create Employees 
 * 2. View all employee data
 * 
 * @param {String} name input from the newUser form (manager only)
 * @param {String} phone input from the newUser form (manager only)
 * @param {String} email input from the newUser form (manager only)
 * @param {Buffer} avatar input from the newUser form (manager only)
 */

module.exports = class Manager {
  constructor({ name, phone, email, avatar }) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.avatar = avatar;
  }

  logManager() {
    console.log(this.name);
    console.log(this.phone);
    console.log(this.email);
    console.log(this.avatar);
  }



}