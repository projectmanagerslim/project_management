const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Notification = new Schema({
    idnotif: {
    type: String
  },
  sujet: {
    type: String
  } ,
  description: {
    type: String
  } ,
  datecreation: {
    type: Date
  } 
}, {
  collection: 'notification'
})
  
module.exports = mongoose.model('Notification', Notification)