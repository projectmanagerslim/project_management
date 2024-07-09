const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Absence = new Schema({
    id: {
    type: String
  },
  dateabsence: {
    type: Date
  },
  duree: {
    type: Number
  },
  typeabsence: {
    type: String
  }

}, {
  collection: 'absences'
})
  
module.exports = mongoose.model('Absence', Absence)