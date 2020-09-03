const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  tel: String,
  avatar: {
    data: Buffer,
    contentType: String
  },
  schedule: Object
})
  
const EmployeeModel = mongoose.model('Employee', employeeSchema);

module.exports = EmployeeModel;