const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Conge = new Schema({
  id: {
    type: String
  },
  description: {
    type: String
  } ,
  datesortie: {
    type: Date
  } ,
  dateretour: {
    type: Date
  } ,
  etat: {
    type: String
  } ,

}, {
  collection: 'conge'
})
  
module.exports = mongoose.model('Conge', Conge)