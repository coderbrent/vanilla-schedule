const mongoose = require('mongoose');

const managerSchema = new mongoose.Schema({
  name: String,
  email: String,
  tel: String,
  avatar: {
    data: Buffer,
    contentType: String
  },
})
  
const ManagerModel = mongoose.model('Manager', managerSchema);

module.exports = ManagerModel;