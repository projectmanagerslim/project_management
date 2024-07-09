const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Admin = new Schema({
    id: {
        type: String
      },
      username: {
    type: String
  },
  password: {
    type: String
  },
  email: {
    type: String
  },
  role: {
    type: String
  },
  permissions: {
    type: String
  }
 
}, {
  collection: 'admin'
})
  
module.exports = mongoose.model('Admin', Admin)